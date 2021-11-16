import React from 'react';
import './admin.css';
import FeatureInfo from '../../components/featuredinfo/FeatureInfo';
import Chart, {BarCharts} from '../../components/chart/Chart';
import {userData} from '../../data/userData';
import Widget from '../../components/widgets/Widget';

function Admin() {
    return (
        <div className='adminWrap'>
            <FeatureInfo/>
            <Chart data={userData} title='User Analytics' userKey='activeUser' saleKey='sale'/>
            <BarCharts data={userData} title=' Bar Chart' userKey='activeUser' saleKey='sale'/>
            <Widget/>
        </div>
    )
}

export default Admin
