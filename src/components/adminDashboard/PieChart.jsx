import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie({ totalFarmers, totalBuyers, totalCompanies }) {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: totalCompanies, label: 'Company', color: 'teal' },
            { id: 1, value: totalFarmers, label: 'Farmer' },
            { id: 2, value: totalBuyers, label: 'Buyer' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}
