import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import loginPage from '../pages/loginPage'

Given("inseri usuário {string} e senha {string}", (usuario, senha) => {
    loginPage.acessarUrl()
    loginPage.efetuarLogin(usuario, senha)
})

When("clicar no botão Entrar", () => {
    loginPage.clicarBotaoEntrar()
})

Then("apresentará uma mensagem de {string}", (mensagem) => {
    loginPage.validarMensagemErro(mensagem)
})