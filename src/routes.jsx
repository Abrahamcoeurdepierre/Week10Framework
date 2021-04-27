import React from 'react';
import Login from './Login';
import Join from './Join';

const routes = [
    {name: 'Join', path:"/Join", exact: true, main: () => <Join/>},
    {name: 'Login', path:"/", exact: true, main: () => <Login/>}
];

export default routes;