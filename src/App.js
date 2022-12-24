import React, {useState} from 'react';
import Sidebar from "./components/Sidebar";
import "./App.css"
import LoginPage from "./components/LoginPage";

function App() {

    const[loggedIn, setLoggedIn] = useState(false);

    return (
        <div>
            <div className='TitleBar'>Football Website</div>
            <Sidebar />
        </div>
    );
}

export default App;