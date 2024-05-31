Feature: CRUD X-Men '97

    Scenario: Adicionar mutante
        Given que desejo acessar o sistema
        When clicar em adicionar e inserir as informações "Xovec", "Rafael"
        And clicar em Salvar
        Then devo visualizar a lista com todos os mutantes

    Scenario: Visualizar mutante
        Given que desejo acessar o sistema
        When solicitar detalhes do mutante cadastrado
        Then devo visualizar o codinome "Xovec" e nome "Rafael"

    Scenario: Deletar mutante
        Given que desejo acessar o sistema
        When solicitar exclusão do mutante cadastrado
        Then devo visualizar a mensagem de excluído com sucesso