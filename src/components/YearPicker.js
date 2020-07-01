import React from "react";
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Grid } from "@material-ui/core";
import Icon from '@material-ui/core/Icon';

import Picker from "react-year-picker";
import DatePicker from "react-date-picker"
import './Date.css';


const dayjs = require("dayjs");

// export default class YearPicker extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       now: dayjs(),
//     };
//   }
//   _decrementYear = () =>
//     this.setState(prevState => ({
//       now: prevState.now.subtract(1, "years")
//     }),
//     this.props.onYearChange(this.state.now)
//     // console.log(this.state.now.$y)
//     );
    
  // _incrementYear = () =>
  //   this.setState(prevState => ({
  //     now: prevState.now.add(1, "years")
  //   }),
  //   this.props.onYearChange(this.state.now)
  //   );

  

//   render() {
//     return (
//         <Grid>
//          <Icon onClick={this._decrementYear}>{<ArrowLeftIcon style={{fill: "#A4A1FB"}}/>}</Icon>
//         <Icon>{this.state.now.format("YYYY")}</Icon>
//         <Icon onClick={this._incrementYear}>
//           {this.state.now.clone().add(1, "hour") > dayjs() ? "" : <ArrowRightIcon style={{fill: "#A4A1FB"}}/>}
//         </Icon>
//         </Grid>
//     );
//   }
// }
class MonthBox extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
        value: this.props.value || 'N/A',
      
    }
    console.log(this.state.value)
    this._handleClick = this._handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({
        value: nextProps.value || 'N/A',
    })

  }

  render() {
    return (
  
      <Grid item  alignItems="flex-start" justify="flex-end" direction="row" onClick={this._handleClick}>
          <ArrowLeftIcon style={{fill: "#A4A1FB"}}/>
          <Icon>{this.state.value}</Icon> <ArrowRightIcon style={{fill: "#A4A1FB"}}/>
      </Grid>
    );
  }

  _handleClick(e) {
    this.props.onClick && this.props.onClick(e);
  }
}


export default class YearPickerComp extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      mvalue : new Date().getFullYear()
    };
   this.handleChange = this.handleChange.bind(this);

  } 
  handleChange(date) {
    console.log(date);
    this.setState( {mvalue: date} );
  }
   render() {
    const makeText = m => {
      if (m && m.year) return ( m.year)
      return '?'
  }
  const mvalue =  this.state.mvalue;
    return( <Picker>
           value={mvalue}
            onChange={this.handleChange} 
            <MonthBox value={makeText(mvalue)} onClick={this.handleClickMonthBox} />
            </Picker>)
  }
}
