# SmartStock

Sistema web de gerenciamento de estoque desenvolvido com **Angular** e **JSON Server**, permitindo controle completo de produtos e usuários.

O projeto possui funcionalidades de autenticação, controle de permissões, recuperação de senha, gerenciamento de estoque e proteção de rotas utilizando `AuthGuard`.

---

# Preview

## Funcionalidades Principais

* Cadastro de produtos
* Edição de produtos
* Exclusão de produtos
* Busca por nome
* Filtro por marca
* Controle de usuários
* Login e autenticação
* Recuperação de senha
* Controle de permissões
* Destaque visual para produtos vencidos

---

# Tecnologias Utilizadas

## Front-end

* Angular
* TypeScript
* HTML5
* CSS3
* RxJS
* Angular Router
* Angular Forms
* Angular HttpClient

## Back-end (Fake API)

* JSON Server

---

# Arquitetura do Projeto

```bash
src/
 └── app/
      ├── components/
      │    ├── forgot-password/
      │    ├── login/
      │    ├── navbar/
      │    ├── produto-create/
      │    ├── produto-details/
      │    ├── produto-edit/
      │    ├── produto-list/
      │    └── users/
      │
      ├── guards/
      │    └── auth.guard.ts
      │
      ├── models/
      │    ├── produto.ts
      │    └── usuario.ts
      │
      ├── services/
      │    ├── auth.service.ts
      │    ├── produto.service.ts
      │    └── usuario.service.ts
      │
      ├── app.routes.ts
      ├── app.config.ts
      ├── app.ts
      ├── app.html
      └── app.css

backend/
 └── db.json
```

---

# Funcionalidades

## Gestão de Produtos

* Listagem de produtos
* Cadastro de novos produtos
* Edição de produtos
* Exclusão de produtos
* Controle de estoque
* Controle de validade
* Busca por nome
* Filtro por marca
* Destaque visual para produtos vencidos

## Gestão de Usuários

* Cadastro de usuários
* Edição de usuários
* Exclusão de usuários
* Controle de perfil:

  * `admin`
  * `user`
* Controle de status:

  * `ativo`
  * `inativo`

## Autenticação

* Login com email e senha
* Logout
* Proteção de rotas com `AuthGuard`
* Sessão persistida via `localStorage`

## Recuperação de Senha

* Recuperação por email
* Atualização de senha
* Confirmação de senha
* Redirecionamento automático para login

---

# Rotas da Aplicação

## Rotas Protegidas

| Rota              | Descrição           |
| ----------------- | ------------------- |
| `/`               | Lista de produtos   |
| `/create`         | Cadastro de produto |
| `/details/:id`    | Detalhes do produto |
| `/edit/:id`       | Editar produto      |
| `/users`          | Lista de usuários   |
| `/users/edit/:id` | Editar usuário      |

## Rotas Públicas

| Rota               | Descrição            |
| ------------------ | -------------------- |
| `/login`           | Login                |
| `/register`        | Cadastro de usuário  |
| `/forgot-password` | Recuperação de senha |

---

# Como Executar o Projeto

## 1. Clonar o repositório

```bash
git clone <url-do-repositorio>
```

---

## 2. Instalar dependências

```bash
npm install
```

---

## 3. Executar o JSON Server

```bash
json-server --watch backend/db.json --port 3000
```

## Endpoints disponíveis

```bash
http://localhost:3000/produtos
http://localhost:3000/usuarios
```

---

## 4. Executar a aplicação Angular

```bash
npm start
```

ou

```bash
ng serve
```

## Aplicação disponível em

```bash
http://localhost:4200
```

---

# Usuário Administrador

Exemplo presente no `db.json`:

```txt
Email:
admin@smartstock.com

Senha:
admin123
```

---

# Validações Implementadas

## Produtos

* Campos obrigatórios
* Preço não negativo
* Data de validade maior que a data de fabricação

## Usuários

* Email válido
* Senha mínima
* Confirmação de senha
* Controle de status do usuário

---

# Testes Realizados

Testes manuais realizados utilizando perfis:

* Usuário administrador (`admin`)
* Usuário comum (`user`)

## Funcionalidades testadas

* Login e logout
* Proteção de rotas
* CRUD completo de produtos
* CRUD completo de usuários
* Recuperação de senha
* Busca e filtros
* Controle de permissões
* Validações de formulários
* Exclusão de registros
* Navegação entre telas

---

# Melhorias Futuras

* Implementação de JWT Authentication
* Criptografia de senhas
* Dashboard administrativo
* Upload de imagens de produtos
* Responsividade mobile
* Paginação
* Exportação PDF/Excel
* Testes automatizados
* Integração com banco de dados real

---

# Prints do Sistema

## Login

* [ ] Adicionar print

## Produtos

* [ ] Adicionar print

## Usuários

* [ ] Adicionar print

---

# Observações

* O projeto utiliza o JSON Server como API fake para simulação de back-end.
* Os dados são persistidos no arquivo `backend/db.json`.
* Projeto desenvolvido para fins acadêmicos e prática com Angular.

---

# Autor

**Ana Carolina Nascimento**

Projeto acadêmico desenvolvido utilizando Angular, TypeScript e JSON Server para prática de desenvolvimento front-end, autenticação e gerenciamento de estado.
