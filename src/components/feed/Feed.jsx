import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
function Feed() {
    return (
        <div className='feedApp'>
            <Share/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default Feed
