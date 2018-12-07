import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  fetchAction,
  addAction,
  removeAction,
  updateAction,
  editAction,
  saveAction,
  closeNotifAction,
} from '../../actions/TransporterActions';
import { styles } from 'ba-utils/styles';
import TablePagination from '@material-ui/core/TablePagination';
import { CrudTable, Notification } from '../';

import transporterConst from '../../constants/transporter';

// Reducer Branch
const branch = 'transporterTable';

class TransporterTable extends Component {
  handleChangePage = (event, page) => {
    
  };

  handleChangeRowsPerPage = event => {
  //  show(event);
  };

  render() {
    const {
      classes,
      fetchData,
      addEmptyRow,
      content,
      removeRow,
      updateRow,
      editRow,
      finishEditRow,
      closeNotif,
      messageNotif,
      paging
    } = this.props;
    return (
      <div>
        <Notification close={() => closeNotif(branch)} message={messageNotif} />
        <Paper className={classes.root}>
          <CrudTable
            dataInit={content}
            anchor={transporterConst.table.columns}
            title={transporterConst.table.title}
            dataTable={content}
            fetchData={fetchData}
            addEmptyRow={addEmptyRow}
            removeRow={removeRow}
            updateRow={updateRow}
            editRow={editRow}
            finishEditRow={finishEditRow}
            branch={branch}
          />
          <TablePagination
          component="div"
          count={paging.get('total_elements')}
          rowsPerPage={paging.get('size') > paging.get('total_elements') ? paging.get('total_elements') : paging.get('size')}
          page={paging.get('number')}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    );
  }
}

TransporterTable.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchData: PropTypes.func.isRequired,
  content: PropTypes.object.isRequired,
  paging: PropTypes.object.isRequired,
  addEmptyRow: PropTypes.func.isRequired,
  removeRow: PropTypes.func.isRequired,
  updateRow: PropTypes.func.isRequired,
  editRow: PropTypes.func.isRequired,
  finishEditRow: PropTypes.func.isRequired,
  closeNotif: PropTypes.func.isRequired,
  messageNotif: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  force: state, // force state from reducer
  content: state.getIn([branch, 'content']),
  messageNotif: state.getIn([branch, 'notifMsg']),
  paging: state.getIn([branch, 'paging'])
});

const mapDispatchToProps = dispatch => ({
  fetchData: bindActionCreators(fetchAction, dispatch),
  addEmptyRow: bindActionCreators(addAction, dispatch),
  removeRow: bindActionCreators(removeAction, dispatch),
  updateRow: bindActionCreators(updateAction, dispatch),
  editRow: bindActionCreators(editAction, dispatch),
  finishEditRow: bindActionCreators(saveAction, dispatch),
  closeNotif: bindActionCreators(closeNotifAction, dispatch)
});

const TransporterTableMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(TransporterTable);

export default withStyles(styles)(TransporterTableMapped);
