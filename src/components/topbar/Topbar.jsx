import React from 'react';
import './topbar.css';
import {Person, Chat, Notifications, Language, Settings, Search} from '@material-ui/icons'
import {Avatar, Typography} from '@material-ui/core'
import {MenuRounded} from '@material-ui/icons'
import { Link } from 'react-router-dom';

function Topbar() {
    return (
        <div className='topbarWrapper'>
            <div  className='topbarLeft'>
                <MenuRounded fontSize='large'/>
                <h1>LOGO</h1>
            </div >
            <div className='topbarCenter'>
                <div className='searchBar'>
                <Search style={{color:'grey'}}/><input placeholder='Search for Friend, Post or Video' />
                </div>
                
            </div>
            <div className='topbarRight'>
                <Link to='/'><div className='topbaricons'><Typography>Home</Typography></div></Link>
                <Link to='/profile'><div className='topbaricons'><Typography>Timeline</Typography></div></Link>
                
                <div className='topbaricons'>
                <Person /> <span>5</span>
                </div>
                <div className='topbaricons'>
                <Chat />   <span>2</span>
                </div>
                <div className='topbaricons'>
                <Notifications /><span>3</span>
                </div>
                <div className='topbaricons'>
                    <Avatar fontSize='large'/>
                </div>
                
            </div>
        </div>  
    )
}

export default Topbar
