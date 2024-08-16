// import * as React from 'react';
// import { FlatList, View } from 'react-native';
// import { Importancia } from './forms';

// import styles from './styles'
// import Principal from './principal';
// import BookList from './booklist';

// const TelaInicial = () => {
//   const renderItem = ({ item }) => {
//     switch (item.type) {
//       case 'principal':
//         return <Principal />;
//       case 'booklist':
//         return <BookList />;
//       case 'importancia':
//         return <Importancia />;
//       default:
//         return null;
//     }
//   };

//   const data = [
//     { id: '1', type: 'principal' },
//     { id: '2', type: 'booklist' },
//     { id: '3', type: 'importancia' },
//   ];

//   return (
//     <View style={styles.containerAny}>
//     <FlatList
//       data={data}
//       renderItem={renderItem}
//       keyExtractor={item => item.id}
//     />
//     </View>
//   );
// };



// export default TelaInicial;