import React, { useState } from 'react'
import { IconButton, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

interface IDataRowObject {
    [key: string]: string
}

interface IDataRow {
    data: { [key: string]: IDataRowObject }
    kids?: { [key: string]: { records: IDataRow[] } }
}

interface ITableRowProps {
    data: IDataRow
    level?: number
}

export const TableRow: React.FC<ITableRowProps> = ({ data, level = 0 }) => {
    const [isOpen, setIsOpen] = useState(false)

    const hasKids = data.kids && Object.keys(data.kids).length > 0

    const toggleOpen = () => setIsOpen(!isOpen)

    return (
        <>
            <Tr>
                {hasKids ? (
                    <Td>
                        <IconButton
                            icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                            onClick={toggleOpen}
                            size="sm"
                            aria-label="1"
                        />
                    </Td>
                ) : (
                    <div />
                )}
                {Object.values(data.data).map((value, index) => (
                    <Td key={index} paddingLeft={`${level * 4}px`}>
                        {value}
                    </Td>
                ))}
            </Tr>
            {hasKids && isOpen && (
                <Tr>
                    <Td colSpan={Object.keys(data.data).length + 1}>
                        {Object.entries(data?.kids).map(([key, value], index) => (
                            <Table key={index} size="sm">
                                <Thead>
                                    <Tr>
                                        {Object.keys(value.records[0].data).map((header, index) => (
                                            <Th key={index}>{header}</Th>
                                        ))}
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {value.records.map((record, index) => (
                                        <TableRow key={index} data={record} level={level + 1} />
                                    ))}
                                </Tbody>
                            </Table>
                        ))}
                    </Td>
                </Tr>
            )}
        </>
    )
}
