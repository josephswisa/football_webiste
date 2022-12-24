import React,{useState} from "react";
import "../css/LoginPage.css";
import {useEffect} from "react";
import axios from "axios";

export function StartMatch(){
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItem2, setSelectedItem2] = useState(null);
    const [error,setError] = useState(null);

    const data = [
        {
            "id": 1,
            "name": "Manchester-City",
            "totalGames": 0,
            "goalsFor": 0,
            "goalsAgainst": 0,
            "numberOfWins": 0,
            "numberOfLoses": 0,
            "numberOfDraws": 0,
            "points": 0
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
        },
        ]


    const handleChange = event => {
        const value = event.target.value;
        const item = data.find(item => item.name === value);

        setSelectedItem(item.name);

    };
    const handleChange2 = event => {
        const value = event.target.value;
        const item = data.find(item => item.name === value);

        setSelectedItem2(item.name);

    };

    const onStart=()=>{

    }


    return(
        <div className={"startMatch"}>

           <select name="item" style={{height:'20px'}} onChange={handleChange}>
               <option value="">team 1</option>
                {data.filter(item => item.name !== selectedItem2).map(item =>(
                     <option value={item.name}>{item.name}</option>
               ))}
           </select>

            <select name="item" style={{height:'20px'}} onChange={handleChange2}>
             <option value="">team 2</option>
               {data.filter(item => item.name !== selectedItem).map(item =>(
                   <option value={item.name}>{item.name}</option>
               ))}
           </select>

           <button onClick={onStart}>START LIVE MATCH</button>

             </div>
    )
}