export class LoginPage {

    logIn() {
        cy.contains('Hola, identifícate').click()
        cy.get('#ap_email').click().type(Cypress.env('username'))
        cy.get('#continue').click()
        cy.get('#ap_password').click().type(Cypress.env('password'))
        cy.get('#signInSubmit').click()
    }
}