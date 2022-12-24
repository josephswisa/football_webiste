import React from 'react'
import "../css/Sidebar.css";
import { SidebarData } from "./SidebarData";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import About from './About';
import Settings from './Settings';
import LoginPage from './LoginPage'
import Table from "./Table";
import LiveTable from "./LiveTable";
import LiveMatches from "./LiveMatches";
import {SignUp} from "./SignUp";
import {StartMatch} from "./StartMatch";

function Sidebar() {
   // const activeMenuClass = ({isActive}) => (isActive? "NavRow-Active" : "NavRow-NonActive");
    return (
        <>
            <BrowserRouter>
                <div className='container'>
                    <div className='Sidebar'>
                        <ul className='SidebarList'>
                            {SidebarData.map((item, key) => {
                                return (
                                    <li key={key} className="SidebarRow" >
                                        <NavLink to={item.link} className="NavRow">
                                            <div id='icon'>{item.icon}</div>
                                            <div id='title'>{item.title}</div>
                                        </NavLink>

                                    </li>
                                )
                            })}
                        </ul>

                    </div>
                    <Routes>
                        <Route path={"#"} />
                        <Route path={"/live-matches"} element={<LiveMatches />} />
                        <Route path={"/table"} element={<Table />} />
                        <Route path={"/live-table"} element={<LiveTable />} />
                        <Route path={"/login"} element={<LoginPage />} />
                        <Route path={"/about"} element={<About />} />
                        <Route path={"/settings"} element={<Settings />} />
                        <Route path={"/signup"} element ={<SignUp />} />
                        <Route path={"/start-match"} element={<StartMatch />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )

}

export default Sidebar