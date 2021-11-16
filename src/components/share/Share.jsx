import React from 'react'
import { Button, Divider } from '@material-ui/core'
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons'
import './share.css'

function Share() {
    return (
        <div className='share'>
            <div className="shareWrap">
                <div className='shareImg'>
                    <img src='images/3.jpg' alt='' />
                    <input type='text' placeholder={'Whats in you mind Susie?'} />
                </div>
                <hr className='divider'/>
                <div className='shareBottom'>
                    <div className="shareOptions">
                        <div className='shareOption'>
                            <PermMedia htmlColor='tomato'/>
                            <span>Photo Or Video</span>
                        </div>
                        <div className='shareOption'>
                            <Label htmlColor='blue'/>
                            <span>Tag</span>
                        </div>
                        <div className='shareOption'>
                            <Room htmlColor='green'/>
                            <span>Location</span>
                        </div>
                        <div className='shareOption'>
                            <EmojiEmotions htmlColor='orange'/>
                            <span>Feelings</span>
                        </div>
                    </div>
                    <div className='shareButton'>
                    <Button variant='contained' color='primary'>Share</Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Share
