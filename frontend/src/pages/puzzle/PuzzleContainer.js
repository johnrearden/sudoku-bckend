import React, { useCallback, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom'

import { Button, Col, Container, Modal, Row } from 'react-bootstrap';

import btnStyles from '../../styles/Button.module.css'
import styles from '../../styles/PuzzleContainer.module.css'
import themes from '../../styles/Themes.module.css';

import DigitChooser from '../../components/DigitChooser';
import Timer from '../../components/Timer';
import Puzzle from '../../components/Puzzle';
import ProfileForm from '../../components/ProfileForm';
import { CompletenessDisplay } from '../../components/CompletenessDisplay';

import { axiosReq } from '../../api/axiosDefaults';
import { checkCellValidity, getExhaustedDigits, replaceCharAt } from '../../utils/utils';
import { DIFFICULTY_LEVELS, LCLSTRG_KEY } from '../../constants/constants';

import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { usePuzzleHistoryContext } from '../../contexts/PuzzleHistoryContext';
import { useTheme } from '../../contexts/ThemeContext';
import { useProfile } from '../../contexts/ProfileContext';

import { createSearchArray, getSearchArraysFromGrid, solvePuzzle } from '../../utils/solver';
import { bruteForce } from '../../utils/strategies/bruteForce';


const PuzzleContainer = () => {

    // Have to load theme here as react-bootstrap modal doesn't inherit them. WTF.
    const theme = useTheme();
    const themeStyles = theme === 'light' ? themes.lightTheme : themes.darkTheme;

    const profile = useProfile();

    const { savePuzzleToHistory, getPuzzleHistory } = usePuzzleHistoryContext();

    const [showProfileModal, setShowProfileModal] = useState(false);

    const { difficulty } = useParams();
    const [puzzleData, setPuzzleData] = useState({
        grid: Array(82).join('-')
    });
    const [searchArray, setSearchArray] = useState(() => createSearchArray());
    const [completeness, setCompleteness] = useState(0);

    // Digits already placed 9 times in the puzzle
    const [exhaustedDigits, setExhaustedDigits] = useState([]);

    const history = useHistory();
    const currentUser = useCurrentUser();

    // Current cell selected by user.
    const [selectedCellIndex, setSelectedCellIndex] = useState(0);

    // The row, col or square in which a digit appears twice
    const [warningGroup, setWarningGroup] = useState([]);

    // The cell that duplicated the value of the current selected cell.
    const [clashingCell, setClashingCell] = useState(-1);

    const [undoStack, setUndoStack] = useState([]);

    const [showNotes, setShowNotes] = useState(false);

    const toggleNotes = () => {
        setShowNotes(!showNotes);
    }

    // Load data on mount.
    useEffect(() => {
        const handleMount = async () => {
            try {
                const puzzleHistory = getPuzzleHistory("sudoku", difficulty);
                let getQuery = '';
                if (puzzleHistory) {
                    getQuery = `?used_puzzles=${puzzleHistory}`;
                }
                const url = `/get_random_puzzle/${difficulty}${getQuery}`;
                const { data } = await axiosReq.get(url);
                setPuzzleData(data);
                const searchArrays = getSearchArraysFromGrid(data.grid);
                setSearchArray(searchArrays);

            } catch (err) {
                console.log(err);
                history.push('/');
            }
        }

        const previousPuzzle = window.localStorage.getItem(LCLSTRG_KEY);
        if (previousPuzzle) {
            const puzzleData = JSON.parse(previousPuzzle);
            setPuzzleData(puzzleData);
        } else {
            handleMount();
        }
        
    }, [difficulty, history, getPuzzleHistory]);

    // Tests if a digit is valid in the current selected cell, and displays
    // the warnings if not.
    const performValidityCheck = (digit) => {
        const { isValid, clashingCell, group } = checkCellValidity(
            puzzleData.grid, selectedCellIndex, digit);
        if (!isValid) {
            setWarningGroup(group);
            setClashingCell(clashingCell);
        } else {
            if (warningGroup.length > 0) {
                setWarningGroup([]);
                setClashingCell(-1);
            }
        }
    }

    const handleDigitChoice = (digit) => {
        const currentSelectedCellValue = puzzleData.grid[selectedCellIndex];

        performValidityCheck(digit);

        setPuzzleData(prevData => {
            const index = selectedCellIndex;
            const grid = prevData.grid;
            const newGrid = replaceCharAt(grid, index, digit);
            const newData = {
                ...prevData,
                grid: newGrid,
            }
            window.localStorage.setItem(LCLSTRG_KEY, JSON.stringify(newData));
            return newData;
        })

        setUndoStack(prev => {
            const undoItem = {
                index: selectedCellIndex,
                previousValue: currentSelectedCellValue
            }
            return [...prev, undoItem];
        });
    }

    const handleCellSelection = (index) => {
        if (warningGroup.length === 0) {
            setSelectedCellIndex(index);
        }
    }

    const handleUndo = () => {
        if (undoStack.length < 1) {
            alert('This is the original puzzle - can\'t undo from here')
            return;
        }
        const itemToUndo = undoStack[undoStack.length - 1];
        const { index, previousValue } = itemToUndo;

        setPuzzleData(prev => {
            const newData = {
                ...prev,
                grid: replaceCharAt(puzzleData.grid, index, previousValue)
            }
            window.localStorage.setItem(LCLSTRG_KEY, JSON.stringify(newData));
            return newData;
        })

        setUndoStack(prev => {
            prev.pop()
            return prev;
        });
        performValidityCheck(previousValue);
    }

    const handleLeaderboardButtonClick = () => {
        console.log('handleLeaderboardButtonClick');
        if (!profile) {
            setShowProfileModal(true);
        } else {
            submitPuzzle();
        }
    }

    const profileModalCallback = () => {
        console.log('profileModalCallback invoked');
        setShowProfileModal(false);
        submitPuzzle();
    }

    const submitPuzzle = async () => {

        // First, submit the puzzle
        const formData = new FormData();
        formData.append("puzzle", puzzleData.id);
        formData.append("grid", puzzleData.grid);
        formData.append("started_on", puzzleData.start_time);
        formData.append("completed_at", new Date().toISOString());
        formData.append("completed", "true");
        try {
            const {data} = await axiosReq.post(
                '/create_puzzle_instance/', 
                formData,
                );
                history.push(`/leaderboard/${data.id}`)
        } catch (err) {
            console.log(err);
        }
    }

    // Update completeness each time the grid changes
    useEffect(() => {
        if (puzzleData.grid != null) {
            const emptyCells = puzzleData.grid.split('').filter(chr => chr !== '-');
            const completeness = emptyCells.length / 81 * 100;
            setCompleteness(completeness);
        }
        if (puzzleData.grid) {
            setExhaustedDigits(getExhaustedDigits(puzzleData.grid));
            const srcArrs = getSearchArraysFromGrid(puzzleData.grid);
            setSearchArray(srcArrs);
        }
    }, [puzzleData, currentUser])


    // Submit the puzzle if completeness hits 100%
    useEffect(() => {
        if (completeness >= 100) {
            window.localStorage.removeItem(LCLSTRG_KEY);
            savePuzzleToHistory(puzzleData.id, "sudoku", difficulty);
        }
    }, [completeness, currentUser, puzzleData, history, difficulty, savePuzzleToHistory]) 

    const callback = (grid, newSearchArray) => {
        setPuzzleData(prev => ({
            ...prev,
            grid: grid,
        }));
        setSearchArray(newSearchArray);
    }

    const handleSolve = useCallback(() => {
        console.log(puzzleData.grid, 'source')
        solvePuzzle(puzzleData.grid, searchArray, callback);
    }, [puzzleData, searchArray]);

    const handleBruteForce = () => {
        bruteForce(puzzleData.grid.slice(), callback);
    }

    // Set success message style
    const successStyle = 
        completeness === 100 
        ? `${styles.SuccessMessage} ${styles.PointerEventsOn} ${styles.RevealMessage}` 
        : `${styles.SuccessMessage} ${styles.PointerEventsOff}`;

    return (
        <Container>
            <Row className="d-flex justify-content-center mt-3">
                <p className="mr-5">{DIFFICULTY_LEVELS[difficulty].toUpperCase()}</p>
                <Timer startTime={puzzleData.start_time}></Timer>
            </Row>
            <Row className="mt-2">
                <Col xs={{ span: 8, offset: 2 }} sm={{ span: 6, offset: 3 }} md={{ span: 4, offset: 4 }}>
                    <CompletenessDisplay
                        completenessPercentage={Math.round(completeness)}
                        shorthand />
                </Col>
            </Row>
            <Row className="d-flex justify-content-center mt-4 position-relative">
                <Puzzle
                    grid={puzzleData?.grid}
                    searchArray={searchArray}
                    showNotes={showNotes}
                    selectedCell={selectedCellIndex}
                    handleCellSelection={handleCellSelection}
                    warningGroup={warningGroup}
                    clashingCell={clashingCell}
                    completed={completeness === 100} />
                <div className={`${successStyle} text-center`}>
                    <h1>Well Done!</h1>
                    <Button 
                        className={`${btnStyles.Button} mt-4`}
                        onClick={handleLeaderboardButtonClick}
                        >Leaderboard</Button>
                    
                </div>
            </Row>
            <Row className="d-flex justify-content-center mt-3">
                <DigitChooser
                    exhaustedDigits={exhaustedDigits}
                    handleDigitChoice={handleDigitChoice} />

            </Row>
            <Row className="d-flex justify-content-center mt-3">
                <Button
                    className={`${btnStyles.Button} mx-2`}
                    onClick={handleUndo}>
                    <i className="fa-solid fa-arrow-rotate-left"></i>
                </Button>
                <Button
                    className={`${btnStyles.Button} mx-2`}
                    onClick={toggleNotes}>
                        Notes
                </Button>
                <Button
                    className={`${btnStyles.Button} mx-2`}
                    onClick={handleBruteForce}>
                    Brute Force
                </Button>
                { currentUser && (
                    <>
                        <Button
                            className={`${btnStyles.Button} mx-2`}
                            onClick={handleSolve}>
                            Solve
                        </Button>
                        
                </>
                )}
            </Row>

            <Modal 
                show={showProfileModal} 
                onHide={() => setShowProfileModal(false)}
                contentClassName={`${styles.ProfileModal} ${themeStyles}`}
                centered
            >
                <Modal.Body>
                    <ProfileForm callback={profileModalCallback} />
                </Modal.Body>
            </Modal>

        </Container>
    )
}

export default PuzzleContainer