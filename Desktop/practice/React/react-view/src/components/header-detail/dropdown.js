/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './dropdown.css'

class Dropdown extends Component {
    render() {
        return(
            <div id="toggle-content" className="toggle-content">
					<ul>
						<li><a className="link" href="#">Main</a></li>
						<li><a className="link" href="#">Link</a></li>
						<li><a className="link" href="#">Dropdown</a><i id='showmenu' className="fas fa-caret-down"></i></li>
					</ul>
				</div>
             )
        }
   }

export default Dropdown;