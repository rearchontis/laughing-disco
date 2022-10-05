import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {List, Divider} from 'react-native-paper';
import type {StackNavigationProp} from '@react-navigation/stack';

interface TablesListScreenProps {
  tables: Array<{tbl_name: string}>;
  navigation: StackNavigationProp<{[key: string]: undefined}>;
}

export const TablesListScreen = ({
  tables,
  navigation,
}: TablesListScreenProps) => (
  <FlashList
    data={tables}
    renderItem={({item}) => (
      <List.Item
        title={item.tbl_name}
        onPress={() => navigation!.navigate(item.tbl_name)}
      />
    )}
    keyExtractor={item => item.tbl_name}
    ItemSeparatorComponent={Divider}
    estimatedItemSize={tables.length}
  />
);
