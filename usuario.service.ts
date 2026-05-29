<div class="page">
  <div class="auth-card">
    <h2 class="title">Cadastrar Usuário</h2>
    <p class="subtitle">Crie seu acesso para usar o sistema.</p>

    <form #registerForm="ngForm" (ngSubmit)="onSubmit()">

      <div class="field">
        <label>Nome</label>
        <input type="text" [(ngModel)]="nome" name="nome" required>
      </div>

      <div class="field">
        <label>CPF</label>
        <input type="text" name="cpf" [(ngModel)]="cpf" required maxlength="14" placeholder="000.000.000-00"
          pattern="^\d{3}\.\d{3}\.\d{3}-\d{2}$" (input)="formatarCPF()">
      </div>

      <div class="field">
        <label>Email</label>
        <input type="email" [(ngModel)]="email" name="email" required email autocomplete="off"
          placeholder="exemplo@gmail.com" />
      </div>

      <div class="field">
        <label>Região / Macro setor</label>
        <input type="text" [(ngModel)]="macroSetor" name="macroSetor" required>
      </div>

      <div class="field">
        <label>Status</label>
        <select [(ngModel)]="status" name="status" required>
          <option value="ativo">Ativo</option>
          <option value="inativo">Inativo</option>
        </select>
      </div>

      <div class="field">
        <div class="form-group">

          <label for="role">
            Perfil de acesso
          </label>

          <select id="role" name="role" [(ngModel)]="role" required>

            <option value="user">
              Usuário
            </option>

            <option value="admin">
              Administrador
            </option>

          </select>

        </div>
        <label>Senha</label>
        <input type="password" [(ngModel)]="senha" name="senha" required>
      </div>


      <button type="submit" class="btn btn-primary" [disabled]="registerForm.invalid || loading">

        Cadastrar

      </button>
    </form>

    <div *ngIf="errorMessage" class="alert alert-error">{{ errorMessage }}</div>
    <div *ngIf="successMessage" class="alert alert-success">{{ successMessage }}</div>

    <div class="hint">
      Já tem conta? <a routerLink="/login">Fazer login</a>
    </div>
  </div>
</div>