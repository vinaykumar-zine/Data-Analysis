import React from 'react'
import { Table } from '@mantine/core';
import  processCropsData  from '../utils/datProcessing';


const { avgYieldAndAreaByCrop} = processCropsData();

// console.log(avgYieldAndAreaByCrop);



const AvgTable = () => {
  const rows = avgYieldAndAreaByCrop.map((element) => (
    <Table.Tr key={element.crop}>
      <Table.Td>{element.crop}</Table.Td>
      <Table.Td>{element.avgYield}</Table.Td>
      <Table.Td>{element.avgArea}</Table.Td>
    </Table.Tr>
  ));
  

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Crop name</Table.Th>
          <Table.Th>avgYield</Table.Th>
          <Table.Th>avgArea</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}

export default AvgTable