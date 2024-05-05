import React, { Component } from 'react';
import Chart from 'chart.js/auto';

class BarChart extends Component {
  chartRef = React.createRef();
  chartInstance = null;

  componentDidMount() {
    this.buildChart();
  }

  componentWillUnmount() {
    this.destroyChart();
  }

  buildChart() {
    const myChartRef = this.chartRef.current.getContext('2d');

    this.chartInstance = new Chart(myChartRef, {
      type: 'bar',
      data: {
        labels: ['order', 'delivered', 'shipping', 'pending'],
        datasets: [{
          label: 'Orders',
          data: [65, 25, 20, 20],
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  destroyChart() {
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
  }

  render() {
    return (
      <div>
        <canvas ref={this.chartRef} />
      </div>
    );
  }
}

export default BarChart;
