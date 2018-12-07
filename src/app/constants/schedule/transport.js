module.exports = {
    title: 'TRANSPORT SCHEDULE',
    description: 'This table is used to manage transporter schedule. (CRUD)',
    table:{
        title : 'Transport Schedules',
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
                name: 'price',
                label: 'Price',
                type: 'number',
                initialValue: 100000,
                width: 'auto',
                hidden: false
            }, {
                name: 'transporter_refs',
                label: 'Transporter Quantity',
                type: 'number',
                initialValue: 0,
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