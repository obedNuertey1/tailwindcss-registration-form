// @ts-nocheck
import React from "react";
import App from "../../src/App";
import "../../src/index.css";

beforeEach(()=>{
  cy.mount(<App/>);
});

describe('app.cy.tsx', () => {
  it('first test', () => {
    cy.get('h1').should('have.text', 'Registration Form');
  });
  
  it('second test', ():void=>{
    cy.get('p').should('have.text', 'Please fill out this form with the required information');
  });

  it('third test', ():void=>{
    cy.get('form').should('have.attr', 'method', 'post').and('have.attr', 'action', '#');
    
    cy.get('form').find('fieldset').should(($fieldset:string[]):void=>{
      expect($fieldset).to.have.length(3);
    });

    cy.get('form').find('fieldset').first().within(()=>{
      cy.get('label').should(($label:string[])=>{
        expect($label).to.have.length(4);
      }).first().should('contain', 'Enter Your First Name:');
    });
  });
})