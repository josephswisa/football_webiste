import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import TableViewIcon from '@mui/icons-material/TableView';
import LoginIcon from '@mui/icons-material/Login';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export const SidebarData =
    [
        {title: "Live Matches", icon: <LiveTvIcon/>, link: "/live-matches"},
        {title: "Table", icon: <TableViewIcon/>, link: "/table"},
        {title: "Live Table", icon: <ScoreboardIcon/>, link: "/live-table"},
        {title: "Login", icon: <LoginIcon/>, link: "/login"},
        {title: "About", icon: <InfoIcon/>, link: "/about"},
        {title: "Settings", icon: <SettingsIcon/>, link: "/settings"}
    ]

