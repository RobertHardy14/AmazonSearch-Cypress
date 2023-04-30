export class LandingPage {

    visitSite() {
        cy.visit('https://www.amazon.com.mx/')
        cy.title().should('have.string', 'Amazon.com.mx: Precios bajos - Envío rápido - Millones de productos')
    }

    doSearch() {
        cy.get('#twotabsearchtextbox').click().type('Silverstein{enter}')
    }
}