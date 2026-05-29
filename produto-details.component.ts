import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';


import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }

  /**
   * Destaque o botão “Produtos” apenas na listagem.
   */
  isProdutoListRoute(): boolean {
    return (this.router.url || '') === '/';
  }

  /**
   * Destaque o botão “Novo Produto” nas rotas de cadastro.
   * Inclui detalhes e edição para que o usuário veja que está no módulo de produtos.
   */
  isProdutoCreateRoute(): boolean {
    const url = this.router.url || '';
    return url === '/create' || url.startsWith('/details/') || url.startsWith('/edit/');
  }

  /**
   * Destaque o botão “Usuários” apenas quando estiver na área de usuários.
   */
  isUsersRoute(): boolean {
    const url = this.router.url || '';
    return url === '/users' || url.startsWith('/users/');
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}







