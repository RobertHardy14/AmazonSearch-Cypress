/// <reference types = "Cypress"/>

describe('Amazon Search', () => {

  before(() => {
    cy.visit('https://www.amazon.com.mx/')
    cy.contains('Hola, identifícate')
  })

  after(() => {
    cy.contains('Hola Robert').realHover()
    cy.get('#nav-item-signout').click()
  })

  it('Can  Access the Amazon Mx Webpage', () => {
    cy.visit('https://www.amazon.com.mx/')
    cy.title().should('have.string', 'Amazon.com.mx: Precios bajos - Envío rápido - Millones de productos')
  })

  it('Can Log In', () => {
    cy.contains('Hola, identifícate').click()
    cy.get('#ap_email').click().type(Cypress.env('username'))
    cy.get('#continue').click()
    cy.get('#ap_password').click().type(Cypress.env('password'))
    cy.get('#signInSubmit').click()
  })

  it('Searches for something', () => {
    cy.get('#twotabsearchtextbox').click().type('Silverstein{enter}')
  })

  it('Selects an album', () => {
    cy.contains('I Am Alive in Everything I Touch').scrollIntoView().click()
  })

  it('Adds it to the cart', () => {
    cy.get('#add-to-cart-button').click()
    cy.contains('Agregado al carrito')
  })

  it('Saves it for later', () => {
    cy.get('#nav-cart-count-container').click()
    cy.get('[aria-label = "Guardar para más tarde I Am Alive In Everything I Touch"]').click()
  })

  it('Deletes the product', () => {
    cy.get('[aria-label = "Eliminar I Am Alive In Everything I Touch"]').click()
  })
})