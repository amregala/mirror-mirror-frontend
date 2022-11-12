import React from 'react'
import HowToRegIcon from '@mui/icons-material/HowToReg';

import LoginIcon from '@mui/icons-material/Login';

import AddCircleIcon from '@mui/icons-material/AddCircle';

import InfoIcon from '@mui/icons-material/Info';

export const SidebarData = [
    {
        title: 'Sign Up',
        icon: <HowToRegIcon />,
        link: '/signup'
    },
    {
        title: 'Sign Up',
        icon: <AddCircleIcon />,
        link: '/signup'
    },
    {
        title: 'Login',
        icon: <LoginIcon />,
        link: '/login'
    },
    {
        title: 'About',
        icon: <InfoIcon />,
        link: '/about'
    }
]
