import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { teal } from '@mui/material/colors';
import './liechart.css'
export default function BasicArea() {
  return <>
    <div className=''>
      <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area: true,
          color:'teal'
        },
      ]}
      width={500}
      height={300}
    />
    </div>
  </>
}
