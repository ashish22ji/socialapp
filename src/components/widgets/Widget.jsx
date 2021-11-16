import React from 'react';
import './widget.css';
import {Visibility} from '@material-ui/icons'
import {widgetData} from '../../data/userData'
import { Link } from 'react-router-dom';

function Widget() {

    const Button = ({type})=>{
        return <button className={'widgetButton '+type}>{type}</button>
    }

    return (
        <div className="widgetApp">
        <div className='widgetWrap'>
            <h3 className='widgetTitle'>Latest Transactions</h3>
            <div className="widgetTable">
                <tr className="widgetTr">
                    <th className="widgetTh">Customer</th>
                    <th className="widgetTh">Date</th>
                    <th className="widgetTh">Amount</th>
                    <th className="widgetTh">Executive</th>
                    {/* <th className="widgetTh">Display</th> */}
                    <th className="widgetTh">Status</th>
                </tr>
                {
                            widgetData.map((val, ind)=>(
                            <>
                            <tr className="widgetTr">
                                <td className="widgetCustomer">
                            <img src={val.image} alt='' className='widgetImg'/>
                            <span className='widgetName'>{val.customer}</span>
                        </td>
                        <td className="widgetDate">
                            {val.date}
                        </td>
                        <td className="widgetAmt">{val.amount}</td>
                        <td className="widgetExecutive">{val.executive}</td>
                        {/* <td className="widgetDisplay"><button><Visibility/>{val.display}</button></td> */}
                        <td className="widgetStatus"><Link to='/userlist'><Button type={val.status}/></Link></td>
                        </tr>
                            </>
                            )
                            )}                
            </div>
        </div>
    </div>   
    )
}

export default Widget
