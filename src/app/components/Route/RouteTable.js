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
} from '../../actions/CrudTbActions';
import { CrudTable, Notification } from '../';

import routeConst from '../../constants/route';

// Reducer Branch
const branch = 'crudTableDemo';

const styles = ({
  root: {
    flexGrow: 1,
  }
});


const dataApi = [
  {
    id: 'a654',
    departure: 'Giap Bap',
    destination: 'Cam Pha',
    stations: 5,
    active: true
  }, {
    id: 's654',
    departure: 'My Dinh',
    destination: 'Hai Phong',
    stations: 3,
    active: true
  }
];

class CrudTableDemo extends Component {
  render() {
    const {
      classes,
      fetchData,
      addEmptyRow,
      dataTable,
      removeRow,
      updateRow,
      editRow,
      finishEditRow,
      closeNotif,
      messageNotif,
    } = this.props;
    return (
      <div>
        <Notification close={() => closeNotif(branch)} message={messageNotif} />
        <Paper className={classes.root}>
          <CrudTable
            dataInit={dataApi}
            anchor={routeConst.table.columns}
            title={routeConst.table.title}
            dataTable={dataTable}
            fetchData={fetchData}
            addEmptyRow={addEmptyRow}
            removeRow={removeRow}
            updateRow={updateRow}
            editRow={editRow}
            finishEditRow={finishEditRow}
            branch={branch}
          />
        </Paper>
      </div>
    );
  }
}

CrudTableDemo.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchData: PropTypes.func.isRequired,
  dataTable: PropTypes.object.isRequired,
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
  dataTable: state.getIn([branch, 'dataTable']),
  messageNotif: state.getIn([branch, 'notifMsg']),
});

const mapDispatchToProps = dispatch => ({
  fetchData: bindActionCreators(fetchAction, dispatch),
  addEmptyRow: bindActionCreators(addAction, dispatch),
  removeRow: bindActionCreators(removeAction, dispatch),
  updateRow: bindActionCreators(updateAction, dispatch),
  editRow: bindActionCreators(editAction, dispatch),
  finishEditRow: bindActionCreators(saveAction, dispatch),
  closeNotif: bindActionCreators(closeNotifAction, dispatch),
});

const CrudTableMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(CrudTableDemo);

export default withStyles(styles)(CrudTableMapped);
