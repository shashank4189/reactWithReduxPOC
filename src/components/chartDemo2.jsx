import rd3 from 'react-d3';
var ScatterChart = rd3.ScatterChart;
import React from 'react';
var scatterData = [
  {
    name: "series1",
    values: [ { x: 0, y: 20 }, { x: 24, y: 10 } ]
},

{
  name: "series3",
    values: [ { x: 70, y: 82 }, { x: 76, y: 82 } ]
}
];
 const chartDemo2 = React.createClass({
  render: function() {
    return <ScatterChart
      data={scatterData}
      width={500}
      height={400}
      yHideOrigin={true}
      title="Scatter Chart"
    />
  }
});
export default chartDemo2;
