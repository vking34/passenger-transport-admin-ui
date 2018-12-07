module.exports = {
    title: 'ASSISTANT',
    description: 'This table is used to manage assistants. (CRUD)',
    table:{
        title : 'Assistants',
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
                name: 'citizen_id',
                label: 'Citizen ID',
                type: 'text',
                initialValue: '',
                width: 'auto',
                hidden: false
            }, {
                name: 'full_name',
                label: 'Full name',
                type: 'text',
                initialValue: '',
                width: 'auto',
                hidden: false
            },
            {
                name: 'address',
                label: 'Address',
                type: 'text',
                initialValue: '',
                width: 'auto',
                hidden: false
            }, {
                name: 'active',
                label: 'Active?',
                type: 'toggle',
                initialValue: true,
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