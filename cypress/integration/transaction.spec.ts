describe('Transactions', () => {
    it('should create a deposit transaction"', () => {
      cy.visit('http://localhost:3000/')
  
      cy.contains('Nova transação').click();

      cy.contains('Cadastrar transação');

      cy.get('input[placeholder="Título"]').type('Test');

      cy.get('input[placeholder="Valor"]').type('1');

      cy.get('input[placeholder="Categoria"]').type('integration');

      cy.get('button[type=submit]').click();

      cy.contains('Test');
      cy.get('td[class="deposit"]').contains('R$ 1,00');
      cy.contains('integration');
  
      cy.get('div strong').contains('R$ 1,00');
    });

    it('should create a withdraw transaction"', () => {
      cy.visit('http://localhost:3000/')
  
      cy.contains('Nova transação').click();

      cy.get('input[placeholder="Título"]').type('Test');

      cy.get('input[placeholder="Valor"]').type('1');

      cy.get('button[data-test-id="withdraw"]').click();
      
      cy.get('input[placeholder="Categoria"]').type('integration');

      cy.get('button[type=submit]').click();

      cy.contains('Test');
      cy.get('td[class="withdraw"]').contains('R$ 1,00');
      cy.contains('integration');
  
      cy.get('div strong').contains('-R$ 1,00');
    });
})
