import React,{useState} from "react";
import "../css/LoginPage.css";
import {useEffect} from "react";
import axios from "axios";
import {sendApiGetRequest, sendApiPostRequest} from "../ApiRequests";

export function StartMatch(){
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItem2, setSelectedItem2] = useState(null);
    let data;

    useEffect(() => {
        sendApiGetRequest("http://localhost:8989/get-teams?", (response) => {
            data = response.data;

        })},)


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

    const onStart=()=> {
        sendApiPostRequest("http://localhost:8989/add-new-live-match?", {
            team1id: selectedItem.id,
            team2id: selectedItem2.id,
            userId: window.$userDetails.userId,
            token: window.$userDetails.token
        }, (response) => {
            let startMatch = response.data;
        });
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