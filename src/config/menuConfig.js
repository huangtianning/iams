const menuList = [
    {
        title: '主页',
        key: '/admin/home',
        icon: "home"
    },
    {
        title: '申报中心',
        key: '/admin/apply',
        icon: "shop",
        children: [
            {
                title: '申请表填写',
                key: '/admin/apply_form',
                icon: "wifi"
            },
            {
                title: '申请表检查',
                key: '/admin/apply_check',
                icon: "cluster"
            }
        ]
    },
    {
        title: 'Leaflet',
        key: '/admin/leaflet',
        icon: "environment"
    },
    {
        title: 'Base',
        key: '/admin/base',
        icon: "shop"
    },
    {
        title: 'Users',
        key: '/admin/users',
        icon: "user"
    },
    // {
    //     title: 'Resume',
    //     key: '/admin/resume',
    //     icon:"user"
    // },
    // {
    //     title: 'Nothing',
    //     key: '/admin/nothing',
    //     icon:"thunderbolt",
    //     children: [
    //         {
    //             title: 'option 1',
    //             key: '/admin/option1',
    //             icon:"wifi"
    //         },
    //         {
    //             title: 'option 2',
    //             key: '/admin/option2',
    //             icon:"cluster"
    //         }
    //     ]
    // },
];

export default menuList;