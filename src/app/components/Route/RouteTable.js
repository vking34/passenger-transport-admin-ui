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
} from '../../actions/RouteActions';
// import {
//   fetchRoutes
// } from '../../actions/routeActions';

import { CrudTable, Notification } from '../';

import routeConst from '../../constants/route';

// Reducer Branch
const branch = 'routeTable';

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

class RouteTable extends Component {

  componentWillMount(){
    // console.log(this.props.paging.get('total_elements'));
  }
  
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
    } = this.props;
    return (
      <div>
        <Notification close={() => closeNotif(branch)} message={messageNotif} />
        <Paper className={classes.root}>
          <CrudTable
            dataInit={content}
            anchor={routeConst.table.columns}
            title={routeConst.table.title}
            dataTable={content}
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

RouteTable.propTypes = {
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

const RouteTableMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteTable);

export default withStyles(styles)(RouteTableMapped);
