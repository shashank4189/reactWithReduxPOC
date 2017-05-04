import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Line} from 'recharts';
import React       from 'react';
import ReactDOM      from 'react-dom';
var Chart = require('chart');
var chart = new Chart;
/*const data = [{x: 100, y: 200, z: 200}, {x: 120, y: 100, z: 260},
    {x: 170, y: 300, z: 400}, {x: 140, y: 250, z: 280},
    {x: 150, y: 400, z: 500}, {x: 110, y: 280, z: 200}]*/

const data = [{x:50,y:30} , {x:100,y:60} , {x:150,y:90} ,{x:200,y:120} ,{x:250,y:150}];


const SimpleScatterChart = React.createClass({

    componentDidMount() {
        let canvas = ReactDOM.findDOMNode(this.refs.canvas);
        let ctx = canvas.getContext('2d');

       /* ctx.fillStyle = 'rgb(200,0,0)';
        ctx.fillRect(10, 10, 55, 50);*/
      ctx.strokeStyle = '#d3d3d3';
        ctx.beginPath();
        ctx.moveTo(50,0);
        ctx.lineTo(50,300);
        ctx.stroke();
      ctx.fillStyle ='black';
      ctx.font='12px Arial';
      ctx.fillText("50", 300-20, 50);

        ctx.beginPath();
        ctx.moveTo(100,0);
        ctx.lineTo(100,300);
        ctx.stroke();
      ctx.fillStyle ='black';
      ctx.font='12px Arial';
      ctx.fillText(100, 300-20, 100);

        ctx.beginPath();
        ctx.moveTo(150,0);
        ctx.lineTo(150,300);
        ctx.stroke();
      ctx.fillStyle ='black';
      ctx.font='12px Arial';
      ctx.fillText(150 , 150 +20, 300);

        ctx.beginPath();
        ctx.moveTo(200,0);
        ctx.lineTo(200,300);
        ctx.stroke();
      ctx.fillStyle ='black';
      ctx.font='12px Arial';
      ctx.fillText(200 , 200 +20, 300);

        ctx.beginPath();
        ctx.moveTo(0,50);
        ctx.lineTo(500,50);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0,100);
        ctx.lineTo(500,100);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0,300);
        ctx.lineTo(500,300);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0,200);
        ctx.lineTo(500,200);
        ctx.stroke();


        ctx.beginPath();
        ctx.moveTo(0,300);
        ctx.lineTo(500,300);
        ctx.stroke();

      ctx.setLineDash([7, 3]);
        ctx.beginPath();
        ctx.moveTo(70,0);
        ctx.lineTo(70,500);
        ctx.strokeStyle = '#FF0000';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0,120);
        ctx.lineTo(500,120);
        ctx.strokeStyle = '#FF0000';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(70- 10, 70, 4, 0, 2 * Math.PI);
        ctx.fillStyle='#6b74ff';
        ctx.fill();


    },
    render () {
        var styles = {
            position: 'absolute',
            width: 700,
            height: 500,
            border:'1px solid #d3d3d3'
        }


        return (

            <div>
         {/*   <ScatterChart width={400} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                <XAxis dataKey={'x'} name='stature' unit='cm'/>

                <YAxis dataKey={'y'} name='weight' unit='kg'/>
                <Line  dataKey={'y'} stroke="#8884d8" />
                <Scatter name='A school' data={data} fill='#8884d8'/>
              <Line type="monotone" dataKey={'x'} stroke="#82ca9d" />
                <CartesianGrid />
                <Tooltip cursor={{strokeDasharray: '3 3'}}/>

            </ScatterChart>*/}


                <canvas ref="canvas" style={styles}  />
            </div>

        );
    }
})

export default SimpleScatterChart;