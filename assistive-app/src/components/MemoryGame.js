import React, { useEffect, useState } from 'react';
import ReactFlipCard from 'reactjs-flip-card';

export default function MemoryGame() {
    const [reset, setReset] = useState(true);
    const [alphabets, setAlphabets] = useState([]);
    const [optionalToggle, setOptionalToggle] = useState(false);
    const [flipTrigger, setFlipTrigger] = useState([false, false, false]);
    const [choice, setChoice] = useState([]);
    const numChoices = 0;
    const repeatCount = 4;

    // TODO: ensure there are vowels
    // TODO: cannot form word when words are flipped
    useEffect(() => {
        if (reset) {
            getRandomLetter();
            setFlipTrigger([false, false, false]); 
            setChoice([]);
        }
        setReset(false);
    }, [reset]);

    const getRandomLetter = (capital = true) => {
        let chars = [...Array(26)].map((_, i) => String.fromCharCode(i + (capital ? 65 : 97)));
        let letters = [];
        for (let i = 0; i < 16; i++) {
            let char_idx = Math.floor(Math.random() * chars.length);
            letters.push(chars[char_idx]);
            chars.splice(char_idx, 1);
        }
        return setAlphabets(letters);
    }

    const selectLetters = (letter) => {
        if (numChoices < 3) {
            let arrCopy = [...flipTrigger];
            arrCopy[choice.length] = !arrCopy[choice.length];
            setFlipTrigger(arrCopy);

            let choiceCopy = [...choice];
            choiceCopy[choice.length] = letter;
            setChoice(choiceCopy);
        }
    }

    const removeLetter = () => {
        let arrCopy = [...flipTrigger];
        arrCopy[choice.length - 1] = !arrCopy[choice.length - 1];
        setFlipTrigger(arrCopy);
        
        let choiceCopy = [...choice];
        choiceCopy.splice(-1, 1);
        setChoice(choiceCopy);
    }

    const formWord = () => {
        let word = choice.join('');
        console.log(word);
        setReset(true);
    }

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
        <section className="grid grid-cols-2 gap-2" style={styles.gameSection}>
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
                <div className='row-span-full mb-8'>
                    <button
                        type="button"
                        onClick={() => setOptionalToggle(!optionalToggle)}
                        className="w-3/4 text-white bg-teal-700 hover:bg-teal-900 focus:outline-none font-large rounded-lg text-lg font-bold px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-teal-700">
                        FLIP ALL
                    </button>
                </div>
                <div className='row-span-full mb-8 text-lg'>
                    <p>Form a 3-letter word:</p>
                </div>
                <div className='row-span-full mb-8' style={{ ...styles.flex, ...styles.textAlignCenter }}>
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
                <div className='row-span-full mb-8'>
                    <button
                        type="button"
                        onClick={() => formWord()}
                        className="w-3/4 text-black bg-amber-50 hover:bg-amber-100 border-solid border border-stone-950 focus:outline-none font-large rounded-lg text-lg font-bold px-5 py-2.5 text-center me-2 mb-2 dark:amber-50 dark:hover:bg-amber-100">
                        FORM WORD
                    </button>
                </div>
                <div className='row-span-full mb-8'>
                    <button
                        type="button"
                        onClick={() => removeLetter()}
                        className="w-3/4 text-black bg-amber-50 hover:bg-amber-100 border-solid border border-stone-950 focus:outline-none font-large rounded-lg text-lg font-bold px-5 py-2.5 text-center me-2 mb-2 dark:amber-50 dark:hover:bg-amber-100">
                        DELETE LETTER
                    </button>
                </div>
            </div>
        </section>
    );
};