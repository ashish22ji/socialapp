import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React from 'react'
import './featureinfo.css'
import {green} from '@material-ui/core/colors'

function FeatureInfo() {
    return (
        <div className='featureWrap'>
            <div className='featureItem'>
                <h3 className='featureTitle'>Revenue</h3>
                <div className='featureMoneyWrap'>
                    <h3>$2,415</h3>
                    <h4>-11.4 <ArrowDownward color='error'/></h4>
                </div>
                <span>Compared to Last Months</span>
            </div>
            <div className='featureItem'>
                <h3 className='featureTitle'>Sales</h3>
                <div className='featureMoneyWrap'>
                    <h3>$4,415</h3>
                    <h4>-1.4 <ArrowDownward color='error'/></h4>
                </div>
                <span>Compared to Last Months</span>
            </div>
            <div className='featureItem'>
                <h3 className='featureTitle'>Cost</h3>
                <div className='featureMoneyWrap'>
                    <h3>$2,215</h3>
                    <h4>10.8 <ArrowUpward style={{ color: green[500] }}/></h4>
                </div>
                <span>Compared to Last Months</span>
            </div>
            
        </div>
    )
}

export default FeatureInfo
