{/* <reference types="cypress" /> */}

describe('sudoku app homepage', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

    it('displays the heading "Sudoku"', () => {
        cy.get('h1').should('have.text', 'Sudoku (demo)');
    })

    it('should have 4 difficulty buttons', () => {
        cy.get('[data-cy="difficulty_button"]').should('have.length', 4)
    })

    it('should link to PuzzleContainer page when difficulty button is pressed', () => {
        cy.get('[data-cy="difficulty_button"]').first().click()
        cy.get('[data-cy="puzzle_component"]').should('exist')
        
    })
})