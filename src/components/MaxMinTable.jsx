import React from 'react'
import { Table } from '@mantine/core';
import  processCropsData  from '../utils/datProcessing';

const { maxMinProductionByYear } = processCropsData();

const MaxMinTable = () => {
  const rows = maxMinProductionByYear.map((element) => (
    <Table.Tr key={element.year}>
      <Table.Td>{element.year}</Table.Td>
      <Table.Td>{element.maxCrop}</Table.Td>
      <Table.Td>{element.minCrop}</Table.Td>
    </Table.Tr>
  ));
  

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Year</Table.Th>
          <Table.Th>maxCrop</Table.Th>
          <Table.Th>minCrop</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}

export default MaxMinTable
