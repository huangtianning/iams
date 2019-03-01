const menuList = [
    {
        title: 'Home',
        key: '/admin/home',
        icon:"home"
    },
    {
        title: 'Base',
        key: '/admin/base',
        icon:"shop"
    },
    {
        title: 'Leaflet',
        key: '/admin/leaflet',
        icon:"environment"
    },
    {
        title: 'Users',
        key: '/admin/users',
        icon:"user"
    },
    {
        title: 'Nothing',
        key: '/admin/nothing',
        icon:"thunderbolt",
        children: [
            {
                title: 'option 1',
                key: '/admin/option1',
                icon:"wifi"
            },
            {
                title: 'option 2',
                key: '/admin/option2',
                icon:"cluster"
            }
        ]
    },
];

export default menuList;