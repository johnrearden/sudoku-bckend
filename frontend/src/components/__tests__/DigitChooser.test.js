import { render, screen, fireEvent } from "@testing-library/react";

import DigitChooser from '../DigitChooser';
import styles from '../../styles/DigitChooser.module.css';


describe("DigitChooser tests", () => {
    test('renders the 9 digits with an empty exhaustedDigits array prop', async () => {

        const exhaustedDigits = [];
        const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
        render(
            <DigitChooser exhaustedDigits={exhaustedDigits}/>
        )
    
        for (let digit of digits) {
            const digitDiv = await screen.findByText(digit);
            expect(digitDiv).toBeInTheDocument();
        }
    });
    test("renders digits not listed in exhaustedDigits prop with Digit class", async() => {
        const digits = [1, 2, 3];
        const exhaustedDigits = [];

        render(
            <DigitChooser exhaustedDigits={exhaustedDigits} />
        );

        for (let digit of digits) {
            const digitDiv = await screen.findByText(digit);
            expect(digitDiv).toHaveClass(styles.Digit);
        }
    });
    test("renders digits listed in exhaustedDigits prop with Inactive_Digit class", async () => {
        
        const exhaustedDigits = [1, 4];

        render(
            <DigitChooser exhaustedDigits={exhaustedDigits} /> 
        )

        for (let digit of exhaustedDigits) {
            const digitDiv = await screen.findByText(digit);
            expect(digitDiv).toHaveClass(styles.Inactive_Digit);
        }
    });
});
