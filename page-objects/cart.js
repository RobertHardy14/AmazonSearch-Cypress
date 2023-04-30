export class amazonCart {

    saveForLater() {
        cy.get('#nav-cart-count-container').click()
        cy.get('.a-color-link').contains('Guardar para más tarde').click()
    }

    deleteFromCart() {
        cy.get('.a-color-link').contains('Eliminar').click()
    }
}