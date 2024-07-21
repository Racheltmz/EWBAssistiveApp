import React, { useEffect } from 'react';

export default function Leaderboard() {
    const playerArray = [
        {username: "Grandma", score: 300},
        {username: "Grandpa", score: 250},
        {username: "Aunt", score: 200},
        {username: "Uncle", score: 210}
    ];

    function compare(a,b) {
        return b.score - a.score;
    }

    function createTable() {
        const leaderboard = document.getElementById('leaderboard');
        leaderboard.innerHTML = '';

        playerArray.sort(compare);

        playerArray.forEach((player, index) => {
            const playerItem = document.createElement('div');
            playerItem.classList.add('table-item');

            if (index === 0) {
                playerItem.style.backgroundColor = '#FFDD44';
            } else if (index === 1) {
                playerItem.style.backgroundColor = '#E2DCD9';
            } 

            playerItem.innerHTML = `
                <div className="rank">${index + 1}</div>
                <div className="username">${player.username}</div>
                <div className="score">${player.score} points</div>
            `;

            leaderboard.appendChild(playerItem);
        });
    }
    
    useEffect(() => {
        createTable();
    }, []);

    return (
        <section>
            <h1 className="text-2xl font-extrabold dark:text-white my-8">Leaderboard:</h1>
            <div id="container">
                <div id="leaderboard"></div>
            </div>
        </section>
    );
}