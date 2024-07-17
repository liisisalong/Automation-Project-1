beforeEach(() => {
    cy.visit('cypress/fixtures/registration_form_3.html')
})

/*
BONUS TASK: add visual tests for registration form 3
Task list:
* Create test suite for visual tests for registration form 3 (describe block)
* Create tests to verify visual parts of the page:
    * radio buttons and its content
    * dropdown and dependencies between 2 dropdowns:
        * list of cities changes depending on the choice of country
        * if city is already chosen and country is updated, then city choice should be removed
    * checkboxes, their content and links
    * email format
 */

describe('Test suite for visual tests', () => {
    it('Check that radio buttons work correctly', () => {
        cy.get('input[type="radio"]').should('have.length', 4)
        cy.get('input[type="radio"]').eq(0).next().should('have.text', 'Daily')
        cy.get('input[type="radio"]').eq(1).next().should('have.text', 'Weekly')
        cy.get('input[type="radio"]').eq(2).next().should('have.text', 'Monthly')
        cy.get('input[type="radio"]').eq(3).next().should('have.text', 'Never')
        cy.get('input[type="radio"]').eq(0).check().should('be.checked')
        cy.get('input[type="radio"]').eq(1).check().should('be.checked')
        cy.get('input[type="radio"]').eq(0).should('not.be.checked')
        cy.get('input[type="radio"]').eq(2).check().should('be.checked')
        cy.get('input[type="radio"]').eq(1).should('not.be.checked')
    });

    it.only('Check that list of cities changes depending on the choice of country', () => {
        cy.get('#country').find('option').should('have.length', 4) 
        cy.get('#country').select('Spain')
        cy.get('#city').find('option').eq(0).should('have.text', '')
        cy.get('#city').find('option').eq(1).should('have.text', 'Malaga')
        cy.get('#city').find('option').eq(2).should('have.text', 'Madrid')
        cy.get('#city').find('option').eq(3).should('have.text', 'Valencia')
        cy.get('#city').find('option').eq(4).should('have.text', 'Corralejo')
        cy.get('#country').select('Estonia')
        cy.get('#city').find('option').eq(0).should('have.text', '')
        cy.get('#city').find('option').eq(1).should('have.text', 'Tallinn')
        cy.get('#city').find('option').eq(2).should('have.text', 'Haapsalu')
        cy.get('#city').find('option').eq(3).should('have.text', 'Tartu')
        cy.get('#country').select('Austria')
        cy.get('#city' ).find('option').eq(0).should('have.text', '')
        cy.get('#city' ).find('option').eq(1).should('have.text', 'Vienna')
        cy.get('#city' ).find('option').eq(2).should('have.text', 'Salzburg')
        cy.get('#city' ).find('option').eq(3).should('have.text', 'Innsbruck')
    });
});


/*
BONUS TASK: add functional tests for registration form 3
Task list:
* Create second test suite for functional tests
* Create tests to verify logic of the page:
    * all fields are filled in + corresponding assertions
    * only mandatory fields are filled in + corresponding assertions
    * mandatory fields are absent + corresponding assertions (try using function)
    * add file functionlity(google yourself for solution!)
 */