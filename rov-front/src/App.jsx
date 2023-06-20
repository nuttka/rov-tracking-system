import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Main from './pages/main/main';
import About from './pages/about/about';
import AsnDetails from './pages/asn_details/details';
import AsnVpIpDetails from './pages/asn_vpip_details/details';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />
    },
    {
        path: 'details/:asn',
        element: <AsnDetails />
    },
    {
        path: 'details/:asn/:vpip',
        element: <AsnVpIpDetails />
    },
    {
        path: 'about',
        element: <About />
    }
])

const App = () => {
    return (
        <RouterProvider router = {router} />
    )
}

export default App;