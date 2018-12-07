import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from 'ba-utils/styles';
import pageTemplate from 'ba-utils/template/pageTemplate';

import { WScheduleTable } from '../../components';
import wscheduleConst from 'ba-utils/schedule/work';

class WSchedulePage extends Component {

    render(){
        const { classes } = this.props;
        return (
            <div>
                {pageTemplate(WScheduleTable, wscheduleConst, classes)}
            </div>
        );
    }
}

WSchedulePage.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(WSchedulePage);