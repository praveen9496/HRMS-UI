import React from 'react';
import {Pie } from 'react-chartjs-2';

const state = {

  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#ff6384',
        '#3e007c',
        '#ffce56',
        '#4bc0c0',
        '#ff9f40'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default class ChartEmployee extends React.Component {
  render() {
    return (
      <div>
        <Pie
          data={state}
          width={400}
          height={300}
          options={{
            title:{
              display:true,
              fontSize:20,
             
            },
            legend:{
              display:true,
              position:'right',
            }
          }}
        />
      </div>
    );
  }
}