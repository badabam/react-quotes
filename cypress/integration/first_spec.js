describe('Quotes page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('shows a page', () => {
    cy.title().should('include', 'React App')
  })

  it('has a first Quote', () => {
    cy
      .get('.css-6b6h64')
      .first()
      .should('contain', 'We live in a society')
  })

  it('has two buttons', () => {
    cy
      .get('.css-6b6h64')
      .first()
      .find('button')
      .should('have.length', 2)
  })

  it('has one button with Bookmark', () => {
    cy
      .get('.css-6b6h64')
      .first()
      .find('button')
      .should('contain', 'Bookmark')
  })

  it('has one button with Like', () => {
    cy
      .get('.css-6b6h64')
      .first()
      .find('button')
      .should('contain', 'Like')
  })

  it('can bookmark a Quote', () => {
    cy
      .get('.css-6b6h64')
      .first()
      .find('button')
      .contains('Bookmark')
      .click()

    cy
      .get('.MiniQuoteList')
      .contains('Bookmarks')
      .parent()
      .find('.MiniQuoteList__list')
      .should('contain', 'We live in a society')
  })
})
