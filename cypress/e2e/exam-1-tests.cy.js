/// <reference types = "cypress"/>  

describe('Courses Page Tests', () => {
    it('Test 1:', () => {
      cy.visit(' http://localhost:8080/api/courses');
      cy.get('.course-code:first').click();
      cy.url().should('include', '/ACourse/');
    });
  
     it('Test 2:', () => {
      cy.get('label').should('have.length.at.least', 3);
    });
   
    it('Test 3:', () => {
      cy.get('input').should('have.length.at.least', 3);
    });
   
    it('Test 4:', () => {
      cy.get('.students-number-input').clear().type('110');
    });

    it('Test 5: Check if the page has a button and if it is visible', () => {
      cy.get('button').should('be.visible');
    });

    it('Test 6: Locate the update button and click on it', () => {
      cy.get('#update-button').click();
    });
  });