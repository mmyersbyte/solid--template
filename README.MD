# App

Gympass style app.

## RFs (Requisitos Funcionais)

- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível fazer login;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizados logados;
- [ ] Deve ser possível o usuário obter seu histórico de check-ins;l
- [ ] Deve ser possivel o usuário buscar academias próximas;l
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [ ] Deve ser possível o usuário realizar check-in em uma academia;
- [ ] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível cadastrar uma academia;

## RNs (Regras de negócio)

- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia
- [ ] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por adminstradores;

## RNFs (Requisitos não-funcionais)

- [ ] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL
- [ ] Todas listas de dados precisam estar paginadas 20 itens por página
- [ ] O Usuário deve ser identificado por um JWT (JSON WEB TOKEN)

npm i typescript @types/node tsx tsup -D
npx tsc --init

# arch-solid-template
