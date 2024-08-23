import * as React from 'react';
import { FlatList, View } from 'react-native';
import { Importancia } from '../../componentes/forms';

import styles from './styles'
import BookList from './booklist';

const TelaInicial = () => {
  const renderItem = ({ item }) => {
    switch (item.type) {
      case 'booklist':
        return <BookList />;
      case 'importancia':
        return <Importancia />;
      default:
        return null;
    }
  };

  const data = [
    { id: '1', type: 'booklist' },
    { id: '2', type: 'importancia' },
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
};



export default TelaInicial;