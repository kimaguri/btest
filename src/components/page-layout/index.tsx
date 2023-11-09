import React from 'react'
import { CiBeerMugFull } from 'react-icons/ci'

import { PageLayoutWrapper } from './style.js'
import MenuBar from './components/menu-bar'
import MenuBarItem from './components/menu-bar/menu-bar-item'
import Plate from '../plate'
import { Footer } from './components/footer'
import { useNavigate } from 'react-router-dom'

const menuMeta = [
    {
        key: 'main',
        title: 'Main',
        icon: CiBeerMugFull,
        route: '/'
    },
    {
        key: 'table',
        title: 'Table',
        icon: CiBeerMugFull,
        route: '/table'
    },
    {
        key: 'settings',
        title: 'Settings',
        icon: CiBeerMugFull,
        route: '#'
    }
]

interface IPageLayout {
    children: React.ReactNode
}

export const PageLayout: React.FC<IPageLayout> = ({ children }) => {
    const navigate = useNavigate()

    return (
        <PageLayoutWrapper
            bg={'#f5f5f7'}
            height="100vh"
            width="100vw"
            direction="column"
            spacing={5}
        >
            <MenuBar>
                {menuMeta.map((item) => (
                    <MenuBarItem
                        key={item?.key}
                        title={item.title}
                        icon={item.icon}
                        onClick={() => navigate(item.route)}
                    />
                ))}
            </MenuBar>
            <Plate>{children}</Plate>
            <Footer />
        </PageLayoutWrapper>
    )
}
