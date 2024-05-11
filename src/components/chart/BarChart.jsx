import React, { Component } from 'react';
import Chart from 'chart.js/auto';

class BarChart extends Component {
  chartRef = React.createRef();
  chartInstance = null;

  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.counts !== this.props.counts) {
      this.updateChart();
    }
  }

  componentWillUnmount() {
    this.destroyChart();
  }

  buildChart() {
    const myChartRef = this.chartRef.current.getContext('2d');

    this.chartInstance = new Chart(myChartRef, {
      type: 'bar',
      data: {
        labels: ['Pending', 'Shipping', 'Delivered', 'Processing'], // Adjust labels as needed
        datasets: [{
          label: 'Orders',
          data: this.props.counts, // Use counts from props
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

  updateChart() {
    this.chartInstance.data.datasets[0].data = this.props.counts;
    this.chartInstance.update();
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
