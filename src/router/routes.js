import RootPage from "../pages/RootPage";
import LoginForm from '../components/LoginForm/LoginForm';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import Dashboard from "../pages/Dashboard/Dashboard";


export const routeConfig = [
    {
        path: '/',
        component: RootPage,
        meta: {
            requiredAuth: false,
            title: 'Main',
        },
    },
    {
        path: '/login',
        component: LoginForm,
        meta: {
            requiredAuth: false,
            title: 'Login',
        },
    },
    {
        path: '/registration',
        component: RegistrationForm,
        meta: {
            requiredAuth: false,
            title: 'Registration',
        },
    },
    {
        path: '/dashboard',
        component: Dashboard,
        meta: {
            requiredAuth: true,
            title: 'Dashboard',
        },
        children: [
            {
                path: '/vitaltasks',
                // component: 
            }
        ]
    },
];
