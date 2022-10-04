import React from 'react';
import {StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper';

interface TableRowProps {
  data: Record<string, any>;
}

export const TableRow = ({data}: TableRowProps) => {
  return (
    <DataTable.Row>
      {Object.entries(data).map(([key, value], index: number) => (
        <DataTable.Cell style={styles.cell} key={key + index}>
          {String(value).slice(0, 10)}
        </DataTable.Cell>
      ))}
    </DataTable.Row>
  );
};

const styles = StyleSheet.create({
  cell: {
    padding: 5,
    width: 150,
    heigth: 50,
  },
});
