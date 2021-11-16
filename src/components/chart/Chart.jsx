import React from 'react'
import './chart.css'
import { LineChart, BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart(props) {

    return (
        <div className='chartWrap'>
            <h3 >{props.title}</h3>
            <ResponsiveContainer width="100%" aspect={3 / 1}>
                <LineChart data={props.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis/>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey={props.saleKey} stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey={props.userKey} stroke="#82ca9d" />
                    {/* <Line type="monotone" dataKey="" stroke="#82ca9d" /> */}
                </LineChart>
            </ResponsiveContainer>
            


        </div>
    )
}

export function BarCharts(props) {
    return (
        <div className='chartWrap'>
<h3 >{props.title}</h3>
<ResponsiveContainer width="100%" aspect={3 / 1}>
<BarChart
data={props.data}
>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Legend />
<Bar dataKey={props.userKey} stackId="a" fill="#8884d8" />
<Bar dataKey={props.saleKey} stackId="a" fill="#82ca9d" />
</BarChart>
</ResponsiveContainer>
</div>
    )
}

