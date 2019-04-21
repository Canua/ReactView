/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './header.css';
import Dropdown from './header-detail/dropdown.js'


class Main extends Component {

  handleSlider = () => {
    document.getElementById('wrapper').classList.toggle('toggled');
  }

  handleContent = () => {
    document.getElementById('toggle-content').classList.toggle('show');
  }

  render() {
    return(
      <div id="wrapper-header">
      <button className="btn slider-btn" onClick={this.handleSlider}><i className="fas fa-bars"></i></button>
      <a href="#"><button className="btn slider-btn"><i className="fas fa-home"><strong className="header-title"> 회계 관리</strong></i></button></a>
      <span style={{width : '210px' }}></span>
      <button className="btn toggle-btn" onClick={this.handleContent}>
        <i id="togglebtn" className="far fa-user"></i>
      </button>
      <Dropdown />
    </div>
    )
    }
}

export default Main;