import React from "react";
import {Box, Icon, Text} from '@chakra-ui/react'

import {MenuBarItemWrapper} from './style.ts'

interface IMenuBarItem {
    title: string
    icon: React.Node,
    onClick: () => void
}

const MenuBarItem = ({title, icon, onClick}: IMenuBarItem) => {
    return (
        <Box cursor="pointer" onClick={onClick}>
            <MenuBarItemWrapper>
                <Icon as={icon} boxSize={25} color={'#595858'}/>
            </MenuBarItemWrapper>
            <Text fontSize={10} fontWeight={600}>
                {title}
            </Text>
        </Box>
    )
}

export default MenuBarItem
