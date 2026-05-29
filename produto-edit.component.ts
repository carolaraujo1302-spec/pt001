<div class="page">
  <h2 class="title">Novo Produto</h2>

  <div class="card">
    <div class="grid">
      <div class="field">
        <label>Nome *</label>
        <input type="text" [(ngModel)]="nome" placeholder="Ex: Arroz" />
      </div>

      <div class="field">
        <label>Marca *</label>
        <input type="text" [(ngModel)]="marca" placeholder="Ex: Tio João" />
      </div>

      <div class="field">
        <label>Data de Fabricação *</label>
        <input type="date" [(ngModel)]="dataFabricacao" />
      </div>

      <div class="field">
        <label>Data de Validade *</label>
        <input type="date" [(ngModel)]="dataValidade" />
      </div>

      <div class="field">
        <label>Preço (R$) *</label>
        <input type="number" [(ngModel)]="preco" min="0" step="0.01" placeholder="0,00" />
      </div>

      <div class="field">
        <label>Quantidade em estoque *</label>
        <input type="number" [(ngModel)]="quantidadeEstoque" min="0" step="1" placeholder="0" />
      </div>
    </div>


    <div *ngIf="errorMessage" class="alert alert-error">{{ errorMessage }}</div>
    <div *ngIf="successMessage" class="alert alert-success">{{ successMessage }}</div>

    <div class="actions">
      <button class="btn" routerLink="/">Cancelar</button>
      <button class="btn btn-save" (click)="onSubmit()" [disabled]="loading">
        {{ loading ? 'Salvando...' : 'Cadastrar' }}
      </button>
    </div>

    <p class="help">* Campos obrigatórios. Preço/estoque não pode ser negativo e validade deve ser maior que fabricação.</p>

  </div>
</div>

