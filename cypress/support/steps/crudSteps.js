import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import crudPage from '../pages/crudPage'

Given("que desejo {string} um mutante", (opcao) => {
    crudPage.acessarUrl(opcao)
})

When("inserir as informações {int}, {string}, {string}", (id, nome, codinome) => {
    crudPage.adicionarMutante(id, nome, codinome)
})

When("solicitar detalhes do mutante cadastrado", () => {
    
})

When("solicitar exclusão do mutante cadastrado", () => {
    
})

When("alterar o codinome {string}", (codinome) => {
    crudPage.editarMutante(codinome)
})

And("clicar em Salvar", () => {
    crudPage.clicarSalvar()
})

And("clicar em Sim", () => {
    crudPage.clicarSim()
})

Then("devo visualizar a lista com todos os mutantes", () => {
    crudPage.telaInicial()
})

Then("devo visualizar o codinome {string} e nome {string}", (nome, codinome) => {
    crudPage.visualizarMutante(nome, codinome)
})