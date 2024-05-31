import crudLocator from '../locators/crudLocator'

class crudPage {
    
    acessarUrl() {
        cy.visit("http://localhost:5000/xmen")
    }

    adicionarMutante(nome, codinome) {
        cy.get(crudLocator.linkAdicionar()).click()
        cy.get(crudLocator.textoTitulo()).should('have.text', 'Adicionar mutante')
        cy.get(crudLocator.campoImagem()).selectFile("C:/Users/rlhor/OneDrive/Imagens/xovec.jpeg")
        cy.get(crudLocator.campoNome()).type(nome)
        cy.get(crudLocator.campoCodinome()).type(codinome)
    }

    clicarSalvar() {
        cy.get(crudLocator.botaoSalvar()).click()
    }

    visualizarMutante(nome, codinome) {
        cy.get(crudLocator.textoCodinome()).should('have.text', codinome)
        cy.get(crudLocator.textoNome()).should('have.text', nome)
    }

    clicarLink() {
        cy.get(crudLocator.linkVisualizar()).click()
    }

    clicarExcluir() {
        cy.get(crudLocator.botaoExcluir()).click()
        
    }
    
    validarMensagemExcluido() {
        cy.get(crudLocator.textoMensagem()).contains('excluído com sucesso')
    }

    telaInicial() {
        cy.get(crudLocator.textoTitulo()).should('have.text', 'Mutantes')
    }
}

const page = new crudPage();
export default page;