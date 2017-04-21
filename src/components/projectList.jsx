import React,{ Component } from 'react';
import {Link} from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {pink500, grey200, grey500,blue700} from 'material-ui/styles/colors';
import PageTitle from '../controlRender/pageTitle.jsx';
import RenderList from '../controlRender/renderList.jsx';
// import Pagination from '../common/renderPagination.jsx';
// import ProjectSort from './projectSortOptions.jsx';
import moment from 'moment';
import {searchProject,searchProjectSuccess,searchProjectFailure} from '../actions/projectAction.jsx';
/*
*/

import RenderSearch from '../controlRender/renderSearch.jsx';
const styles = {
    floatingActionButton: {
        margin: 0,
        top: 'auto',
        right: 50,
        bottom: 80,
        left: 'auto',
        position: 'fixed',
    },
    editButton: {
        fill: grey500
    },
    columns: {
        id: {
            width: '10%'
        },
        name: {
            width: '40%'
        },
        price: {
            width: '20%'
        },
        category: {
            width: '20%'
        },
        edit: {
            width: '10%'
        }
    }
};

const searchProjects=(values,dispatch)=>{
    return dispatch(searchProject(values)).
    then((response)=>{
        !response.error ? dispatch(searchProjectSuccess(response.value.data.objdata)):dispatch(searchProjectFailure(response.payload.data))
    })
}

export default class projectList extends Component{

    constructor(props){
        super(props);
        this.renderSource=this.renderSource.bind(this);
    }

    makeProjectData(project) {
        var arr = []
        project.forEach(function (item) {
            var obj = {
                id: item._id,
                title: item.ProjectName,
                startdate:moment(item.StartDate).format('MMM D , YYYY'),
                enddate:item.EndDate,
                description: item.Description,
                type:item.ProjectType
            }
            arr.push(obj);
        });
        return arr;
    }


    searchOption=[
        {
            type:'text',
            label:'Project Title',
            name:'ProjectName'
        },
        {
            type:'selectField',
            label:'Project Type',
            name:'ProjectType',
            source:this.renderSource
        }
    ];

    componentWillMount(){
        this.props.fetchProjectList();
    }

    renderSource(){
        return [{_id:1,Title:'Internal'},{_id:2,Title:'External'}]
    }

    render(){
        const {projects,error,loading}     = this.props.projectList;
        return(
            <PageTitle title="Project List">
            <div>
                <Link to="/newproject" >
                    <FloatingActionButton style={styles.floatingActionButton}  iconStyle={{backgroundColor: blue700}}>
                        <ContentAdd />
                    </FloatingActionButton>
                </Link>
                <div className="row">
                <div className="col-xs-12 col-sm-5 col-md-5 col-lg-3 m-b-15 ">
                    <div className="row">
                        <div className="col-xs-12 col-sm-5 col-md-5 col-lg-12 m-b-15 ">
                            <RenderSearch searchOption={this.searchOption} onSearch={searchProjects} />
                        </div>
                    </div>
                   {/* <div className="row-fluid">
                        <ProjectSort />
                    </div>*/}
                </div>
                <div className="col-xs-12 col-sm-10 col-md-10 col-lg-9 m-b-15 ">
                  <div className="row">
                <RenderList listTitle="Project List" data={this.makeProjectData(projects)} />
                  </div>
                </div>
            </div>
            </div>
            </PageTitle>
        )
    }
}