import { MoreVert, ThumbUp } from '@material-ui/icons';
import React from 'react';
import './post.css';

function Post() {
    return (
        <div className='post'>
        <div className='postWrap'>
           <div className="postTop">
               <div className="postTopLeft">
                <img src="images/3.jpg" alt="" />
                    <span className='userName'>Susie disoza</span>
                    <span className='postDate'>5 min ago</span>
               </div>
                <div className="postTopRight">
                <MoreVert/>
                </div>
           </div>
           <div className="postCenter">
                <span className='postText'>Hey! Its my First post :)</span>
                <img src='images/8.jpg' alt=''/> 
           </div>
           <div className="postBottom">
                <div className="postBottomLeft">
                <ThumbUp color='primary'/>
                    {/* <img src="" alt="" /> */}
                    <span className="likCounter">21 people like it</span>
                </div>
                <div className="postBottomRight">
                    <span>9 comment</span>
                </div>
           </div>
        </div>
    </div>    
    )
}

export default Post
