import React, { Component } from 'react';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import ReactDatePicker from 'react-date-picker-cs';
class App extends Component {

  constructor(props, context) {
    super(props, context);

    // Initial state with date
    this.state = {
        selectedDate: '2017-08-13'
    };

    // This binding is necessary to make `this` work in the callback
    this.handleLog = this.handleLog.bind(this);
}

handleLog(date) {
this.setState({
  selectedDate: date
});
}

render() {
    return (
        <div>
            <ReactDatePicker
                onChange={this.handleLog} 
                range={[2013, 2020]} 
                value={this.state.selectedDate} 
                disabled={true}
            />
        </div>
    );
}
  }

export default App;
/*

*/