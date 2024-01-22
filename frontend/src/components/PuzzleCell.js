import React, { useEffect, useState } from 'react'
import styles from '../styles/PuzzleCell.module.css'

const PuzzleCell = (props) => {

    const {
        value,
        index,
        selected,
        warning,
        illegal,
        handleSelection,
        correct} = props;

    const [className, setClassName] = useState(styles.Cell);

    const isDigit = (string) => {
        return string >= "0" && string <= "9";
    }

    // Set the className state when props change.
    useEffect(() => {
        const selectedClass = selected ? styles.Selected : '';
        const warningClass = warning ? styles.Warning : '';
        const clashing = illegal ? styles.Clashing_Cell : '';
        const offending = selected && warning ? styles.Offending_Choice : '';
        const unclickable = correct ? styles.Unclickable : '';
        setClassName([
            styles.Cell,
            selectedClass,
            warningClass,
            clashing,
            offending,
            unclickable].join(' '));
    }, [selected, warning, illegal, correct])

    console.log(className);

    // Give small random delay when 'correct' prop changes before 
    // applying the animation style.
    useEffect(() => {
        if (correct) {
            const waitTime = (index % 9) * 30;
            setTimeout(() => {
                setClassName(`${styles.Cell} ${styles.spin_to_correct} ${styles.Unclickable}`);
            }, waitTime);
        }
    }, [correct, index])

    return (
        <div
            className={className}
            onClick={() => handleSelection(index)}
            aria-label="puzzle cell"
            data-testid={`puzzle_cell_${index}`}
        >
            {isDigit(value) ? value : ""}
        </div>
    )
}

export default PuzzleCell