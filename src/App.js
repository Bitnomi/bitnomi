import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import UserProfile from './components/UserProfile';
import UserDashboard from './components/UserDashboard';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} />
        <Route path='/userprofile' component={UserProfile} />
        <Route path='/userdashboard' component={UserDashboard} />
      </Layout>
    );
  }
}
