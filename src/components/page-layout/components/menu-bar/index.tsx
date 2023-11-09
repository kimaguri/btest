import {HStack} from '@chakra-ui/react'

const MenuBar = ({children}) => {
    return (
        <HStack minW={100} spacing={8}>
            {children}
        </HStack>
    )
}

export default MenuBar
