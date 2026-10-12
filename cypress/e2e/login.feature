Feature: Login
  Eu como usuário do sistema
  Desejo realizar o login no sistema
  Para realizar minhas tarefas

  @LoginInvalido
  Scenario Outline: Login inválido
    Given inseri usuário "<usuario>" e senha "<senha>"
    When clicar no botão Entrar
    Then apresentará uma mensagem de "<mensagem>"
    Examples:
      | usuario | senha  | mensagem                       |
      | admin   |        | Informe a senha!               |
      |         | user   | Informe o usuário!             |
      | admin   | user   | Usuário e/ou senha incorretos! |
      |         |        | Informe usuário e senha!       |