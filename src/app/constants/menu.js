module.exports = [
  {
    key: 'dashboard',
    name: 'Dashboard',
    icon: 'dashboard',
    link: '/admin'
  },
  {
    key: 'route',
    name: 'Route',
    icon: 'view_column',
    link: '/admin/route'
  },
  {
    key: 'transporter',
    name: 'Transporter',
    icon: 'palette',
    link: '/admin/transporter'
  },
  {
    key: 'employee',
    name: 'Employee',
    icon: 'grid_on',
    child: [
      {
        key: 'driver',
        name: 'Driver',
        link: '/admin/employee/driver'
      },
      {
        key: 'assistant',
        name: 'Assistant',
        link: '/admin/employee/assistant'
      }
    ]
  },
  {
    key: 'client',
    name: 'Client',
    icon: 'border_color',
    link: '/admin/client'
  },
  {
    key: 'ticket',
    name: 'Ticket',
    icon: 'border_color',
    link: '/admin/ticket'
  },
  {
    key: 'tschedule',
    name: 'Transport Schedule',
    icon: 'flag',
    link: '/admin/transport-schedule'
  },
  {
    key: 'wschedule',
    name: 'Work Schedule',
    icon: 'insert_chart',
    link: '/admin/work-schedule'
  },
  {
    key: 'themes',
    name: 'Themes Setting',
    icon: 'palette',
    link: '/admin/settings/themes'
  },
];
