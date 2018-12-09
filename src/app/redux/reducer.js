import { reducer as form } from 'redux-form/immutable';
import { combineReducers } from 'redux-immutablejs';
import { routerReducer as router } from 'react-router-redux';

import ui from './modules/ui';
import initval from './modules/initForm';
import calendar from './modules/calendar';
import routeTable from './modules/routeTable';
import transporterTable from './modules/transporterTable';
import driverTable from './modules/driverTable';
import assistantTable from './modules/assistantTable';
import clientTable from './modules/clientTable';
import tscheduleTable from './modules/tscheduleTable';
import wscheduleTable from './modules/wscheduleTable';
import ticketTable from './modules/ticketTable';
import userInfo from './modules/userInfo';

import * as branchName from 'ba-utils/reducer/branch';

function branchReducer(reducerFunction, reducerName) {
  return (state, action) => {
    const { branch } = action;
    const isInitializationCall = state === undefined;
    if (branch !== reducerName && !isInitializationCall) {
      return state;
    }
    return reducerFunction(state, action);
  };
}

export default function createReducer() {
  return combineReducers({
    form,
    router,
    ui,
    initval,
    calendar,
    routeTable: branchReducer(routeTable, branchName.ROUTE),
    transporterTable: branchReducer(transporterTable, branchName.TRANSPORTER),
    driverTable: branchReducer(driverTable, branchName.DRIVER),
    assistantTable: branchReducer(assistantTable, branchName.ASSISTANT),
    clientTable: branchReducer(clientTable, branchName.CLIENT),
    tscheduleTable: branchReducer(tscheduleTable, branchName.T_SCHEDULE),
    wscheduleTable: branchReducer(wscheduleTable, branchName.W_SCHEDULE),
    ticketTable: branchReducer(ticketTable, branchName.TICKET),
    userInfo: branchReducer(userInfo, branchName.USER_INFO)
  });
};
