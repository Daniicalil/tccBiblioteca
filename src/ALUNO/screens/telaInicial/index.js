import * as React from 'react';
import { FlatList } from 'react-native';
import { Importancia } from './forms';

import Principal from './principal';
import BookList from './booklist';

const TelaInicial = () => {
  const renderItem = ({ item }) => {
    switch (item.type) {
      case 'principal':
        return <Principal />;
      case 'booklist':
        return <BookList />;
      case 'importancia':
        return <Importancia />;
      default:
        return null;
    }
  };

  const data = [
    { id: '1', type: 'principal' },
    { id: '2', type: 'booklist' },
    { id: '3', type: 'importancia' },
  ];

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};



export default TelaInicial;