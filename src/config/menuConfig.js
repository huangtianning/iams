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
        title: 'Device',
        key: '/admin/device',
        icon:"thunderbolt",
        children: [
            {
                title: 'Sensor',
                key: '/admin/sensor',
                icon:"wifi"
            },
            {
                title: 'Relay',
                key: '/admin/relay',
                icon:"cluster"
            }
        ]
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
];

export default menuList;