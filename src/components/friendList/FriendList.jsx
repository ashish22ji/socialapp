import React from 'react';
import './friendlist.css';

function FriendList(props) {
    return (
        <div className='friendListWrap'>
            {
                props.friendsData.map((val, ind)=>(
                       <>
                       <ul className='friendUl'>
                           <li className='friendLi'>
                               <img src={val.image} alt="" className='friendImage'/>
                               {props.active?<div className='onlineBullet'></div>:null}
                               <span> {val.name}</span>
                           </li>
                       </ul>
                       </> 
                )
                )
            }    
        </div>
    )
}

export default FriendList
