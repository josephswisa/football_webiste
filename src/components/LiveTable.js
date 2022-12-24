import React from 'react';
import TeamLogo from "../TeamLogo";

function LiveTable() {
    const data2 =[
        {
            "id": 1,
            "name": "Manchester-City",
            "totalGames": 0,
            "goalsFor": 0,
            "goalsAgainst": 0,
            "numberOfWins": 0,
            "numberOfLoses": 0,
            "numberOfDraws": 0,
            "points": 3
        },
        {
            "id": 2,
            "name": "Arsenal",
            "totalGames": 0,
            "goalsFor": 0,
            "goalsAgainst": 0,
            "numberOfWins": 0,
            "numberOfLoses": 0,
            "numberOfDraws": 0,
            "points": 0
        },
        {
            "id": 3,
            "name": "Maccabi-Haifa",
            "totalGames": 0,
            "goalsFor": 0,
            "goalsAgainst": 0,
            "numberOfWins": 0,
            "numberOfLoses": 0,
            "numberOfDraws": 0,
            "points": 0
        },
        {
            "id": 4,
            "name": "Hapoel-Ashkelon",
            "totalGames": 0,
            "goalsFor": 0,
            "goalsAgainst": 0,
            "numberOfWins": 0,
            "numberOfLoses": 0,
            "numberOfDraws": 0,
            "points": 0
        },
        {
            "id": 5,
            "name": "Tottenham",
            "totalGames": 0,
            "goalsFor": 0,
            "goalsAgainst": 0,
            "numberOfWins": 0,
            "numberOfLoses": 0,
            "numberOfDraws": 0,
            "points": 0
        },
        {
            "id": 6,
            "name": "Bayern-Munich",
            "totalGames": 0,
            "goalsFor": 0,
            "goalsAgainst": 0,
            "numberOfWins": 0,
            "numberOfLoses": 0,
            "numberOfDraws": 0,
            "points": 0
        } ]

    return (
        <>
            <table>
                <thead>
                <tr>
                    <th> </th>
                    <th>Name</th>
                    <th>Wins</th>
                    <th>Loses</th>
                    <th>Draws</th>
                    <th>Points</th>
                </tr>
                </thead>
                <tbody>
                {data2.map(item => (
                    <tr>
                        <td>
                            <img src={TeamLogo[item.id -1].src} style={{width:'30px',height:'30px'}} />
                        </td>
                        <td>{item.name}</td>
                        <td>{item.numberOfWins}</td>
                        <td>{item.numberOfLoses}</td>
                        <td>{item.numberOfDraws}</td>
                        <td>{item.points}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </>
    );
}


export default LiveTable;