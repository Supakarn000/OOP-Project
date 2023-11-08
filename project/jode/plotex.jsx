import React from 'react';
import Plot from 'react-plotly.js';

function ScatterPlot() {
  // Sample data
  const data = [
    {
      x: [ 0, 1],
      y: [ 0, 1],
      mode: 'markers',
      type: 'scatter',
      marker: { color: 'blue' },
    },
  ];

  const layout = {
    title: 'Scatter Plot Example',
    xaxis: { title: 'X-Axis' },
    yaxis: { title: 'Y-Axis' },
  };

  return (
    <div>
      <Plot
        data={data}
        layout={layout}
        config={{ displayModeBar: false }}
        style={{ width: '100%', height: '400px' }}
      />
    </div>
  );
}

export default ScatterPlot;
