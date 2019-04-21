/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './subtopic.css';


class Subtopic extends Component {
    componentDidMount(){
            const item = document.querySelectorAll(".items");
            for(var i =0; i < item.length; i ++){
                item[i].addEventListener('click', this.handleClicked);
            }
        }
        handleClicked = ((event) => {
            const item = document.querySelectorAll(".items");
            for(var i =0; i < item.length; i ++){
                item[i].classList.remove('clicked')
            }
            // Event 발생한 element return
            // console.log(event.target);
            event.target.classList.add('clicked');
        })

    render() {
        return(
            <div id="subtopic">
            <ul className="subtopic">
                <li><a className="subtopic-item items clicked" href="#">Main</a></li>
                <li><a className="subtopic-item items" href="#">Link</a></li>
                <li><a className="subtopic-item items" href="#">Dropdown</a></li>
                <li><a className="subtopic-item items" href="#">Chart</a></li>
            </ul>
        </div>
        )
        }
}

export default Subtopic;