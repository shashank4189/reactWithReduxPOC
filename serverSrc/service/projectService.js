/**
 * Created by Shashank on 2/17/2017.
 */
let mongoose = require('mongoose');
let ProjectType = mongoose.model('ProjectTypes');
let Projects = mongoose.model('Projects');

const getProjectType= ()=>{
    return ProjectType.find();
}

const getProjects = ()=>{
    return Projects.find();
}

const searchProject = (data)=>{
    if(data) {
        return Projects.find();
    }
}

const addProjectType= (projectData)=>{
    if(projectData) {
        let project = new Projects(projectData)
        return project.save();
    }
}


module.exports ={
    getProjectType:getProjectType,
    addProjectType:addProjectType,
    getProjects:getProjects,
    searchProject:searchProject
}
