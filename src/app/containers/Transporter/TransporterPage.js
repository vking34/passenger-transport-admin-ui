import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import transporterConst from 'ba-utils/transporter';
import { styles } from 'ba-utils/styles';
import pageTemplate from 'ba-utils/template/pageTemplate';
// import show from 'ba-utils/show';
import {TransporterTable} from '../../components';

class TransporterPage extends Component {

    render(){
        const { classes } = this.props;
       
        // show(transporterConst);
        return (
            <div>
                {pageTemplate(TransporterTable, transporterConst, classes)}
            </div>
        );
    }
}

TransporterPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(TransporterPage);
