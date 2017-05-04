import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Line} from 'recharts';
import React       from 'react';
import ReactDOM      from 'react-dom';
var Chart = require('chart');
var chart = new Chart;
/*const data = [{x: 100, y: 200, z: 200}, {x: 120, y: 100, z: 260},
    {x: 170, y: 300, z: 400}, {x: 140, y: 250, z: 280},
    {x: 150, y: 400, z: 500}, {x: 110, y: 280, z: 200}]*/

const data = [{x:50,y:30} , {x:100,y:40} , {x:50,y:90} ,{x:170,y:120} ,{x:200,y:150},
    {x:300,y:30} , {x:340,y:100} , {x:230,y:190} ,{x:370,y:200} ,{x:290,y:60}];


const SimpleScatterChart = React.createClass({

    componentDidMount() {
        let canvas = ReactDOM.findDOMNode(this.refs.canvas);
        let ctx = canvas.getContext('2d');
        let height =canvas.height;
        let width =canvas.width;
        /* ctx.fillStyle = 'rgb(200,0,0)';
         ctx.fillRect(10, 10, 55, 50);*/
        for (var i = 75; i <= 600 ;i=i+75){
        ctx.strokeStyle = '#d3d3d3';
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, 600);
        ctx.stroke();
       }

        for (var i = 80; i <= 400 ;i=i+80){
            ctx.strokeStyle = '#d3d3d3';
            ctx.beginPath();
            ctx.moveTo(0, i);
            ctx.lineTo(600, i);
            ctx.stroke();
        }

     ctx.setLineDash([7, 3]);
        ctx.beginPath();
        ctx.moveTo(250,0);
        ctx.lineTo(250,600);
        ctx.strokeStyle = '#FF0000';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0,120);
        ctx.lineTo(600,120);
        ctx.strokeStyle = '#FF0000';
        ctx.stroke();

        for (var i = 0; i < data.length ;i++) {
            ctx.beginPath();
            ctx.arc(width -data[i].x, height-data[i].y, 4, 0, 2 * Math.PI);
            ctx.fillStyle = '#6b74ff';
            ctx.fill();
            ctx.fillStyle = 'black';
            ctx.font = '12px Arial';
            var Cordinae ="X1:" + ( data[i].x).toString()+" Y1:"+(data[i].y - 40).toString()
            ctx.fillText(Cordinae, width -data[i].x, height-data[i].y);
        }


    },
    render () {
        var styles = {
            position: 'absolute',

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


                <canvas ref="canvas"   width="600" height="400" style={styles}  />
            </div>

        );
    }
})

export default SimpleScatterChart;