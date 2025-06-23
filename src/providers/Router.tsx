import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';

import Home from '../Home';
import TicTacToe from '../component/TicTacToe';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
    },
    {
        path: '/tic-tac-toe',
        element: <TicTacToe></TicTacToe>,
    },
]);

function Router() {
    return <RouterProvider router={router}></RouterProvider>
};

export default Router;