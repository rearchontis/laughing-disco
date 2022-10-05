import React, {useEffect, useState} from 'react';
import {DataTable} from 'react-native-paper';
import {ScrollView, StyleSheet} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {queryDataFromTable} from './db';
import {TableRow} from './TableRow';
interface TableScreenProps {
  tbl_name: string;
}

export const TableScreen = ({tbl_name}: TableScreenProps) => {
  const [data, setData] = useState<Record<string, unknown>[]>([]);

  useEffect(() => {
    (async () => {
      setData(await queryDataFromTable(tbl_name));
    })();
  }, [tbl_name]);

  console.log(data);

  if (data.length > 0) {
    const headers = Object.keys(data[0]);

    return (
      <ScrollView horizontal>
        <DataTable>
          <DataTable.Header>
            {headers.map((header, index) => (
              <DataTable.Title style={styles.cell} key={String(header) + index}>
                {header}
              </DataTable.Title>
            ))}
          </DataTable.Header>
          <FlashList
            data={data}
            renderItem={({item}) => <TableRow data={item} />}
            estimatedItemSize={data.length}
            estimatedListSize={{
              width: styles.cell.width,
              height: styles.cell.height,
            }}
          />
        </DataTable>
      </ScrollView>
    );
  } else {
    return <></>;
  }
};

const styles = StyleSheet.create({
  cell: {
    padding: 5,
    width: 150,
    height: 50,
  },
});
