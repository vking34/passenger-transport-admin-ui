import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import routePage from 'ba-utils/route';
import { PapperBlock } from './../../components';
import { CrudTableDemo } from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class CrudTablePage extends Component {
  render() {
    const title = brand.name + ' - Table';
    const description = brand.desc;
    const { classes } = this.props;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <PapperBlock title={routePage.title} desc={routePage.description}>
          <div>
            <Paper className={classes.root}>
              <CrudTableDemo />
            </Paper>
          
          </div>
        </PapperBlock>
      </div>
    );
  }
}

CrudTablePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CrudTablePage);
