module.exports = {
    title: 'ROUTE',
    description: 'This table is used to manage routes. (CRUD)',
    table:{
        title : 'Routes',
        columns : [
            {
                name: 'id',
                label: 'ID',
                type: 'text',
                initialValue: '',
                hidden: false
            }, {
                name: 'departure',
                label: 'Departure',
                type: 'text',
                initialValue: '',
                width: 'auto',
                hidden: false
            },
            {
                name: 'destination',
                label: 'Destination',
                type: 'text',
                initialValue: '',
                width: 'auto',
                hidden: false
            }, {
                name: 'stations',
                label: 'Stations',
                type: 'number',
                initialValue: 2,
                width: 'auto',
                hidden: false
            }, {
                name: 'active',
                label: 'Active?',
                type: 'toggle',
                initialValue: true,
                width: '100',
                hidden: false
            }, {
                name: 'action',
                label: 'Action',
                type: 'static',
                initialValue: '',
                hidden: false
            },
          ]
    }
}