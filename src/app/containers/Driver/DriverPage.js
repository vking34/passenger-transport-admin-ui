import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import driverConst from 'ba-utils/employee/driver';
import { styles } from 'ba-utils/styles';
import pageTemplate from 'ba-utils/template/pageTemplate';

import {DriverTable} from '../../components';

class DriverPage extends Component {

    render(){
        const { classes } = this.props;
        return (
            <div>
                {pageTemplate(DriverTable, driverConst, classes)}
            </div>
        );
    }
}

DriverPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(DriverPage);