import * as React from 'react';
import { FlatList, View } from 'react-native';

import styles from './styles';
import BookList from './booklist';

export default function Biblioteca({ navigation }) {
  const renderItem = ({ item }) => {
    switch (item.type) {
      case 'booklist':
        return <BookList voltar={navigation}/>;
      default:
        return null;
    }
  };

  const data = [
    { id: '1', type: 'booklist' },
  ];

  return (
    <View style={styles.containerAny}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
