import { App, Dashboard, Outer } from './../components';
// Dashboard
import DashboardV1 from './Dashboard/Dashboard';
// import DashboardV2 from './Dashboard/DashboardV2';
// Layouts
// import Grid from './Layouts/Grid';
// import AppLayout from './Layouts/AppLayout';
// import Responsive from './Layouts/Responsive';
// Themes
import Themes from './Themes';
// Tables
// import SimpleTable from './Tables/BasicTable';
// import AdvancedTable from './Tables/AdvancedTable';
// import TreeTable from './Tables/TreeTable';
import CrudTable from './Tables/CrudTable';
// import TablePlayground from './Tables/TablePlayground';
// // Forms
// import ReduxForm from './Forms/ReduxForm';
// import DateTimePicker from './Forms/DateTimePicker';
// import CheckboxRadio from './Forms/CheckboxRadio';
// import Switches from './Forms/Switches';
// import Selectbox from './Forms/Selectbox';
// import Rating from './Forms/Rating';
// import SliderRange from './Forms/SliderRange';
// import Buttons from './Forms/Buttons';
// import Textbox from './Forms/Textbox';
// import Autocomplete from './Forms/Autocomplete';
// import TextEditor from './Forms/TextEditor';
// import Upload from './Forms/Upload';
// // UI Components
// import Badges from './UiElements/Badges';
// import Avatars from './UiElements/Avatars';
// import Accordion from './UiElements/Accordion';
// import List from './UiElements/List';
// import PopoverTooltip from './UiElements/PopoverTooltip';
// import Notification from './UiElements/Notification';
// import Typography from './UiElements/Typography';
// import Tabs from './UiElements/Tabs';
// import Cards from './UiElements/Cards';
// import ImageGrid from './UiElements/ImageGrid';
// import Progress from './UiElements/Progress';
// import DialogModal from './UiElements/DialogModal';
// import Steppers from './UiElements/Steppers';
// import DrawerMenu from './UiElements/DrawerMenu';
// import Paginations from './UiElements/Paginations';
// import Breadcrumbs from './UiElements/Breadcrumbs';
// import SliderCarousel from './UiElements/SliderCarousel';
// import Tags from './UiElements/Tags';
// import Dividers from './UiElements/Dividers';
// // Chart
// import LineCharts from './Charts/LineCharts';
// import BarCharts from './Charts/BarCharts';
// import AreaCharts from './Charts/AreaCharts';
// import PieCharts from './Charts/PieCharts';
// import RadarCharts from './Charts/RadarCharts';
// import ScatterCharts from './Charts/ScatterCharts';
// import CompossedCharts from './Charts/CompossedCharts';
// import ResponsiveCharts from './Charts/ResponsiveCharts';
// // Pages
// // import Login from './Pages/Users/Login';
// // import Register from './Pages/Users/Register';
// import Profile from './Pages/UserProfile';
// import SocialMedia from './Pages/SocialMedia';
// import BlankPage from './Pages/BlankPage';
// import Ecommerce from './Pages/Ecommerce';
// import Contact from './Pages/Contact';
// // import ResetPassword from './Pages/Users/ResetPassword';
// // import LockScreen from './Pages/Users/LockScreen';
// import Chat from './Pages/Chat';
// import Email from './Pages/Email';
// import Photos from './Pages/Photos';
// import Calendar from './Pages/Calendar';
// // import LoginDedicated from './Pages/Standalone/LoginDedicated';
// // Other
// import NotFound from './NotFound/NotFound';
// import NotFoundDedicated from './Pages/Standalone/NotFoundDedicated';
// import Error from './Pages/Error';
// // import Maintenance from './Pages/Maintenance';
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
            component: withTracker(CrudTable),
          },
          {
            path: '/admin/transporter',
            component: withTracker(CrudTable),
          },
          {
            path: '/admin/employee',
            component: withTracker(CrudTable),
          },
          {
            path: '/admin/employee/driver',
            component: withTracker(CrudTable),
          },
          {
            path: '/admin/employee/assistant',
            component: withTracker(CrudTable),
          },
          {
            path: '/admin/client',
            component: withTracker(CrudTable),
          },
          {
            path: '/admin/transport-schedule',
            component: withTracker(CrudTable),
          },
          {
            path: '/admin/work-schedule',
            component: withTracker(CrudTable),
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
