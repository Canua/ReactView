/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './sidebar.css'

class Sidebar extends Component {
    render() {
        return(
              <div id="slider-wrapper" className="slider slider-color border-right">
                <div className="slider-header">
                    <strong>Toggle Menu</strong>
                </div>
                <div className="slider-list">
                    <a href="#" className="slider-list-item">Dashboard</a>
                    <a href="#" className="slider-list-item">Client</a>
                    <a href="#" className="slider-list-item">Customer</a>
                    <a href="#" className="slider-list-item">Profile</a>
                </div>
              </div>
             )
        }
   }

export default Sidebar;