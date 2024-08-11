describe('should be able to see the homepage', () => {
  beforeEach(()=> {
    cy.fixture('example').then((example)=> {
      cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4d20c82c3c37412ea4e03c58d5f5516c', {
        statusCode:200,
        body:example,
      }).as('getArticles')
    })
    cy.visit('http://localhost:3000')
  })

  it('should display homepage with search bar and news article', ()=> {
    cy.get('.logo').should('exist')
    cy.get('.logo').should('exist')
    cy.get('.card').should('have.length', 2)
  })

  it('should be able to seearch', () => {
    cy.get('.search-bar').type('Altera')
    cy.get('.card').should('contain', 'Altera')
  })

  it('should be able to click an article and see the details', () => {
    cy.get('.article-container > :nth-child(1)').click()
    cy.get('.details-container').should('contain', "Altera")
  })

  it('should be abel to go back to homepage by either clicking the logo, or back to home button', ()=> {
    cy.get('.article-container > :nth-child(1)').click()
    cy.get('.details-container').should('contain', "Altera")
    cy.get('.logo').click()
    cy.get('.card').should('have.length', 2)
    cy.get('.article-container > :nth-child(1)').click()
    cy.get('.details-container').should('contain', "Altera")
    cy.get('.home-button').click()
    cy.get('.card').should('have.length', 2)
  })

})