export class itemPage {
    addItemToCart() {
        cy.get('#add-to-cart-button').click()
        cy.contains('Agregado al carrito')
    }
}