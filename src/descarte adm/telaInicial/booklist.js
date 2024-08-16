// import React, { useState } from 'react';
// import { View, Text, FlatList, Image, StyleSheet, Pressable } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// import styles from './styles';
// import Principal from './principal';
 
//  export default function BookList() {
//   const [books] = useState([
//     { 
//         id: '1', 
//         image: require('../../../../assets/Capa_dos_livros/o diário de anne frank.jpg'),
//         disponivel: 4,
//         title: 'O diário de Anne Frank', 
//         description: 'O Diário de Anne Frank é um livro que relata a história de uma jovem judia chamada Anne Frank, que viveu durante a Segunda Guerra Mundial e se escondeu com sua família e outros judeus em um anexo secreto em Amsterdã, nos Países Baixos, para escapar da perseguição nazista.',
//         author: 'Anne Frank', 
//         editora: 'Grupo Editorial Record',
//         genero: 'Autobiográfico',
//         course: 'Téc. Recursos Humanos',   
//     },
//     { 
//         id: '2', 
//         image: require('../../../../assets/Capa_dos_livros/dom casmurro.jpg'),
//         disponivel: 6,
//         title: 'Dom Casmurro', 
//         description: 'Em Dom Casmurro, o narrador Bento Santiago retoma a infância que passou na Rua de Matacavalos e conta a história do amor e das desventuras que viveu com Capitu, uma das personagens mais enigmáticas e intrigantes da literatura brasileira. Nas páginas deste romance, encontra-se a versão de um homem perturbado pelo ciúme, que revela aos poucos sua psicologia complexa e enreda o leitor em sua narrativa ambígua acerca do acontecimento ou não do adultério da mulher com olhos de ressaca, uma das maiores polêmicas da literatura brasileira.',
//         author: 'Machado de Assis', 
//         editora: 'Grupo Companhia das Letras',
//         genero: 'Romance',
//         course: 'Téc. Contabilidade' 
//     },
//     { 
//         id: '3', 
//         image: require('../../../../assets/Capa_dos_livros/romeu e julieta.jpg'),
//         disponivel: 5,
//         title: 'Romeu e Julieta', 
//         description: 'Há muito tempo duas famílias banham em sangue as ruas de Verona. Enquanto isso, na penumbra das madrugadas, ardem as brasas de um amor secreto. Romeu, filho dos Montéquio, e Julieta, herdeira dos Capuleto, desafiam a rixa familiar e sonham com um impossível futuro, longe da violência e da loucura. Romeu e Julieta é a primeira das grandes tragédias de William Shakespeare, e esta nova tradução de José Francisco Botelho recria com maestria o ritmo ao mesmo tempo frenético e melancólico do texto shakespeariano. Contando também com um excelente ensaio introdutório do especialista Adrian Poole, esta edição traz nova vida a uma das mais emocionantes histórias de amor já contadas.',
//         author: 'William Shakespeare', 
//         editora: 'Grupo Companhia das Letras',
//         genero: 'Romance',
//         course: 'Téc. Design de Interiores' 
//     },
//     { 
//         id: '4', 
//         image: require('../../../../assets/Capa_dos_livros/1984.jpg'),
//         disponivel: 3,
//         title: '1984', 
//         description: 'O trabalho de Winston, o herói de 1984, é reescrever artigos de jornais do passado, de modo que o registro histórico sempre apoie a ideologia do Partido. Grande parte do Ministério também destrói os documentos que não foram revisados, dessa forma não há como provar que o governo esteja mentindo. Winston é um trabalhador diligente e habilidoso, mas odeia secretamente o Partido e sonha com a rebelião contra o Grande Irmão.',
//         author: 'George Orwell', 
//         editora: 'Grupo Companhia das Letras',
//         genero: 'Ficção científica',
//         course: 'Téc. Informática' 
//     },
//     { 
//         id: '5', 
//         image: require('../../../../assets/Capa_dos_livros/os miseráveis.jpg'), 
//         disponivel: 2,
//         title: 'Os Miseráveis', 
//         description: 'Um clássico da literatura mundial, esta obra é uma poderosa denúncia a todos os tipos de injustiça humana. Narra a emocionante história de Jean Valjean ― o homem que, por ter roubado um pão, é condenado a dezenove anos de prisão. Os miseráveis é um livro inquietantemente religioso e político, com uma das narrativas mais envolventes já criadas.',
//         author: 'Victor Hugo', 
//         editora: 'Grupo Companhia das Letras',
//         genero: 'Romance',
//         course: 'Téc. Administração' 
//     },
//     { 
//         id: '6', 
//         image: require('../../../../assets/Capa_dos_livros/orgulho e preconceito.png'), 
//         disponivel: 2,
//         title: 'Orgulho e Preconceito', 
//         description: 'Orgulho e Preconceito é um dos mais aclamados romances da escritora inglesa Jane Austen. Publicado em 1813, revela como era a sociedade da época, quando os relacionamentos se desenrolavam de maneira mais lenta e romântica, no ritmo das cartas levadas por mensageiros a cavalo. Nesse mundo, o sonho da Sra. Bennet era casar bem suas cinco filhas: Jane, Elizabeth, Mary, Kitty e Lydia. Entre as irmãs, destaca-se Elizabeth, a Lizzy, que se depara com um turbilhão de sentimentos diante do orgulho e preconceito que mascaram a realidade. Trata-se de um clássico que, mesmo após duzentos anos desde a sua primeira publicação, continua a encantar milhões de leitores ao redor do mundo.',
//         author: 'Jane Austen', 
//         editora: 'Paulus Editora',
//         genero: 'Romance',
//         course: 'Téc. Farmácia' 
//     }
//   ]);

//   const navigation = useNavigation();
//     const renderItem = ({ item }) => (
//       <View style={styles.item}>
//         <Pressable
//         onPress={() => navigation.navigate('infolivrorecomendacao', { book: item })}>
//         <Text style={styles.course}>{item.course}</Text>
//         <Image source={item.image} style={styles.image} />
//         <Text style={styles.titleBook}>{item.title}</Text>
//         <Text style={styles.author}>{item.author}</Text>
//         </Pressable>
//       </View>
//     );
  
//     return (
//       <FlatList style={Flatstyles.FlatList}
//         data={books}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()}
//         numColumns={3}
//         contentContainerStyle={styles.flatListContainer}
//       />
//     );
//   };

//   const Flatstyles = StyleSheet.create({
//     FlatList: {
//       padding: 6,
//     }
//   })
