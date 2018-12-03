import React, { Component } from 'react';
import brand from 'ba-utils/brand';
import helmetConst from 'ba-utils/helmet';
import { PapperBlock } from '../../components';
import Paper from '@material-ui/core/Paper';
import { Helmet } from 'react-helmet';
// import show from 'ba-utils/show';

const pageTemplate = (Table, pageConst, classes ) => {
    const title = brand.name + ' - Table';
    const description = brand.desc;
    return(
        <div>
        <Helmet>
          <title>{title}</title>
          <meta name={helmetConst.name} content={description} />
          <meta property={helmetConst.og_title} content={title} />
          <meta property={helmetConst.og_desc} content={description} />
          <meta property={helmetConst.tw_title} content={title} />
          <meta property={helmetConst.tw_desc} content={description} />
        </Helmet>
        <PapperBlock title={pageConst.title} desc={pageConst.description}>
          <div>
            <Paper className={classes.root}>
              <Table />
            </Paper>
          </div>
        </PapperBlock>
        </div>
    );
}

export default pageTemplate;