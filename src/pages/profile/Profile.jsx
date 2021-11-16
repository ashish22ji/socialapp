import React from 'react'
import './profile.css'
import Feed from '../../components/feed/Feed'

function Profile() {
    return (
        <div className='profileApp'>
            <div className="profileCover">
                <img src="../images/cover.png" alt="cover" className='coverImg'/>
                <img src="../images/3.jpg" alt="" className='profileImg'/>   
                <div className="aboutProfile">
                    <h2>Susie Disouza</h2>
                   <span>Hey! Welcome to my Profile!</span> 
                </div>            
            </div>
            <div className="proFeedWrap">
            <Feed/>
            </div>                
        </div>
    )
}

export default Profile
