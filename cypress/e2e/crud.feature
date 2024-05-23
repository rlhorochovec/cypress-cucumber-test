Feature: CRUD X-Men '97

    Scenario: Efetuar operações de CRUD no sistema dos X-Men
        Given que desejo "adicionar" um mutante
        When inserir as informações 999, "Rafael", "Xovec"
        And clicar em Salvar
        Then devo visualizar a lista com todos os mutantes