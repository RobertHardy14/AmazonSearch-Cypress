/// <reference types = "Cypress"/>

import { amazonCart } from "../../page-objects/cart"
import { itemPage } from "../../page-objects/item-details"
import { LandingPage } from "../../page-objects/landing-page"
import { LoginPage } from "../../page-objects/logIn"
import { searchResults } from "../../page-objects/search-results"

const landing = new LandingPage
const login = new LoginPage
const search = new searchResults
const item = new itemPage
const cart = new amazonCart

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
    landing.visitSite()
  })

  it('Can Log In', () => {
    login.logIn()
  })

  it('Searches for something', () => {
    landing.doSearch()
  })

  it('Selects an album', () => {
    search.selectAlbum()
  })

  it('Adds it to the cart', () => {
    item.addItemToCart()
  })

  it('Saves it for later', () => {
    cart.saveForLater()
  })

  it('Deletes the product', () => {
    cart.deleteFromCart()
  })
})