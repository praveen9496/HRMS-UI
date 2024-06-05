import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],

  datasets: [
    {
      label: 'status1',
      
      borderColor: "#ffaa24",
      cornerRadius: 6,
      borderWidth: 2,
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      tension: 0,
      pointBorderColor: '#ffaa24',
      pointBackgroundColor: '#ffaa24',
      pointBorderWidth: 5,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#ffaa24',
      pointHoverBorderColor: '#ffaa24',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 50,
      fill: false,
      gridLines: false,
      data: [65, 59, 80, 81, 56, 55, 40, 60],
    },
    {
      label: 'status2',
     
      borderColor: "#b3b3b3",
      borderWidth: 2,
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      tension:0,
      pointBorderColor: '#b3b3b3',
      pointBackgroundColor: '#b3b3b3',
      pointBorderWidth: 5,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#b3b3b3',
      pointHoverBorderColor: '#b3b3b3',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 50,
      fill: false,
      gridLines: false,
      data: [20, 10, 40, 50, 60, 40, 45, 20],
    },
    {
      label: 'status3',
      
      borderColor: "#1b5a90",
      borderWidth: 2,
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      tension:0,
      pointBorderColor: '#1b5a90',
      pointBackgroundColor: '#1b5a90',
      pointBorderWidth: 5,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#1b5a90',
      pointHoverBorderColor: '#1b5a90',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 50,
      fill: false,
      gridLines: false,
      data: [50, 40, 60, 75, 40, 50, 40, 55],
    },
  ]
};
;

export default class ChartSalary extends React.Component {
  render() {
    return (
      <div>
         <Line   width={500}
          height={300} ref="chart" data={data} />
      </div>
    );
  }
  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
  }
}
