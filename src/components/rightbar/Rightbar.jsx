import { Divider } from '@material-ui/core';
import React from 'react';
import './rightbar.css';
import {friendList} from '../../data/userData'
import FriendList from '../friendList/FriendList'
import {CardGiftcard} from '@material-ui/icons'

function Rightbar() {
    return (
        <div className='rightbar'>
            <div className='rightbarWrap'>
                <div className='birthdayContainer'>
                    {/* <img src="images/Gift.jpg" alt="BirthdayGift" /> */}
                    <CardGiftcard color='secondary' fontSize='large' className='birthdayIcon'/>
                    <span><b>Neelam Sharma, Piyush Goel</b> and <b>3 more friends</b> have a Birthday today</span> 
                </div>
                <Divider />
                <img src="../images/Ad7.gif" alt="rightbarAd" className='rightbarAd'/>
                <Divider />
                <div className='onlineFriends'>
                <div className='onlineTitle'>
                <h4> Acive Friends</h4>
                </div>
                <FriendList friendsData={friendList} active={true}/>
                </div>
                
                <Divider />  
                <img src="../images/Ad4.jpg" alt="rightbarAd" className='rightbarAd'/>
            </div>
        </div>
        
    )
}

export default Rightbar
