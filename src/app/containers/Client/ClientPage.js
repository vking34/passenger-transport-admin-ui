import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from 'ba-utils/styles';
import pageTemplate from 'ba-utils/template/pageTemplate';

import { ClientTable } from '../../components';
import clientConst from 'ba-utils/client/client';

class ClientPage extends Component {

    render(){
        const { classes } = this.props;
        return (
            <div>
                {pageTemplate(ClientTable, clientConst, classes)}
            </div>
        );
    }
}

ClientPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(ClientPage);