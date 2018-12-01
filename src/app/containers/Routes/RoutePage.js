import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import routeConst from 'ba-utils/route';
import helmetConst from 'ba-utils/helmet';
import { PapperBlock } from '../../components';
import { RouteTable } from '../../components'

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class RoutePage extends Component {
  render() {
    const title = brand.name + ' - Table';
    const description = brand.desc;
    const { classes } = this.props;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name={helmetConst.name} content={description} />
          <meta property={helmetConst.og_title} content={title} />
          <meta property={helmetConst.og_desc} content={description} />
          <meta property={helmetConst.tw_title} content={title} />
          <meta property={helmetConst.tw_desc} content={description} />
        </Helmet>
        <PapperBlock title={routeConst.title} desc={routeConst.description}>
          <div>
            <Paper className={classes.root}>
              <RouteTable />
            </Paper>
          
          </div>
        </PapperBlock>
      </div>
    );
  }
}

RoutePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RoutePage);
