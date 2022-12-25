import React from 'react';
import "../css/livematches.css"
import TeamLogo from "../TeamLogo";
import {useEffect} from "react";
import {sendApiGetRequest} from "../ApiRequests";


function LiveMatches() {
    let data;

    useEffect(() => {
        sendApiGetRequest("http://localhost:8989/get-live-matches?", (response) => {
            data = response.data;
        })
    },)

    return (
        <>
            <div className={'vs'}>
                {
                    data.filter(item => item.is_live === true).map(item => (
                        <div key={item.id} className={'teamVsteam'}>
                            <img src={TeamLogo[item.team1.id -1].src} style={{width:'50px',height:'50px'}}/>
                            {item.team1.name}
                            &nbsp;
                                VS
                            &nbsp;
                            {item.team2.name}
                            <img src={TeamLogo[item.team2.id -1].src} style={{width:'50px',height:'50px'}} />
                        </div>
                    ))
                }
            </div>

        </>
    );
}

export default LiveMatches;