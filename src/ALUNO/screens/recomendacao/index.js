import * as React from 'react';
import { FlatList } from 'react-native';

import BookList from './booklist';
import Principal from './principal';

export default Recomendacao = () => {
  const renderItem = ({ item }) => {
    switch (item.type) {
      case 'principal':
        return <Principal />;
      case 'booklist':
        return <BookList />;
      default:
        return null;
    }
  };

  const data = [
    { id: '1', type: 'principal' },
    { id: '2', type: 'booklist' },
  ];

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

