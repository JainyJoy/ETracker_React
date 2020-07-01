import React, {useState, useEffect,useContext } from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import axios from 'axios';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Grid } from "@material-ui/core";
import * as API from '../constants/Api';
import { DateContext } from './DateContext';

// export default class TotalBarmn extends React.Component
// {
//    constructor(props,context) {
//       super(props);
//       this.state = {
//         Data: {},

      
//       }
//     }
    
//       componentDidMount() {
        

//         // const endpoint = this.props.month ?API.TOTALMN_ENDPT:API.TOTALYR_ENDPT; 
//         // const api_url=API.BAR_URL + endpoint;
//         // const params= {userId: this.props.message, year:this.props.year};
//         // if (this.props.month){
//         //   params.month=this.props.month;
//         // }
//         // const month = useContext(DateContext);
//         // const year = useContext(DateContext);
//         // // console.log(month);
 
//         // axios.get(api_url,{params:params})
//         axios.get(this.props.api,{params:{userId: this.props.message,year:this.context.date.year,month:this.context.date.month}})
//           .then(res => {
//             let amount=[];
//             amount.push(res.data.TotalIncome);
//             amount.push(res.data.TotalExpense);

          

//             this.setState({ 
//               Data: {
//                 labels:['Income','Expense'],
//                 datasets:[
//                    {
//                       data: amount,
//                       borderColor: '  rgb(255, 255, 255)',
//                       backgroundColor:["#69B5FF","#F35B8c"]
                    
//                    }
//                 ]
//              }
//              });
//           }).catch(error => {console.log(error)
//             this.setState({ErrorMessage:"Error in retrieving data"})
//           }) 
//         }
//  render()
//    {
//      return(
      
//       <Grid>
//         <DateConsumer>
//         value=context.state.date;
//           <HorizontalBar
//             data = {this.state.Data}
//             options = {chartoptions}
//             width= {400} 
//             plugins={[ChartDataLabels]} />
//             </DateConsumer>
//             </Grid>
        
//       )
//    }   
// }


function TotalBarmn(props){
  
  const val=useContext(DateContext);
  const [Data, setData] = useState([]);
  const [errorMessage, seterrorMessage] = useState('');
  
  
  const datapass=(val)=>{
    // return(
    // <DateContext.Consumer>
    //   monthval={context.monthval}
    //   yearval={context.yearval}
    // </DateContext.Consumer>);

    console.log(val);
    // console.log(val.yearval,val.monthval);
  }

  useEffect(() => {
    axios.get(props.api,{params:{userId: props.message,year:val.yearval,month:val.monthval}})
              .then(res => {
                let amount=[];
                amount.push(res.data.TotalIncome);
                amount.push(res.data.TotalExpense);
    
              
    
                setData({ 
                  Data: {
                    labels:['Income','Expense'],
                    datasets:[
                       {
                          data: amount,
                          borderColor: '  rgb(255, 255, 255)',
                          backgroundColor:["#69B5FF","#F35B8c"]
                        
                       }
                    ]
                 }
                 });
              }).catch(error => {console.log(error)
                seterrorMessage({errorMessage:"Error in retrieving data"});
              });
            },[]);
     
         return(
          // <div>
          // <DateContext.Consumer ></DateContext.Consumer>
          <Grid>

              <HorizontalBar
                data = {Data}
                options = {chartoptions}
                width= {400} 
                plugins={[ChartDataLabels]} />
                </Grid>
            // </div>
          );
       } ;
export default TotalBarmn;  



const chartoptions = {

  tooltips:{
    yPadding : 0.1,
    xPadding  : 0.1
},
barValueSpacing : 1,       
barDatasetSpacing : 1,

responsive: true,
   legend: {
    display: false,
 },
  scales:{
    xAxes:[{
      categorySpacing: 0,
      ticks: {
        display:false,
        beginAtZero: true
    },
  gridLines:{
    display:false,
    color: "rgba(0, 0, 0, 0)"
  }
}],
      yAxes:[{
        barPercentage: 0.9,
          
          ticks: {
              display:false,
              backdropPaddingX: -10,
              beginAtZero: true
             
          },
          categoryPercentage: 1,
           minBarLength: 2,
          gridLines: {
              display:false,
              color: "rgba(0, 0, 0, 0)"
          }

}]
},
plugins: {
  datalabels: {
    align: function(context) {
      var index = context.dataIndex;
      var value = context.dataset.data[index];
      return value < 1 ? 'right' : 'right'
    },
    anchor: 'start',
    backgroundColor: null,
    borderColor: null,
    borderRadius: 4,
    borderWidth: 1,
    color: '#ffffff',
    font: {
      size: 25,
      weight: 600
    },
    offset: 4,
    padding: 0,
    formatter: function(value) {
      return Math.round(value * 10) / 10
    }
  }
}
}

 
