<div class="container">

  <h1>Editar Produto</h1>

  <p *ngIf="loading">
    Carregando...
  </p>

  <p *ngIf="errorMessage">
    {{ errorMessage }}
  </p>

  <form *ngIf="!loading" (ngSubmit)="onSave()">

    <div>
      <label>Nome</label>
      <input
        type="text"
        name="nome"
        [(ngModel)]="nome">
    </div>

    <br>

    <div>
      <label>Marca</label>
      <input
        type="text"
        name="marca"
        [(ngModel)]="marca">
    </div>

    <br>

    <div>
      <label>Data Fabricação</label>
      <input
        type="date"
        name="dataFabricacao"
        [(ngModel)]="dataFabricacao">
    </div>

    <br>

    <div>
      <label>Data Validade</label>
      <input
        type="date"
        name="dataValidade"
        [(ngModel)]="dataValidade">
    </div>

    <br>

    <div>
      <label>Preço</label>
      <input
        type="number"
        name="preco"
        [(ngModel)]="preco">
    </div>

    <br>

    <div>
      <label>Quantidade</label>
      <input
        type="number"
        name="quantidadeEstoque"
        [(ngModel)]="quantidadeEstoque">
    </div>

    <br>

    <div style="display: flex; gap: 10px; margin-top: 20px;">

  <button type="submit">
    Salvar
  </button>

  <button
    type="button"
    (click)="cancelar()">
    Cancelar
  </button>

</div>

  </form>

</div>