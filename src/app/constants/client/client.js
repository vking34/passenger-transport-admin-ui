module.exports = {
    title: 'CLIENT',
    description: 'This table is used to manage clients. (CRUD)',
    table:{
        title : 'Clients',
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
                name: 'full_name',
                label: 'Full name',
                type: 'text',
                initialValue: '',
                width: 'auto',
                hidden: false
            },
            {
                name: 'email',
                label: 'Email',
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