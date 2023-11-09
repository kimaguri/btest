import React from 'react'
import { HStack } from '@chakra-ui/react'

interface IMenuBarProps {
    children: React.ReactNode
}

const MenuBar: React.FC<IMenuBarProps> = ({ children }) => {
    return (
        <HStack minW={100} spacing={8}>
            {children}
        </HStack>
    )
}

export default MenuBar
