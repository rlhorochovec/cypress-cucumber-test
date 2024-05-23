describe('CRUD', () => {
  it('Cadastrar um novo mutante', () => {
    cy.visit('http://localhost:5000/xmen/create')
    cy.get('.display-3').should('have.text', 'Adicionar mutante')
    cy.get('#mutante_id').type(999)
    cy.get('#nome').type('Rafael')
    cy.get('#codinome').type('Xovec')
    cy.get('.btn').click()
  })

  it('Detalhes do mutante cadastrado', () => {
    cy.visit('http://localhost:5000/xmen/999')
    cy.get('.display-5').should('have.text', 'Xovec')
    cy.get('.card-text').should('have.text', 'Rafael')
  })

  it('Editar mutante cadastrado', () => {
    cy.visit('http://localhost:5000/xmen/999/update')
    cy.get('.display-3').should('have.text', 'Editar mutante')
    cy.get('#codinome').clear()
    cy.get('#codinome').type('Horochovec')
    cy.get('#codinome').should('have.value', 'Horochovec')
    cy.get('.btn').click()
  })

  it('Excluir mutante cadastrado', () => {
    cy.visit('http://localhost:5000/xmen/999/delete')
    cy.get('.display-3').should('have.text', 'Confirme a exclusão')
    cy.get('.btn-danger').click()
  })
})