<div class="page">
  <div class="auth-card">
    <h2 class="title">Esqueci minha senha</h2>
    <p class="subtitle">Informe seu e-mail e defina uma nova senha.</p>

    <form class="form" (ngSubmit)="onSubmit()">
      <div *ngIf="successMessage" class="alert alert-success">{{ successMessage }}</div>
      <div *ngIf="errorMessage" class="alert alert-error">{{ errorMessage }}</div>

      <div class="field">
        <label for="email">E-mail</label>
        <input id="email" type="email" name="email" [(ngModel)]="email" required />
      </div>

      <div class="field">
        <label for="novaSenha">Nova senha</label>
        <input id="novaSenha" type="password" name="novaSenha" [(ngModel)]="novaSenha" required />
      </div>

      <div class="field">
        <label for="confirmarSenha">Confirmar nova senha</label>
        <input
          id="confirmarSenha"
          type="password"
          name="confirmarSenha"
          [(ngModel)]="confirmarNovaSenha"
          required
        />
      </div>

      <button class="btn btn-primary" type="submit" [disabled]="loading">
        {{ loading ? 'Atualizando...' : 'Atualizar senha' }}
      </button>
    </form>

    <div class="actions">
      <button class="btn btn-light" type="button" (click)="router.navigate(['/login'])">Voltar ao login</button>
    </div>
  </div>
</div>

