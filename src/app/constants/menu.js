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
    icon: 'directions',
    link: '/admin/route'
  },
  {
    key: 'transporter',
    name: 'Transporter',
    icon: 'directions_bus',
    link: '/admin/transporter'
  },
  {
    key: 'employee',
    name: 'Employee',
    icon: 'perm_contact_cal',
    child: [
      {
        key: 'driver',
        name: 'Driver',
        link: '/admin/employee/driver',
        icon: 'directions_car'
      },
      {
        key: 'assistant',
        name: 'Assistant',
        link: '/admin/employee/assistant',
        icon: 'person_add'
      }
    ]
  },
  {
    key: 'client',
    name: 'Client',
    icon: 'people',
    link: '/admin/client'
  },
  {
    key: 'ticket',
    name: 'Ticket',
    icon: 'assignment',
    link: '/admin/ticket'
  },
  {
    key: 'tschedule',
    name: 'Transport Schedule',
    icon: 'date_range',
    link: '/admin/transport-schedule'
  },
  {
    key: 'wschedule',
    name: 'Work Schedule',
    icon: 'event',
    link: '/admin/work-schedule'
  },
  {
    key: 'themes',
    name: 'Themes Setting',
    icon: 'palette',
    link: '/admin/settings/themes'
  },
];
