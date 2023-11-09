import React from 'react'
import { Box } from '@chakra-ui/react'

interface IPlateProps {
    children: React.ReactNode
}

const Plate: React.FC<IPlateProps> = ({ children }) => {
    return (
        <Box borderRadius={16} bg="white" padding={5} width="100%">
            {children}
        </Box>
    )
}

export default Plate
