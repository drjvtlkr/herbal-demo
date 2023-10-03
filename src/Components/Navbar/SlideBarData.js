import React from 'react'

import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text',
  },
  {
    title: 'Plans',
    path: '/plans',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text',
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text',
  },
  {
    title: 'Support',
    path: '/Menu',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text',
  },
  {
    title: 'Login/Signup',
    path: '/',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text',
  },
]
