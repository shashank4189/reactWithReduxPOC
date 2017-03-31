import React, {Component, PropTypes}  from  'react';
import Paper from 'material-ui/Paper';
import {white, grey800} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';



class analyticsBox extends Component{
  render(){
    const {Icon,color,title,value} = this.props;
    const styles = {
      content: {
        padding: '5px 10px',
        marginLeft: 90,
        height: 80
      },
      number: {
        display: 'block',
        fontWeight: typography.fontWeightMedium,
        fontSize: 18,
        color: grey800
      },
      text: {
        fontSize: 20,
        fontWeight: typography.fontWeightLight,
        color: grey800
      },
      iconSpan: {
        float: 'left',
        height: 90,
        width: 90,
        textAlign: 'center',
        backgroundColor: color
      },
      icon: {
        height: 48,
        width: 48,
        marginTop: 20,
        maxWidth: '100%'

      }
    };

    return (
      <Paper>
        <span style={styles.iconSpan}>
         <Icon color={white}
                style={styles.icon}
          />
        </span>
        <div style={styles.content}>
          <span style={styles.text}>{title}</span>
          <span style={styles.number}>{value}</span>
        </div>
      </Paper>
    );
  }

}

analyticsBox.propTypes = {
  Icon: PropTypes.any, // eslint-disable-line
  color: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string
}

export default analyticsBox;