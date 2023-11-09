import { Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react'

import jsonData from '../../stub/data-1.json'
import { TableRow } from './components/table-row'

export const TablePage = () => {
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>{'Actions'}</Th>
                    {Object.keys(jsonData[0].data).map((header, index) => (
                        <Th key={index}>{header}</Th>
                    ))}
                </Tr>
            </Thead>
            <Tbody>
                {jsonData.map((item, index) => (
                    <TableRow key={index} data={item} />
                ))}
            </Tbody>
        </Table>
    )
}
