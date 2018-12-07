import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from 'ba-utils/styles';
import pageTemplate from 'ba-utils/template/pageTemplate';

import { TicketTable } from '../../components';
import ticketConst from 'ba-utils/ticket/ticket';

class TicketPage extends Component {

    render(){
        const { classes } = this.props;
        return (
            <div>
                {pageTemplate(TicketTable, ticketConst, classes)}
            </div>
        );
    }
}

TicketPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(TicketPage);