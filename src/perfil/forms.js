import React from 'react';
import { View, Text, Image } from 'react-native';

import AnneFrank from '../../assets/Capa dos livros/o diário de anne frank.jpg';
import DomCasmurro from '../../assets/Capa dos livros/dom casmurro.jpg';
import RomeueJulieta from '../../assets/Capa dos livros/romeu e julieta.jpg';
import MilNovecentoseOitentaeQuatro from '../../assets/Capa dos livros/1984.jpg';
import OsMiseráveis from '../../assets/Capa dos livros/os miseráveis.jpg';
import OrgulhoePreconceito from '../../assets/Capa dos livros/orgulho e preconceito.png';

import styles from './styles';

export const RetangGreen = () => {
  return (
    <View style={styles.retangGreen}>
      {/* Conteúdo dentro do retângulo, se necessário */}
    </View>
  );
};

export const RetangOrange = () => {
  return (
    <View style={styles.retangOrange}>
      {/* Conteúdo dentro do retângulo, se necessário */}
    </View>
  );
};

export const Funcionamento = () => {
  return (
    <View style={styles.funcionamento}>
      {/* Conteúdo dentro do retângulo, se necessário */}
    </View>
  );
};

export const Quad1 = () => {
  return (
    <View style={styles.quadrado}>
        <Text style={styles.curso}>Téc. Recursos Humanos</Text>
        <Image source={AnneFrank} style={styles.capaLivros}/>
        <Text style={styles.livros}>O diário de Anne Frank - Anne Frank</Text>
    </View>
  );
};

export const Quad2 = () => {
  return (
    <View style={styles.quadrado}>
        <Text style={styles.curso}>Téc. Contabilidade</Text>
        <Image source={DomCasmurro} style={styles.capaLivros}/>
        <Text style={styles.livros}>Dom Casmurro - Machado de Assís</Text>
    </View>
  );
};

export const Quad3 = () => {
  return (
    <View style={styles.quadrado}>
        <Text style={styles.curso}>Téc. Design de Interiores</Text>
        <Image source={RomeueJulieta} style={styles.capaLivros}/>
        <Text style={styles.livros}>Romeu e Julieta - William Shakespeare</Text>
    </View>
  );
};

export const Quad4 = () => {
  return (
    <View style={styles.quadrado}>
        <Text style={styles.curso}>Téc. Informática</Text>
        <Image source={MilNovecentoseOitentaeQuatro} style={styles.capaLivros}/>
        <Text style={styles.livros}>1984 - George Orwell</Text>
    </View>
  );
};

export const Quad5 = () => {
  return (
    <View style={styles.quadrado}>
        <Text style={styles.curso}>Téc. Administração</Text>
        <Image source={OsMiseráveis} style={styles.capaLivros}/>
        <Text style={styles.livros}>Os Miseráveis - Victor Hugo</Text>
    </View>
  );
};

export const Quad6 = () => {
  return (
    <View style={styles.quadrado}>
        <Text style={styles.curso}>Téc. Farmácia</Text>
        <Image source={OrgulhoePreconceito} style={styles.capaLivros}/>
        <Text style={styles.livros}>Orgulho e Preconceito - Jane Austen</Text>
    </View>
  );
};

export const ImportanciaFrase = () => {
  return (
    <View style={styles.importanciaFrase}>
      {/* Conteúdo dentro do retângulo, se necessário */}
    </View>
  );
};