import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Home from '../home/Home';
import Admin from '../admin-dashboard/Admin';
import UserList from '../userlist/UserList';
import User from '../user/User'
import NewUser from '../new-user/NewUser'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Rightbar from '../../components/rightbar/Rightbar';
import Profile from '../profile/Profile';
import './landingPage.css';

function LandingPage() {
    return (
        <Router>
  <Topbar/>
  <div className='appWrap'>
  <Sidebar/>
    <Switch className='switchWrap'>
    <Route exact path='/'><Home/></Route> 
    <Route exact path='/admin'><Admin/></Route>
    <Route exact path='/userlist'><UserList/></Route>
    <Route exact path='/user/:id' render={props=>(
     <User {...props}/> 
    )}></Route>
    <Route exact path='/user'><User/></Route>
    <Route exact path='/newuser'><NewUser/></Route> 
    <Route exact path='/profile'><Profile/></Route>
    </Switch>
    <Rightbar/>
  </div>
  </Router>
    )
}

export default LandingPage
