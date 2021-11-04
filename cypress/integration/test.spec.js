/// <reference types="Cypress" />


it ('załadowanie strony staging.paymi.com', () => {
    cy
        .visit('https://staging.paymi.com/users/sign_in');
})

it ('rejestracja nowego konta', () => {
    cy
        .get(':nth-child(2) > .text-link')
        .click();
    cy
        .get('#user_email')
        .type('test761@test.com');
    cy
        .get('#user_password')
        .type('Test123!');
    cy
        .get('#terms-label')
        .click();
    cy
        .get('.register > .btn')
        .click();
})


it ('wylogowanie użytkownika', () => {
    cy
        .get('.dropdown-toggle')
        .click();
    cy
        .get('#link-sign-out')
        .click();
})
