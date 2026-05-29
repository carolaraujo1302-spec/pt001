import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {
  usuario: Usuario | null = null;
  loading = false;

  errorMessage = '';
  successMessage = '';

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private usuarioService: UsuarioService,
    public auth: AuthService,
    private cdr: ChangeDetectorRef
  ) { }

  formatarCPF(): void {

    if (!this.usuario) return;

    this.usuario.cpf = this.usuario.cpf
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
      .substring(0, 14);
  }


  ngOnInit(): void {
    if (!this.auth.isAdmin()) {
      this.errorMessage = 'Acesso restrito: apenas admin.';
      return;
    }

    const idRaw = this.route.snapshot.paramMap.get('id');
    const id = Number(idRaw);
    if (!idRaw || Number.isNaN(id)) {
      this.errorMessage = 'ID inválido.';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.usuarioService.getUsuarioById(id).subscribe({
      next: (u) => {

        console.log('[EditUser] usuário recebido:', u);

        this.usuario = {
          ...u,

          cpf: u.cpf || '',
          macroSetor: u.macroSetor || '',
          status: u.status || 'ativo',
          criadoEm: u.criadoEm || '',
          senha: u.senha || '',
          role: u.role || 'user'
        };
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Erro ao carregar usuário.';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }


  salvar(): void {

    if (!this.usuario?.id) return;

    this.errorMessage = '';
    this.successMessage = '';

    // REMOVE ESPAÇOS
    this.usuario.nome = this.usuario.nome.trim();
    this.usuario.email = this.usuario.email.trim();
    this.usuario.cpf = this.usuario.cpf.trim();
    this.usuario.macroSetor = this.usuario.macroSetor.trim();

    // NOME E MACRO SETOR MAIÚSCULO
    this.usuario.nome =
      this.usuario.nome.charAt(0).toUpperCase() +
      this.usuario.nome.slice(1).toLowerCase();

    this.usuario.macroSetor =
      this.usuario.macroSetor.charAt(0).toUpperCase() +
      this.usuario.macroSetor.slice(1).toLowerCase();

    // VALIDAÇÕES
    if (!this.usuario.nome) {
      this.errorMessage = 'Nome é obrigatório.';
      return;
    }

    if (!this.usuario.cpf) {
      this.errorMessage = 'CPF é obrigatório.';
      return;
    }

    if (!this.usuario.email) {
      this.errorMessage = 'Email é obrigatório.';
      return;
    }

    if (!this.usuario.macroSetor) {
      this.errorMessage = 'Macro setor é obrigatório.';
      return;
    }

    if (!this.usuario.senha) {
      this.errorMessage = 'Senha é obrigatória.';
      return;
    }

    // VALIDA CPF
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

    if (!cpfRegex.test(this.usuario.cpf)) {
      this.errorMessage =
        'CPF inválido. Use o padrão xxx.xxx.xxx-xx';
      return;
    }

    // VALIDA EMAIL
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|com\.br|net|org|gov\.br|edu|edu\.br|store|tech|online|br)$/i;

    if (!emailRegex.test(this.usuario.email)) {
      this.errorMessage =
        'Email inválido.';
      return;
    }

    this.usuario.nome = this.usuario.nome
      .trim()
      .toLowerCase()
      .split(' ')
      .map(palavra =>
        palavra.charAt(0).toUpperCase() +
        palavra.slice(1)
      )
      .join(' ');

    this.usuario.macroSetor = this.usuario.macroSetor
      .trim()
      .toLowerCase()
      .split(' ')
      .map(palavra =>
        palavra.charAt(0).toUpperCase() +
        palavra.slice(1)
      )
      .join(' ');

    this.loading = true;

    this.usuarioService
      .updateUsuario(Number(this.usuario.id), this.usuario)
      .subscribe({

        next: () => {

          this.successMessage =
            'Usuário atualizado com sucesso!';

          this.loading = false;

          setTimeout(() => {

            this.router.navigate(['/users']);

          }, 1000);
        },

        error: (err) => {

          console.error(err);

          this.errorMessage =
            'Erro ao atualizar usuário.';

          this.loading = false;
        }
      });
  }
}

