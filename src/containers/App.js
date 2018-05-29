import React, { Component } from 'react';
import './App.css';
import {  Container, Row, Col } from 'reactstrap';
import TopNav from '../components/topnav';
import UserBar from '../components/userbar';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav/>
        <UserBar/>
      </div>
    );
  }
}
