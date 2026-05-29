# TODO - pt001 (SmartStock)

## ✅ Estrutura Inicial
- [x] Criar `backend/db.json` para o JSON Server
- [x] Configurar coleção `produtos`
- [x] Configurar coleção `usuarios`
- [x] Estruturar projeto Angular standalone

---

## ✅ Modelos
- [x] Criar model `Produto`
  - `src/app/models/produto.ts`

- [x] Criar model `Usuario`
  - `src/app/models/usuario.ts`

---

## ✅ Services
- [x] Criar `ProdutoService`
  - CRUD completo via `HttpClient`

- [x] Criar `UsuarioService`
  - CRUD de usuários
  - Busca por email
  - Login via JSON Server

- [x] Criar `AuthService`
  - Controle de sessão
  - Login
  - Logout
  - Verificação de usuário logado
  - Verificação de admin

---

## ✅ Guards
- [x] Criar `AuthGuard`
  - Proteção de rotas privadas
  - Redirecionamento para login

---

## ✅ Componentes
- [x] Navbar
  - `src/app/components/navbar/*`

- [x] Produto List
  - `src/app/components/produto-list/*`
  - Tabela de produtos
  - Busca por nome
  - Filtro por marca
  - Destaque para produtos vencidos
  - Botões editar/excluir
  - Mensagens de sucesso e erro

- [x] Produto Create
  - `src/app/components/produto-create/*`
  - Formulário com validações

- [x] Produto Details
  - `src/app/components/produto-details/*`

- [x] Produto Edit
  - `src/app/components/produto-edit/*`

- [x] Login
  - `src/app/components/login/*`

- [x] Cadastro de Usuário
  - `src/app/components/users/register-user/*`

- [x] Lista de Usuários
  - `src/app/components/users/users/*`

- [x] Editar Usuário
  - `src/app/components/users/edit-user/*`

- [x] Recuperação de Senha
  - `src/app/components/forgot-password/*`

---

## ✅ Funcionalidades Implementadas

### Produtos
- [x] Listagem de produtos
- [x] Cadastro de produtos
- [x] Edição de produtos
- [x] Exclusão de produtos
- [x] Visualização de detalhes
- [x] Busca por nome
- [x] Filtro por marca
- [x] Destaque visual para vencidos

### Usuários
- [x] Login
- [x] Logout
- [x] Cadastro de usuário
- [x] Edição de usuário
- [x] Recuperação de senha
- [x] Controle de acesso por role

### Segurança
- [x] Rotas protegidas com `AuthGuard`
- [x] Controle de sessão via `localStorage`

---

## ✅ Rotas Configuradas
- [x] `/`
- [x] `/create`
- [x] `/details/:id`
- [x] `/edit/:id`
- [x] `/login`
- [x] `/register`
- [x] `/users`
- [x] `/users/edit/:id`
- [x] `/forgot-password`

---

## ✅ Layout e Navegação
- [x] Configurar navbar global
- [x] Configurar `router-outlet`
- [x] Ajustar layout responsivo
- [x] Destacar rota ativa no menu

---

## ✅ Documentação
- [x] Atualizar `README.md`
- [x] Organizar estrutura do projeto
- [x] Documentar execução do projeto

---

## ✅ Testes Realizados
- [x] Executar Angular (`ng serve`)
- [x] Executar JSON Server
- [x] Testar CRUD completo de produtos
- [x] Testar validações de formulário
- [x] Testar login com usuário admin
- [x] Testar login com usuário user
- [x] Testar recuperação de senha
- [x] Testar rotas protegidas
- [x] Testar navegação entre telas
- [x] Testar listagem de usuários
- [x] Testar edição de usuários

---

## 🔄 Melhorias Futuras
- [ ] Implementar JWT real
- [ ] Criptografar senhas
- [ ] Adicionar paginação
- [ ] Adicionar testes automatizados
- [ ] Melhorar responsividade mobile
- [ ] Deploy da aplicação
- [ ] Integração com backend real