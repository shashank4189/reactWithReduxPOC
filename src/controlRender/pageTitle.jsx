import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import globalStyles from '../styles';
import lodash from 'lodash';

const PageTitle = (props)=>{
    const  {title,navigation} =props;
    return (
        <div>
            <span style={globalStyles.navigation}>{navigation}</span>

            <Paper style={globalStyles.paper}>
                <h3 style={globalStyles.title}>{title}</h3>

                <Divider/>
                {props.children}

                <div style={globalStyles.clear}/>

            </Paper>
        </div>
    );
};

PageTitle.propTypes = {
    title: PropTypes.string,
    navigation: PropTypes.string,
    children: PropTypes.element
};

export default PageTitle;


