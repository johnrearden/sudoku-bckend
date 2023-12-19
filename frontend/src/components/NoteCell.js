import React from 'react';
import styles from '../styles/NoteCell.module.css';

const NoteCell = ({ array }) => {

    const digits = [];
    for (let i = 1; i <= 9; i++) {
        const char = i.toString();
        if (array.includes(char)) {
            digits.push (
                <span className={styles.Digit} key={i}>
                    {char}
                </span>
            )
        } else {
            digits.push(
                <span key={i}></span>
            )
        }
    }

    return ( 
        <div className={styles.Cell}>
            { digits }
        </div>
    )
}

export default NoteCell