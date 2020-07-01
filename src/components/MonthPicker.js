// import * as React from 'react';
// import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
// // import { SampleBase } from '../common/sample-base';
// import './Date.css';
// import DatePicker from 'react-date-picker'
// export default class YearMonthPicker extends React.Component {
  
//     constructor() {
//         super(...arguments);
//         this.start = 'Year';
//         this.depth = 'Year';
//         this.format = 'MMMM y';
//         this.dateValue = new Date();
//     }
//     render() {
//         return (
//         //     <div className='control-pane'>
//         // //         <div className='control-section'>
//                     <div className='datepicker-control-section'>
//                         <DatePickerComponent value={this.dateValue} start={this.start} depth={this.depth} format={this.format}></DatePickerComponent>
//                     </div>
//                 // </div>
//             // </div>
//             );
//     }
// }

import React from "react";
// import DatePicker from "react-datepicker";
import DatePicker from 'react-date-picker'
 
// import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
class YearMonthPicker extends React.Component {
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
   MonthPicker=() => {
    const [startDate, setStartDate] = React.useState(new Date());
    return (
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        dateFormat="MMM yyyy"
        showMonthYearPicker
      />
    );
  };
 
//   render() {
//     return (
//       <DatePicker
//         selected={this.state.startDate}
//         onChange={this.handleChange}
//       />
//     );
//   }
}