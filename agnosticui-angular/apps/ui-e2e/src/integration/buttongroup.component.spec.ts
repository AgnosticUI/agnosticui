describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttongroupcomponent--primary&args=css;ariaLabel;'));
  it('should render the component', () => {
    cy.get('ag-button-group').should('exist');
  });
});