module.exports = {
    title: 'TICKET',
    description: 'This table is used to manage tickets. (CRUD)',
    table:{
        title : 'Tickets',
        columns : [
            {
                name: 'id',
                label: 'ID',
                type: 'text',
                initialValue: '',
                width: 'auto',
                hidden: true
            },
            {
                name: 'transporter',
                label: 'Transporter ID',
                type: 'text',
                initialValue: '',
                width: 'auto',
                hidden: false
            },
            {
                name: 'date_created',
                label: 'Created Date',
                type: 'text',
                initialValue: '',
                width: 'auto',
                hidden: false
            },
            {
                name: 'phone_number',
                label: 'Phone Number',
                type: 'text',
                initialValue: '',
                width: 'auto',
                hidden: false
            },
            {
                name: 'reservation_date',
                label: 'Reservation Date',
                type: 'text',
                initialValue: '',
                width: 'auto',
                hidden: false
            },
            {
                name: 'ticket_quantity',
                label: 'Quantity',
                type: 'number',
                initialValue: 1,
                width: '80',
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
                name: 'route',
                label: 'Route',
                type: 'text',
                initialValue: '',
                width: 'auto',
                hidden: true
            },
            {
                name: 'schedule',
                label: 'Schedule',
                type: 'text',
                initialValue: '',
                width: 'auto',
                hidden: true
            },
            {
                name: 'age',
                label: 'Age',
                type: 'number',
                initialValue: 0,
                width: 'auto',
                hidden: true
            },
            {
                name: 'gender',
                label: 'Gender',
                type: 'number',
                initialValue: 0,
                width: 'auto',
                hidden: true
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