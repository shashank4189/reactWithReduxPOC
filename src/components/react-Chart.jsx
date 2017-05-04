import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Line} from 'recharts';
import React       from 'react';
const data = [{x: 100, y: 200, z: 200}, {x: 120, y: 100, z: 260},
    {x: 170, y: 300, z: 400}, {x: 140, y: 250, z: 280},
    {x: 150, y: 400, z: 500}, {x: 110, y: 280, z: 200}]

const SimpleScatterChart = React.createClass({
    render () {
        return (
            <ScatterChart width={400} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                <XAxis dataKey={'x'} name='stature1' unit='cm'/>
                <YAxis dataKey={'y'} name='weight' unit='kg'/>
                <Scatter name='A school' data={data} fill='#8884d8'/>
              <Line type="monotone" dataKey={'x'} stroke="#82ca9d" />
                <CartesianGrid />
                <Tooltip cursor={{strokeDasharray: '3 3'}}/>

            </ScatterChart>
        );
    }
})

export default SimpleScatterChart;