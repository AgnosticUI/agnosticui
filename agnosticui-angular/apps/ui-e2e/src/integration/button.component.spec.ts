describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttoncomponent--primary&args=mode;type:button;size:medium;css;isDisabled:false;isSkinned;isBlank;isRaised;isCircle;isBlock;isBordered;isRounded;'));
  it('should render the component', () => {
    cy.get('ag-button').should('exist');
  });
});