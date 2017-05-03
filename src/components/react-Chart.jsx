import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Line} from 'recharts';
import React       from 'react';
import ReactDOM      from 'react-dom';
var Chart = require('chart');
var chart = new Chart;
/*const data = [{x: 100, y: 200, z: 200}, {x: 120, y: 100, z: 260},
    {x: 170, y: 300, z: 400}, {x: 140, y: 250, z: 280},
    {x: 150, y: 400, z: 500}, {x: 110, y: 280, z: 200}]*/

const data = {
    dataset:[]
};


const SimpleScatterChart = React.createClass({

    componentDidMount() {
        let canvas = ReactDOM.findDOMNode(this.refs.canvas);
        let ctx = canvas.getContext('2d');

       /* ctx.fillStyle = 'rgb(200,0,0)';
        ctx.fillRect(10, 10, 55, 50);*/

        ctx.beginPath();
        ctx.moveTo(50,0);
        ctx.lineTo(50,150);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(100,0);
        ctx.lineTo(100,150);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(150,0);
        ctx.lineTo(150,150);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(200,0);
        ctx.lineTo(200,150);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0,50);
        ctx.lineTo(300,50);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0,100);
        ctx.lineTo(300,100);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0,150);
        ctx.lineTo(300,150);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0,200);
        ctx.lineTo(300,200);
        ctx.stroke();


        ctx.beginPath();
        ctx.moveTo(0,150);
        ctx.lineTo(300,150);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(70,0);
        ctx.lineTo(70,300);
        ctx.strokeStyle = '#FF0000';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0,120);
        ctx.lineTo(300,120);
        ctx.strokeStyle = '#FF0000';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(70- 20, 70, 4, 0, 2 * Math.PI);
        ctx.fillStyle='#6b74ff';
        ctx.fill();
    },
    render () {
        var styles = {
            position: 'absolute',
            width: 300,
            height: 150,
            border:'1px solid #d3d3d3'
        }


        return (
            <div>
         {/*   <ScatterChart width={400} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                <XAxis dataKey={'x'} name='stature' unit='cm'/>
                <YAxis dataKey={'y'} name='weight' unit='kg'/>
                <Line  dataKey={'y'} stroke="#8884d8" />
                <Scatter name='A school' data={data} fill='#8884d8'/>
                <CartesianGrid />
                <Tooltip cursor={{strokeDasharray: '3 3'}}/>
            </ScatterChart>*/}


                <canvas ref="canvas" style={styles}  />
            </div>
        );
    }
})

export default SimpleScatterChart;