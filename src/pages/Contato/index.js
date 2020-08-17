import React, {Component} from 'react';
import { Chart } from 'react-charts';

export default function Contato() {
    const data = React.useMemo(
      () => [
        {
            label: 'Casos',
            data: [[0, 1]]
        },
        {
            label: 'Mortes',
            data: [[0, 1], [13, 93], [34, 6035]]
        },
        
      ],
      []
    )

    const axes = React.useMemo(
      () => [
        { primary: true, type: 'linear', position: 'bottom' },
        { type: 'linear', position: 'left' }
      ],
      []
    )

    const lineChart = (
      <div
        style={{
          width: '600px',
          height: '400px',
          backgroundColor: 'white',
        }}
      >
        <Chart data={data} axes={axes} />
      </div>
    )

    return lineChart;
  }