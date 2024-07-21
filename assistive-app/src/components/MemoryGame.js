import React, { useEffect, useState } from 'react';
import ReactFlipCard from 'reactjs-flip-card';
import Swal from 'sweetalert2';
import Timer from './Timer';

// Show username
export default function MemoryGame() {
    const [validWords, setValidWords] = useState([]);
    const [reset, setReset] = useState(true);
    const [alphabets, setAlphabets] = useState([]);
    const [optionalToggle, setOptionalToggle] = useState(false);
    const [flipTrigger, setFlipTrigger] = useState([false, false, false]);
    const [choice, setChoice] = useState([]);
    const [points, setPoints] = useState(0);
    const [start, setStart] = useState(false);
    const [words, setWords] = useState([]);

    const numChoices = 0;
    const repeatCount = 4;
    const pointsIncrement = 100;
    const capital = true;
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const consonants = [...Array(26)].map((_, i) => String.fromCharCode(i + (capital ? 65 : 97))).filter(letter => !vowels.includes(letter));
    const time = new Date();
    time.setSeconds(time.getSeconds() + 300);

    // Get all valid words
    useEffect(() => {
        const fetchFile = async () => {
            try {
                const response = await fetch('words.txt');
                if (!response.ok) {
                    throw new Error('Network response failed.');
                }
                const text = await response.text();
                const linesArray = text.split('\n');
                setValidWords(linesArray);
            } catch (err) {
                Swal.fire({
                    title: 'Error reading file',
                    icon: 'error',
                    confirmButtonText: 'Close'
                });
            }
        };
        fetchFile();
    }, []);

    // Reset letters
    useEffect(() => {
        if (reset) {
            if (points != 0) {
                Swal.fire({
                    title: `Congrats you earned ${points}!`,
                    icon: 'success',
                    confirmButtonText: 'Close'
                });
            }
            getRandomLetter();
            setFlipTrigger([false, false, false]);
            setChoice([]);
            setOptionalToggle(false);
            setWords([]);
            setPoints(0);
        }
        setReset(false);
    }, [reset]);

    const shuffleArray = (array) => {
        for (var i = array.length - 1; i > 0; i--) {
            // Generate random number 
            var j = Math.floor(Math.random() * (i + 1));

            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    // Get a random selection of letters
    const getRandomLetter = () => {
        let vowels_list = [...vowels];
        let consonants_list = [...consonants];
        let letters = [];

        // Ensure that there are at least 4 vowels
        for (let i = 0; i < 12; i++) {
            let char_idx = Math.floor(Math.random() * consonants_list.length);
            letters.push(consonants_list[char_idx]);
            consonants_list.splice(char_idx, 1);
        }
        for (let i = 0; i < 4; i++) {
            let char_idx = Math.floor(Math.random() * vowels_list.length);
            letters.push(vowels_list[char_idx]);
            vowels_list.splice(char_idx, 1);
        }
        letters = shuffleArray(letters);

        return setAlphabets(letters);
    }

    // Handle when user selects a letter
    const selectLetters = (letter) => {
        if (optionalToggle) {
            if (numChoices < 3) {
                let arrCopy = [...flipTrigger];
                arrCopy[choice.length] = !arrCopy[choice.length];
                setFlipTrigger(arrCopy);

                let choiceCopy = [...choice];
                choiceCopy[choice.length] = letter;
                setChoice(choiceCopy);
            }
        } else {
            Swal.fire({
                title: 'Letters can only be added when cards are flipped!',
                icon: 'error',
                confirmButtonText: 'Close'
            });
        }
    }

    // Handle when user removes a letter
    const removeLetter = () => {
        let arrCopy = [...flipTrigger];
        arrCopy[choice.length - 1] = !arrCopy[choice.length - 1];
        setFlipTrigger(arrCopy);

        let choiceCopy = [...choice];
        choiceCopy.splice(-1, 1);
        setChoice(choiceCopy);
    }

    // Check if user formed a valid word
    const formWord = () => {
        let word = choice.join('');
        if (word.length !== 3) {
            Swal.fire({
                title: 'Enter a 3 letter word!',
                icon: 'error',
                confirmButtonText: 'Close'
            });
            return;
        }
        if (words.includes(word)) {
            Swal.fire({
                title: 'You already tried this!',
                icon: 'error',
                confirmButtonText: 'Close'
            });
            return;
        }
        if (validWords.includes(word.toLowerCase())) {
            Swal.fire({
                title: 'Congrats! You formed a word!',
                icon: 'success',
                confirmButtonText: 'Close'
            });
            setFlipTrigger([false, false, false]);
            setChoice([]);
            setPoints(points + pointsIncrement);
            setWords([...words, word]);
        } else {
            Swal.fire({
                title: 'Invalid word! Try again',
                icon: 'error',
                confirmButtonText: 'Close'
            });
        }
    }

    // Styles for flip card
    const styles = {
        container: { padding: 20 },
        subTitle: {
            fontSize: "1.5rem", fontWeight: "bold",
            marginBottom: 10, textAlign: "center"
        },
        gameSection: {
            margin: 20,
            padding: 20,
            borderRadius: 20
        },
        textAlignCenter: { textAlign: "center" },
        fontStyleItalic: { fontStyle: "italic" },
        flex: { display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 40 },
        marginTop10: { padding: 10 },
        marginBottom10: { marginBottom: 10 },
        padding20: { padding: 20 },
        fontSize1rem: { fontSize: "1rem" },
        size200: { height: 200, width: 200 },
        fontWeightBold: { fontWeight: "bold" },
        backgroundOrange: { background: "orange" },
        centeredContent: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
        cardFront: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#FDBB71',
            color: 'black',
            borderRadius: 20
        },
        cardBack: { background: '#0F726D', borderRadius: 20 },
        text: {
            fontSize: 40,
            fontWeight: 'bold',
        },
        cardFrontCreate: { background: '#F0E0D6', borderRadius: 20, borderStyle: 'solid', borderWidth: 1, borderColor: '#000' },
        cardBackCreate: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#0F726D',
            color: 'white',
            borderRadius: 20,
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: '#000'
        },
    }

    return (
        <section>
            <h1 className="text-2xl font-extrabold dark:text-white my-8">Memorise the alphabets and when the cards are flipped, click on them to form 3-letter words!</h1>
            <div className="grid grid-cols-2 gap-2" style={styles.gameSection}>
                <div style={{ ...styles.flex, ...styles.textAlignCenter }}>
                    {Array.from({ length: repeatCount }).map((_, row_index) => {
                        return (<div>
                            {
                                Array.from({ length: repeatCount }).map((_, col_index) => {
                                    return (<ReactFlipCard
                                        flipByProp={optionalToggle}
                                        flipTrigger={"disabled"}
                                        direction={"vertical"}
                                        frontStyle={styles.cardFront}
                                        backStyle={styles.cardBack}
                                        frontComponent={<div style={styles.text}>{alphabets[(row_index * 4) + col_index]}</div>}
                                        backComponent={<div></div>}
                                        onClick={() => selectLetters(alphabets[(row_index * 4) + col_index])}
                                    />)
                                })
                            }
                        </div>)
                    })}
                </div>
                <div style={styles.textAlignCenter}>
                    <h2 className='mb-2' style={{ fontSize: '30px' }}>Points: {points}</h2>
                    <Timer expiryTimestamp={time} setReset={setReset} setOptionalToggle={setOptionalToggle} setStart={setStart}></Timer>
                    <div className='row-span-full mb-2'>
                        <button
                            type="button"
                            onClick={() => setOptionalToggle(!optionalToggle)}
                            className="w-3/4 text-white bg-teal-700 hover:bg-teal-900 focus:outline-none font-large rounded-lg text-lg font-bold px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-teal-700 disabled:bg-gray-600"
                            disabled={!start}>
                            FLIP ALL
                        </button>
                    </div>
                    <div className='row-span-full mb-2 text-lg'>
                        <p>Form a 3-letter word:</p>
                    </div>
                    <div className='row-span-full mb-2' style={{ ...styles.flex, ...styles.textAlignCenter }}>
                        {Array.from({ length: 3 }).map((_, index) => {
                            return (<ReactFlipCard
                                flipByProp={flipTrigger[index]}
                                flipTrigger={'disabled'}
                                frontStyle={styles.cardFrontCreate}
                                backStyle={styles.cardBackCreate}
                                frontComponent={<div></div>}
                                backComponent={<div style={styles.text}>{choice[index]}</div>}
                            />)
                        })}
                    </div>
                    <div className='row-span-full mb-2'>
                        <button
                            type="button"
                            onClick={() => formWord()}
                            className="w-3/4 text-black bg-amber-50 hover:bg-amber-100 border-solid border border-stone-950 focus:outline-none font-large rounded-lg text-lg font-bold px-5 py-2.5 text-center me-2 mb-2 disabled:bg-gray-200"
                            disabled={!optionalToggle}>
                            FORM WORD
                        </button>
                    </div>
                    <div className='row-span-full mb-2'>
                        <button
                            type="button"
                            onClick={() => removeLetter()}
                            className="w-3/4 text-black bg-amber-50 hover:bg-amber-100 border-solid border border-stone-950 focus:outline-none font-large rounded-lg text-lg font-bold px-5 py-2.5 text-center me-2 mb-2 disabled:bg-gray-200"
                            disabled={!optionalToggle}>
                            DELETE LETTER
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};