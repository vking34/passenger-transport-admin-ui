module.exports = {
    title: 'WORK SCHEDULE',
    description: 'This table is used to manage work schedule. (CRUD)',
    table:{
        title : 'WORK Schedules',
        columns : [
            {
                name: 'id',
                label: 'ID',
                type: 'text',
                initialValue: '',
                width: 'auto',
                hidden: false
            },
            {
                name: 'starting_time',
                label: 'Starting Time',
                type: 'text',
                initialValue: '',
                width: 'auto',
                hidden: false
            },
            {
                name: 'ending_time',
                label: 'Ending Time',
                type: 'text',
                initialValue: '',
                width: 'auto',
                hidden: false
            },
            {
                name: 'transporter_ref',
                label: 'Transporter ID',
                type: 'text',
                initialValue: '',
                width: 'auto',
                hidden: false
            },
            {
                name: 'action',
                label: 'Action',
                type: 'static',
                initialValue: '',
                hidden: false
            }
          ]
    }
}