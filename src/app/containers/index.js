import { App, Dashboard, Outer } from './../components';
// Dashboard
import DashboardV1 from './Dashboard/Dashboard';

// Route
import RoutePage from './Routes/RoutePage';

// Transporter
import TransporterPage from './Transporter/TransporterPage';

// Driver
import DriverPage from './Driver/DriverPage';

// Assistant
import AssistantPage from './Assistant/AssistantPage'

// Client
import ClientPage from './Client/ClientPage';

// Schedule
  // Transport
import TSchedulePage from './Schedule/TSchedulePage';
  // Work
import WSchedulePage from './Schedule/WSchedulePage';

// Ticket
import TicketPage from './Ticket/TicketPage';

// Themes
import Themes from './Themes';

// Other
import NotFound from './NotFound/NotFound';
import NotFoundDedicated from './Pages/Standalone/NotFoundDedicated';
// import Error from './Pages/Error';
// import Maintenance from './Pages/Maintenance';
// import Parent from './Parent';

import withTracker from './withTracker';

export default (store) => { // eslint-disable-line
  // we can get an access to store
  return [{
    component: withTracker(App),
    routes: [
      {
        component: withTracker(Dashboard),
        path: '/admin',
        routes: [
          {
            path: '/admin',
            component: withTracker(DashboardV1),
            exact: true,
          },
          {
            path: '/admin/route',
            component: withTracker(RoutePage),
          },
          {
            path: '/admin/transporter',
            component: withTracker(TransporterPage),
          },

          {
            path: '/admin/employee/driver',
            component: withTracker(DriverPage),
          },
          {
            path: '/admin/employee/assistant',
            component: withTracker(AssistantPage),
          },
          {
            path: '/admin/client',
            component: withTracker(ClientPage),
          },
          {
            path: '/admin/ticket',
            component: withTracker(TicketPage),
          },
          {
            path: '/admin/transport-schedule',
            component: withTracker(TSchedulePage),
          },
          {
            path: '/admin/work-schedule',
            component: withTracker(WSchedulePage),
          },
          {
            path: '/admin/settings/themes',
            component: withTracker(Themes),
          },
          {
            path: '*',
            component: withTracker(NotFound)
          }
        ]
      },
      {
        path: '*',
        component: withTracker(NotFoundDedicated)
      }
    ]
  }];
};
