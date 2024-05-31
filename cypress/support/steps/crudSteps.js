import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import crudPage from '../pages/crudPage'

Given("que desejo acessar o sistema", () => {
    crudPage.acessarUrl()
})

When("clicar em adicionar e inserir as informações {string}, {string}", (codinome, nome) => {
    crudPage.adicionarMutante(codinome, nome)
})

When("solicitar detalhes do mutante cadastrado", () => {
    crudPage.clicarLink()
})

When("solicitar exclusão do mutante cadastrado", () => {
    crudPage.clicarExcluir()
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

Then("devo visualizar a mensagem de excluído com sucesso", () => {
    crudPage.validarMensagemExcluido()
})