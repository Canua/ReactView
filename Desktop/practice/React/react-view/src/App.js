import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import Subtopic from './components/subtopic'
import Sidebar from './components/sidebar'
import Content from './components/content'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <div id="wrapper" className="flex">
      <Sidebar />
        <div id="page-content-wrapper">
          <Header />
          <Subtopic />
          <Content />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
