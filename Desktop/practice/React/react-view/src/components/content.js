import React, { Component } from 'react';
import './content.css';
// npm install react-datapicker --save
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./customDatePickerWidth.css";

class Content extends Component {
    // DatePicker
    // https://reactdatepicker.com/
    state = {
          startDate: new Date()
        };
     
      handleChange = ((date) => {
        this.setState({
          startDate: date
        })
      })
    render() {
        return (
            <div id="main-content" className='customDatePickerWidth'>
                    <form>
                    <label>일 자</label>
                    <DatePicker
                    dateFormat="yyyy년M월d일"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    />
                    <label>분 류</label>
                    <input className='col2' type='text'></input>
                    <label>거래처</label>
                    <input className='col1' type='text'></input>
                    <label>상 품</label>
                    <input className='col1' type='text'></input>
                    </form>
                    {/* https://www.w3schools.com/w3css/w3css_input.asp */}

			</div>  
             );
        }
}
export default Content; 