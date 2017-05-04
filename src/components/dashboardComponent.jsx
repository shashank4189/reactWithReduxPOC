
import React , {Component,PropTypes} from 'react';
import {cyan600, pink600, purple600, orange600} from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/face';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import AnalyticBox  from  './dashboardComponents/analyticsBox.jsx';
import NewOrders  from  './dashboardComponents/newOrders.jsx';
import MonthlySales  from  './dashboardComponents/monthlySales.jsx';
import RecentProducts  from  './dashboardComponents/recentlyProducts.jsx';
import BrowserUsage  from  './dashboardComponents/BrowserUsage.jsx';
import dummyData  from  '../data/dummyData.js';

class dashboard extends Component {
  render(){
    return(
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
            <AnalyticBox Icon={ShoppingCart}
                         color={pink600}
                         title="Total Profit"
                         value="1500k"
            />

          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
            <AnalyticBox Icon={ThumbUp}
                     color={cyan600}
                     title="Likes"
                     value="4231"
            />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
            <AnalyticBox Icon={Assessment}
                     color={purple600}
                     title="Sales"
                     value="460"
            />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
            <AnalyticBox Icon={Face}
                     color={orange600}
                     title="New Members"
                     value="248"
            />
          </div>
        </div>

        <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
          <NewOrders data={dummyData.dashBoardPage.newOrders}/>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15">
          <MonthlySales data={dummyData.dashBoardPage.monthlySales}/>
        </div>
      </div>


        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
            <RecentProducts data={dummyData.dashBoardPage.recentProducts}/>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
            <BrowserUsage data={dummyData.dashBoardPage.browserUsage}/>
          </div>
          <a href="http://localhost:8080/" target="_blank">click here</a>
        </div>
      </div>
    )
  }
}

export default dashboard;