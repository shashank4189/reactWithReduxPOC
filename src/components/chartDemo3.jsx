var React = require('react');
var ReactDOM = require('react-dom');
var Grid = require('react-d3-core').Grid;
var Yaxis = require('react-d3-core').Yaxis;
var chartSeries = [
  {
    field: 'Under 5 Years'
  },
  {
    field: '5 to 13 Years'
  }
]
var styles = {
  stroke: '#d3d3d3',
  markerend: 'url(#markerArrow)'

}



var medianStyles = {
  stroke: '#FF0000',
  markerend: 'url(#markerArrow)'

}
var linedata =[];
const chartDemo3 = React.createClass({


  bindgridLines(){
    for (var i = 0; i <= 600 ;i=i+75){
      linedata.push(
        {x1:i,
          y1:0,
          x2:i,
          y2:400,
          axis:'v'
        }) ;
    }



    for (var i = 0; i <= 400 ;i=i+80){
      linedata.push(
        {x1:0,
          y1:i,
          x2:600,
          y2:i,
          axis:'h'
        }) ;
    }

    return linedata.map((item,index) => {
      return (

        <line key={index} x1={item.x1}  y1={item.y1} x2={item.x2} y2={item.y2} style={styles} />


      )
    })
    /*return data;*/
  },

  bindText(){
    var data='';
    return linedata.map((item,index) => {
       if(item.axis =='v') {
         data = <text key={index} textAnchor="middle" x={item.x2}  y={item.y2}>{600-item.x2}</text>
       }
       else{
         data = <text key={index} textAnchor="middle" x={item.x2}  y={item.y2+20}>{400-item.y2}</text>
       }

        return (data)
    })
    /*return data;*/
  },
  setAlert: function(){
    alert('hello');
  },

  render: function() {

    var chartData = [560000,
      580000,
      600000,
      620000,
      640000,
      660000,
      680000,
      700000,
      720000,
      740000,
      760000,
      780000]//require("dsv?delimiter=,!../data/garbage.csv");

const generalChartData =
  [
    {"name":"Darron Weissnat IV","BMI":20.72,"age":39,"birthday":"2005-01-03T00:00:00.000Z","city":"East Russel","married":false,"index":0}
    ,
    {"name":"Pablo Ondricka","BMI":19.32,"age":38,"birthday":"1974-05-13T00:00:00.000Z","city":"Lake Edytheville","married":false,"index":1}
    ,
    {"name":"Mr. Stella Kiehn Jr.","BMI":16.8,"age":34,"birthday":"2003-07-25T00:00:00.000Z","city":"Lake Veronicaburgh","married":false,"index":2}
    ,
    {"name":"Lavon Hilll I","BMI":20.57,"age":12,"birthday":"1994-10-26T00:00:00.000Z","city":"Annatown","married":true,"index":3}
    ,
    {"name":"Clovis Pagac","BMI":24.28,"age":26,"birthday":"1995-11-10T00:00:00.000Z","city":"South Eldredtown","married":false,"index":4}
    ,
    {"name":"Gaylord Paucek","BMI":24.41,"age":30,"birthday":"1975-06-12T00:00:00.000Z","city":"Koeppchester","married":true,"index":5}
    ,
    {"name":"Ashlynn Kuhn MD","BMI":23.77,"age":32,"birthday":"1985-08-09T00:00:00.000Z","city":"West Josiemouth","married":false,"index":6}
    ,
    {"name":"Fern Schmeler IV","BMI":27.33,"age":26,"birthday":"2005-02-10T00:00:00.000Z","city":"West Abigaleside","married":true,"index":7}
    ,
    {"name":"Enid Weber","BMI":18.72,"age":17,"birthday":"1998-11-30T00:00:00.000Z","city":"Zackton","married":true,"index":8}
    ,
    {"name":"Leatha O'Hara","BMI":17.68,"age":42,"birthday":"2010-10-17T00:00:00.000Z","city":"Lake Matilda","married":false,"index":9}
    ,
    {"name":"Korbin Steuber","BMI":16.35,"age":39,"birthday":"1975-06-30T00:00:00.000Z","city":"East Armandofort","married":true,"index":10}
    ,
    {"name":"Brennon Torphy","BMI":27.37,"age":24,"birthday":"2003-10-21T00:00:00.000Z","city":"Croninfort","married":true,"index":11}
    ,
    {"name":"Ms. Genoveva Bradtke","BMI":28.63,"age":19,"birthday":"1983-01-10T00:00:00.000Z","city":"Port Emanuel","married":true,"index":12}
    ,
    {"name":"Gregg Halvorson","BMI":15.45,"age":15,"birthday":"2004-06-15T00:00:00.000Z","city":"Lake Angelinastad","married":false,"index":13}
    ,
    {"name":"Mr. Sabina Schroeder III","BMI":24.27,"age":26,"birthday":"1980-11-22T00:00:00.000Z","city":"Toyview","married":true,"index":14}
    ,
    {"name":"Alanna Mitchell","BMI":29.25,"age":37,"birthday":"1971-08-04T00:00:00.000Z","city":"Lake Monserratmouth","married":false,"index":15}
    ,
    {"name":"Ronny Sanford","BMI":29.16,"age":24,"birthday":"1994-11-24T00:00:00.000Z","city":"New Claudhaven","married":false,"index":16}
    ,
    {"name":"Emmitt Pouros","BMI":27.95,"age":14,"birthday":"1989-04-04T00:00:00.000Z","city":"Moorefurt","married":true,"index":17}
    ,
    {"name":"Earl Purdy","BMI":18.34,"age":38,"birthday":"2013-04-03T00:00:00.000Z","city":"Lake Rowanberg","married":true,"index":18}
    ,
    {"name":"Cordelia Klocko","BMI":25.85,"age":36,"birthday":"2011-01-17T00:00:00.000Z","city":"Lakinchester","married":true,"index":19}
    ,
    {"name":"Guido Conroy","BMI":25.17,"age":39,"birthday":"1977-04-20T00:00:00.000Z","city":"Scarlettland","married":true,"index":20}
    ,
    {"name":"Miss Demond Weissnat V","BMI":21.44,"age":19,"birthday":"2007-06-09T00:00:00.000Z","city":"Savionberg","married":false,"index":21}
    ,
    {"name":"Easton Mante","BMI":20.61,"age":43,"birthday":"2007-01-29T00:00:00.000Z","city":"Kutchberg","married":false,"index":22}
    ,
    {"name":"Dayton Ebert","BMI":29.88,"age":20,"birthday":"1978-04-27T00:00:00.000Z","city":"West Wiley","married":true,"index":23}
  ]




    const circleData = [{x:50,y:30, product:'Footbal'} , {x:100,y:40, product:'Cricket'} , {x:50,y:90, product:'Badminton'} ,{x:170,y:120, product:'Chess'} ,{x:200,y:150, product:'Rugbi'},
      {x:300,y:30, product:'Pool'} , {x:340,y:100, product:'Wrestling'} , {x:230,y:190, product:'Kabddi'} ,{x:370,y:200, product:'Tennis'} ,{x:290,y:60, product:'Carom'}];


    var width = 700,
      height = 400,
      margins = {top: 20, right: 50, bottom: 30, left: 50},
      gridAxisClassName = "test-grid-class",
      y = function(d) {
        return d.age;
      },
      yDomain = d3.extent(generalChartData, y),
      yRange = [height - margins.top - margins.bottom, 0],
      yScale = 'linear',
      x = function(d) {
        return d.index;
      },
      xDomain = d3.extent(generalChartData, x),
      xRange = [0, width - margins.left - margins.right],
      xScale = 'linear';

    // setting you svg width
    var width1 = 500,

      height1 = 300,

      margins1 = {top: 20, right: 50, bottom: 20, left: 50},

      y = function(d) {
        return +d.total;
      },

      yDomain1 = d3.extent(chartData, function(d){ return y(d); }),

      yRange1 = [(height1 - margins1.top - margins1.bottom), 0],

      yScale1 = 'linear',

      yLabel1 = "Total",
      yLabelPosition1 = 'right',
      yOrient1 = "right",
      yTickOrient1 = "left";

    return <div>
      <svg width={width} height={height} >
        <defs>
          <marker id="markerArrow" markerWidth="13" markerHeight="13" refX="2" refY="6" orient="auto">
            <path d="M2,2 L2,11 L10,6 L2,2" />
          </marker>
        </defs>
      {/*  <Grid
          width= {width}
          height= {height}
          margins= {margins}
          type= {'y'}
          gridAxisClassName= {gridAxisClassName}
          y= {y}
          yDomain= {yDomain}
          yRange= {yRange}
          yScale= {yScale}
        />
        <Grid
          width= {width}
          height= {height}
          margins= {margins}
          type= {'x'}
          gridAxisClassName= {gridAxisClassName}
          x= {x}
          xDomain= {xDomain}
          xRange= {xRange}
          xScale= {xScale}
        />*/}
        {/*<defs>
          <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="gray" stroke-width="0.5"/>
          </pattern>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <rect width="80" height="80" fill="url(#smallGrid)"/>
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="gray" stroke-width="1"/>
          </pattern>
        </defs>*/}

        <rect width="100%" height="100%" fill="url(#grid)" />
        {this.bindgridLines()}


        }

    {/*    <path stroke="green" strokeWidth="2" fill="none" d="M20.8,51c0,0,20.8,18.2,21.5,18.2c0.6,0,33.3-38.5,33.3-38.5" />*/}
        <line x1="120" y1="0" x2="120" y2="400" stroke-width="20" strokeDasharray="8, 5" style={medianStyles} />
        <line x1="0" y1="230" x2="600" y2="230" stroke-width="20" strokeDasharray="8, 5" style={medianStyles} />


        {circleData.map((data, index) =>
          <circle  cx={data.x} cy={data.y}
                  r="3" fill="#6b74ff" stroke="#6b74ff" strokeWidth="2" >
            <title>{data.product}</title>
          </circle>
        )}
          <circle id="circle2" cx="234" cy="50"
                  r="3" fill="#661008" stroke="#661008" strokeWidth="2"  onMouseOver={this.setAlert}>


          </circle>
        {this.bindText()}



      </svg>

    </div>





  }
});
export default chartDemo3;
