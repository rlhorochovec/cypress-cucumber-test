import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import crudPage from '../pages/crudPage'

Given("que desejo {string} um mutante", (opcao) => {
    crudPage.acessarUrl(opcao)
})

When("inserir as informações {int}, {string}, {string}", (id, nome, codinome) => {
    crudPage.adicionarMutante(id, nome, codinome);
})

And("clicar em Salvar", () => {
    crudPage.clicarSalvar();
})

Then("devo visualizar a lista com todos os mutantes", () => {
    crudPage.telaInicial();
})