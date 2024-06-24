import * as React from 'react';
import { FlatList } from 'react-native';

import Principal from './principal';
import BookList from './booklist';

export default function Biblioteca({ navigation }) {
  const renderItem = ({ item }) => {
    switch (item.type) {
      case 'principal':
        return <Principal  voltar={navigation}/>;
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
}
