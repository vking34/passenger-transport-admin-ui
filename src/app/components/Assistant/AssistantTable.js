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
} from '../../actions/AssistantActions';
import { styles } from 'ba-utils/styles';

import { CrudTable, Notification } from '..';
import assistantConst from 'ba-utils/employee/assistant';
import show from 'ba-utils/show';
// Reducer branch
const branch = 'assistantTable';

class AssistantTable extends Component {
  
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
      show(content);
      return (
        <div>
          <Notification close={() => closeNotif(branch)} message={messageNotif} />
          <Paper className={classes.root}>
            <CrudTable
              dataInit={content}
              anchor={assistantConst.table.columns}
              title={assistantConst.table.title}
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
  
  AssistantTable.propTypes = {
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
  
  const AssistantTableMapped = connect(
    mapStateToProps,
    mapDispatchToProps
  )(AssistantTable);
  
  export default withStyles(styles)(AssistantTableMapped);