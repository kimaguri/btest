import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'

export const MenuBarItemWrapper = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    border-radius: 5px;
    background-color: white;
    padding: 8px;
    width: 45px;
    height: 45px;
    margin-bottom: 12px;

    &:hover {
        border-color: gray;
        //transition: border-;
    }
`
