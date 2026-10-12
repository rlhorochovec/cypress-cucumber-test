import loginLocator from '../locators/loginLocator'

class loginPage {
    
    acessarUrl() {
        cy.visit("http://rlhorochovec.github.io/qa/")
    }

    efetuarLogin(usuario, senha) {
        if (usuario != '') {
            cy.get(loginLocator.campoUser()).type(usuario)
        }
        if (senha != '') {
            cy.get(loginLocator.campoPassword()).type(senha)
        }
    }

    clicarBotaoEntrar() {
        cy.get(loginLocator.botaoEntrar()).click()
    }

    validarMensagemErro(mensagem) {
        cy.get(loginLocator.textoMensagem()).should('have.text', mensagem)
    }
}

const page = new loginPage();
export default page;