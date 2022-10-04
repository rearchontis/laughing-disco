import React, {useEffect, useState} from 'react';
import {DataTable} from 'react-native-paper';
import {FlatList, ScrollView, StyleSheet} from 'react-native';
import {queryDataFromTable} from './db';
import {TableRow} from './TableRow';
interface TableScreenProps {
  tbl_name: string;
}

export const TableScreen = ({tbl_name}: TableScreenProps) => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    (async () => {
      setData(await queryDataFromTable(tbl_name));
    })();
  }, [tbl_name]);

  // console.log(data);

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
          <FlatList
            data={data}
            initialNumToRender={20}
            renderItem={({item}) => <TableRow data={item} />}
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
    heigth: 50,
  },
});
