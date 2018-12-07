import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import assistantConst from 'ba-utils/employee/assistant';
import { styles } from 'ba-utils/styles';
import pageTemplate from 'ba-utils/template/pageTemplate';

import { AssistantTable } from '../../components';

class AssistantPage extends Component {

    render(){
        const { classes } = this.props;
        return (
            <div>
                {pageTemplate(AssistantTable, assistantConst, classes)}
            </div>
        );
    }
}

AssistantPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(AssistantPage);