/// <reference types="cypress" />
describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo')
      })
      it('can add new todo items', () => {
        const newItem = 'Create code for testing'
        cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)
        cy.get('.todo-list li')
          .should('have.length', 3)
          .last()
          .should('have.text', newItem)
      })
})