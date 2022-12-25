import React, {useState} from 'react';
import '../css/table.css'
import TeamLogo from "../TeamLogo";
import {useEffect} from "react";
import axios from "axios";
import {sendApiGetRequest} from "../ApiRequests";

function Table() {
    let data;
    let sortedData;

    useEffect(() => {
        sendApiGetRequest("http://localhost:8989/get-table?", (response) => {
            data = response.data;

        })

         sortedData = data.slice().sort((team1, team2) => {
            if (team1.points === team2.points) {
                if (team1.goalsBalance === team2.goalsBalance) {
                    return team1.name > team2.name ? 1 : -1;
                }
                return team1.goalsBalance > team2.goalsBalance ? 1 : -1;
            }
            return team1.points > team2.points ? 1 : -1;
        });
    },)









    return (
        <>
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Wins</th>
                    <th>Loses</th>
                    <th>Draws</th>
                    <th>Points</th>
                </tr>
                </thead>
                <tbody>
                {sortedData.reverse().map(item => (
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
                {console.log(sortedData)}
            </table>

        </>
    );
}

export default Table;