import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = "http://localhost:3000/";

Given('opening search page', () => {
 cy.visit(url);
});

Then('it should display Search for a product', () => {
    cy.get('input[id="search-box"]').invoke('attr', 'placeholder').should('contain', 'Search for a product');
});

Given('search box value must be empty', () => {
    cy.get('input[id="search-box"]').invoke('val').should('be.empty');
});

Then('enter {string} as search item', (string) => {
    cy.get('input[id="search-box"]').type(string)
});

Then('remove the {string} value', (string) => {
    cy.get('input[id="search-box"]').clear();
});


Given('enter {string} as search box value', (string) => {
    cy.get('input[id="search-box"]').type(string);
});

When('click the item with gold', () => {
    cy.get('ul.search-list').children().should('have.length', 4);
})
