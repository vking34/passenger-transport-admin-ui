module.exports = {
    title: 'TRANSPORTER',
    description: 'This table is used to manage transporter. (CRUD)',
    root: 'TransporterPage-root-2001',
    table:{
        title : 'Transporters',
        columns : [
            {
                name: 'id',
                label: 'ID',
                type: 'text',
                initialValue: '',
                width: 'auto',
                hidden: false
            }, {
                name: 'license_plate',
                label: 'License Plate',
                type: 'text',
                initialValue: '',
                width: 'auto',
                hidden: false
            },
            {
                name: 'seaters',
                label: 'Seaters',
                type: 'number',
                initialValue: 0,
                width: '100',
                hidden: false
            },
            {
                name: 'model',
                label: 'Model',
                type: 'text',
                initialValue: '',
                width: 'auto',
                hidden: false
            }, {
                name: 'branch',
                label: 'Branch',
                type: 'text',
                initialValue: '',
                width: 'auto',
                hidden: false
            }, {
                name: 'status',
                label: 'Status',
                type: 'number',
                initialValue: 1,
                width: '100',
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