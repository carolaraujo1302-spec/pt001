<div class="page">
  <div class="card">

    <div class="card-head">
      <h2 class="title">Editar Usuário</h2>

      <button class="btn btn-secondary" type="button" (click)="router.navigate(['/users'])">

        Voltar

      </button>
    </div>

    <div *ngIf="!auth.isAdmin()" class="alert alert-error">
      Acesso restrito: apenas admin.
    </div>

    <div *ngIf="auth.isAdmin()">

      <div *ngIf="loading" class="loading">
        Carregando...
      </div>

      <form *ngIf="!loading && usuario" #formEditUser="ngForm" (ngSubmit)="salvar()">

        <div class="field">

          <label>Nome *</label>

          <input type="text" name="nome" [(ngModel)]="usuario.nome" required>

        </div>

        <div class="field">

          <label>CPF *</label>
          <input type="text" name="cpf" [(ngModel)]="usuario.cpf" required maxlength="14" placeholder="000.000.000-00"
            pattern="^\d{3}\.\d{3}\.\d{3}-\d{2}$" (input)="formatarCPF()">
        </div>

        <div class="field">

          <label>Email *</label>
          <input type="email" name="email" [(ngModel)]="usuario.email" required email autocomplete="off"
            placeholder="exemplo@gmail.com" />

        </div>

        <div class="field">

          <label>Região / Macro setor *</label>

          <input type="text" name="macroSetor" [(ngModel)]="usuario.macroSetor" required>

        </div>

        <div class="field">

          <label>Status *</label>

          <select name="status" [(ngModel)]="usuario.status" required>

            <option value="ativo">
              Ativo
            </option>

            <option value="inativo">
              Inativo
            </option>

          </select>

        </div>

        <div class="field">

          <label>Perfil de acesso *</label>

          <select name="role" [(ngModel)]="usuario.role" required>

            <option value="user">
              Usuário
            </option>

            <option value="admin">
              Administrador
            </option>

          </select>

        </div>

        <div class="field">

          <label>Senha *</label>

          <input type="password" name="senha" [(ngModel)]="usuario.senha" required>

        </div>

        <button class="btn btn-primary" type="submit" [disabled]="formEditUser.invalid">

          Salvar

        </button>

        <div *ngIf="errorMessage" class="alert alert-error">
          {{ errorMessage }}
        </div>

        <div *ngIf="successMessage" class="alert alert-success">
          {{ successMessage }}
        </div>

      </form>

    </div>

  </div>
</div>