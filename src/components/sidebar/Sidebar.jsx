import { Divider } from '@material-ui/core'
import React from 'react'
import './sidebar.css'
import {sidebarData} from './SidebarData'
import { Link } from 'react-router-dom'
import {friendList} from '../../data/userData'
import FriendList from '../friendList/FriendList'

function Sidebar() {
    return (
        <div className='sidebarWrap'>
            <div className='sidebarMenu'>
            {
                sidebarData.map((val, index) => (
                    <>
                        <h3>{val.menu}</h3>
                        <Divider />
                        {val.values.map((subval, subindex) => (
                            <ul>
                                <Link to={subval.path} className='link'>
                                <li>
                                    <div className='sidebarIcon'>{subval.icon}</div> 
                                   <div className='sidebarSubmenu'>{subval.subMenu}</div>
                                   </li>
                                </Link>
                            </ul>
                        ))
                        }
                    </>
                ))
            }
            <Divider />
        
             <FriendList friendsData={friendList}/>
                </div>
        </div>
    )
}

export default Sidebar
