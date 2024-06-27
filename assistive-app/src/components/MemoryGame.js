import React, { useEffect, useState } from 'react';
import ReactFlipCard from 'reactjs-flip-card';

export default function MemoryGame() {
    const [alphabets, setAlphabets] = useState([]);
    const [optionalToggle, setOptionalToggle] = useState(false);
    const repeatCount = 4;

    // TODO: ensure the alphabets remain fixed for the duration of the game
    // TODO: avoid repeats
    useEffect(() => {
        generateAlphabet();
    }, []);

    const generateAlphabet = (capital = true) => {
        setAlphabets([...Array(26)].map((_, i) => String.fromCharCode(i + (capital ? 65 : 97))));
    }

    const getRandomLetter = () => {
        return alphabets[Math.round(Math.random() * alphabets.length)];
    }

    const styles = {
        container: { padding: 20 },
        subTitle: {
            fontSize: "1.5rem", fontWeight: "bold",
            marginBottom: 10, textAlign: "center"
        },
        sectionExample: {
            background: "#f1f1f1",
            margin: 20,
            padding: 20,
            borderRadius: 20
        },
        textAlignCenter: { textAlign: "center" },
        fontStyleItalic: { fontStyle: "italic" },
        flex: { display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20 },
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
    }

    return (
        <section style={styles.sectionExample}>
            <div style={styles.textAlignCenter}>
                <button
                    type="button"
                    onClick={() => setOptionalToggle(!optionalToggle)}
                    class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    FLIP ALL
                </button>
            </div>
            <div style={{ ...styles.flex, ...styles.textAlignCenter }}>
                {Array.from({ length: repeatCount }).map((_, index) => {
                    return (<div>
                        {
                            Array.from({ length: repeatCount }).map((_, index) => {
                                return (<ReactFlipCard
                                    flipByProp={optionalToggle}
                                    flipTrigger={"disabled"}
                                    direction={"vertical"}
                                    frontStyle={styles.cardFront}
                                    backStyle={styles.cardBack}
                                    frontComponent={<div style={styles.text}>{getRandomLetter()}</div>}
                                    backComponent={<div></div>}
                                />)
                            })
                        }
                    </div>)
                })}
            </div>
        </section>
    );
};