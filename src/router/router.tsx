import { createBrowserRouter } from 'react-router-dom'
import Layout from '../pages/Loyout'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import Auth from '../pages/Auth'
import ProtectedRote from '../components/ProtectedRote'
import PhoneList from '../pages/PhonesList'
import AddNewPhone from '../pages/AddNewPhone'
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'addNewPhone',
                element: <ProtectedRote><AddNewPhone /></ProtectedRote>
            },
            {
                path: 'phoneList',
                element: <ProtectedRote><PhoneList /></ProtectedRote>
            },
            {
                path: 'auth',
                element: <Auth />
            }
        ]
    }
])