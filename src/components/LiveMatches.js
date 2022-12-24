import React from 'react';
import "../css/livematches.css"
import TeamLogo from "../TeamLogo";


function LiveMatches() {
    const data = [
        {
            "id": 1,
            "team1": {
                "id": 1,
                "name": "Manchester-City"
            },
            "team2": {
                "id": 2,
                "name": "Arsenal"
            },
            "team1_goals": 4,
            "team2_goals": 2,
            "is_live": true,
            "user_id_handler": 1
        }
    ]

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