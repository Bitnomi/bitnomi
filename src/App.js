import React, { Component } from 'react';
import { Layout } from './components/Layout';
import Home from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import UserProfile from './components/UserProfile';
import UserDashboard from './components/UserDashboard';
import Account from './components/Account';
import PostTrade from './components/PostTrade';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './components/About'

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Router>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} />
        <Route path='/userprofile' component={UserProfile} />
        <Route path='/userdashboard' component={UserDashboard} />
        <Route path='/account' component={Account} />
        <Route path='/post-trade' component={PostTrade} />
        <Route path='/about' component={About} />
      </Layout>
      </Router>
    );
  }
}
