import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from 'ba-utils/styles';
import pageTemplate from 'ba-utils/template/pageTemplate';

import { TScheduleTable } from '../../components';
import tscheduleConst from 'ba-utils/schedule/transport';

class TSchedulePage extends Component {

    render(){
        const { classes } = this.props;
        return (
            <div>
                {pageTemplate(TScheduleTable, tscheduleConst, classes)}
            </div>
        );
    }
}

TSchedulePage.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(TSchedulePage);