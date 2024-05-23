Feature: CRUD X-Men '97

    Scenario: Adicionar mutante
        Given que desejo "adicionar" um mutante
        When inserir as informações 999, "Rafael", "Xovec"
        And clicar em Salvar
        Then devo visualizar a lista com todos os mutantes

    Scenario: Visualizar mutante
        Given que desejo "visualizar" um mutante
        When solicitar detalhes do mutante cadastrado
        Then devo visualizar o codinome "Xovec" e nome "Rafael"

    Scenario: Editar mutante
        Given que desejo "editar" um mutante
        When alterar o codinome "Horochovec"
        And clicar em Salvar
        Then devo visualizar o codinome "Horochovec" e nome "Rafael"

    Scenario: Deletar mutante
        Given que desejo "deletar" um mutante
        When solicitar exclusão do mutante cadastrado
        And clicar em Sim
        Then devo visualizar a lista com todos os mutantes