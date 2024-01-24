const typicalPuzzleResponse = {
    "id": 13,
    "grid": "-387642--16---8-3-4791-26--3------2--2-34--51---25-4---13-275--6-7-1----25-6----7",
    "created_on": "2023-12-19T19:53:45.768902Z",
    "difficulty": 0,
    "instances_created": 667,
    "instances_completed": 84,
    "creator": "admin",
    "is_owner": false,
    "start_time": "2024-01-24T09:18:24.668363"
}

describe('puzzle container component', () => {
    beforeEach(() => {
        cy.intercept('GET', '**/get_random_puzzle/*', typicalPuzzleResponse);
        cy.visit('http://localhost:3000/get_puzzle/0');
    })

    it('should select a puzzle cell when clicked', () => {
        cy.get('[data-testid="puzzle_cell_0"]').as('cell_0')
        cy.get('@cell_0')
            .click()
            .invoke('attr', 'class')
            .should('contain', "Selected")
    })

    it('should change the selected cells contents to match a clicked DigitChooser button', () => {
        cy.get('[data-testid="puzzle_cell_0"]').as('cell_0')
        cy.get('@cell_0').click()
        cy.get('[data-testid="digit_chooser_1"]').click()

        cy.get('@cell_0').should('contain', '1')
    })

    it('should revert the selected cells contents when the undo button is pressed', () => {
        // Select a cell
        cy.get('[data-testid="puzzle_cell_0"]').as('cell_0')
        cy.get('@cell_0').click()

        // Enter '1' in it, then '2', then click the undo button
        cy.get('[data-testid="digit_chooser_1"]').click()
        cy.get('[data-testid="digit_chooser_2"]').click()
        cy.get('[aria-label="back button"]').click()

        cy.get('@cell_0').should('contain', '1')
    })

    it('should hide success message div before puzzle completion', () => {
        cy.get('[data-cy="success_message_div"]')
            .should('not.be.visible')
    })
})

const almostFinishedPuzzleResponse = {
    created_on: "2023-12-19T19:53:45.768902Z",
    creator: "admin",
    difficulty: 0,
    grid: "-38764219162598734479132685345871926726349851891256473913427568687915342254683197",
    id: 13,
    instances_completed: 83,
    instances_created: 489,
    is_owner: false,
    start_time: "2024-01-23T13:49:37.052086",
}

describe('puzzle container with completed puzzle (without profile)', () => {
    beforeEach(() => {
        cy.intercept('GET', '**/get_random_puzzle/*', almostFinishedPuzzleResponse);
        cy.visit('http://localhost:3000/get_puzzle/0')
    })

    it('should show message success div on puzzle completion', () => {
        cy.get('[data-testid="puzzle_cell_0"]').click()
        cy.get('[data-testid="digit_chooser_5"]').click()

        cy.get('[data-cy="success_message_div"]').should('be.visible')
    })

    it('should show profile modal on leaderboard button click if no profile exists', () => {
        cy.get('[data-testid="puzzle_cell_0"]').click()
        cy.get('[data-testid="digit_chooser_5"]').click()
        cy.get('[data-cy="leaderboard_button"]').click()

        cy.get('[data-cy="profile_modal"]').should('be.visible')
    })
})

const mockProfile = {
    id: 47,
    nickname: "kikr",
    country: "AF"
}

const mockCreatePuzzleInstanceResponse = {
    "id": 368,
    "puzzle": 13,
    "owner": 47,
    "owner_nickname": "kikr",
    "owner_country": "AF",
    "grid": "538764219162598734479132685345871926726349851891256473913427568687915342254683197",
    "original": "-387642--16---8-3-4791-26--3------2--2-34--51---25-4---13-275--6-7-1----25-6----7",
    "started_on": "2024-01-24T07:46:33.381707Z",
    "completed": true,
    "difficulty": "Easy",
    "completed_at": "2024-01-24T07:46:36.863000Z",
    "time_taken": "00:00:03.481293",
    "duration": 3481
}

describe('puzzle container with completed puzzle (with profile)', () => {
    beforeEach(() => {
        cy.setCookie('fruzzled_profile', 'c5a57bcd-5707-4ff5-ab9d-385235f334ec')
        cy.intercept('GET', '**/get_random_puzzle/*', almostFinishedPuzzleResponse);
        //cy.intercept('GET', '**/player_profile/', mockProfile)
        
        cy.intercept('POST', '**/create_puzzle_instance', mockCreatePuzzleInstanceResponse)
        cy.visit('http://localhost:3000/get_puzzle/0')
    })

    it('should link to leaderboard page when leaderboard button pressed', () => {
        cy.get('[data-testid="puzzle_cell_0"]').click()
        cy.get('[data-testid="digit_chooser_5"]').click()
        cy.get('[data-cy="leaderboard_button"]').click()

        cy.get('[data-cy="leaderboard_heading"]').should('be.visible')
    })
})