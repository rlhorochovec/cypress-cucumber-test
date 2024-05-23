import crudLocator from '../locators/crudLocator'

const url = "http://localhost:5000/xmen"
const url_create = "http://localhost:5000/xmen/create"
const url_update = "http://localhost:5000/xmen/999/update"
const url_delete = "http://localhost:5000/xmen/999/delete"
const url_read = "http://localhost:5000/xmen/999"

class crudPage {
    
    acessarUrl(opcao) {
        switch (opcao) {
            case "adicionar":
                cy.visit(url_create)
                break;
            case "editar":
                cy.visit(url_update)
                break;
            case "deletar":
                cy.visit(url_delete)
                break;
            case "visualizar":
                cy.visit(url_read)
                break;
            default:
                cy.visit(url)
                break;
        }
    }

    adicionarMutante(id, nome, codinome) {
        cy.get(crudLocator.textoTitulo()).should('have.text', 'Adicionar mutante')
        cy.get(crudLocator.campoID()).type(id)
        cy.get(crudLocator.campoNome()).type(nome)
        cy.get(crudLocator.campoCodinome()).type(codinome)
    }

    editarMutante(codinome) {
        cy.get(crudLocator.textoTitulo()).should('have.text', 'Editar mutante')
        cy.get(crudLocator.campoCodinome()).clear()
        cy.get(crudLocator.campoCodinome()).type(codinome)
        cy.get(crudLocator.campoCodinome()).should('have.value', codinome)
    }

    clicarSalvar() {
        cy.get(crudLocator.botaoSalvar()).click()
    }

    clicarSim() {
        cy.get(crudLocator.botaoSim()).click()
    }

    visualizarMutante(nome, codinome) {
        cy.get(crudLocator.textoCodinome()).should('have.text', codinome)
        cy.get(crudLocator.textoNome()).should('have.text', nome)
    }

    deletarMutante() {
        cy.get(crudLocator.textoTitulo()).should('have.text', 'Confirme a exclusão')
    }

    telaInicial() {
        cy.get(crudLocator.textoTitulo()).should('have.text', 'Mutantes')
    }
}

const page = new crudPage();
export default page;