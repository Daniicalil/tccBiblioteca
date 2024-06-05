import React from 'react';
import { View, Text, Image } from 'react-native';

import AnneFrank from '../../../assets/Capa_dos_livros/o diário de anne frank.jpg';
import DomCasmurro from '../../../assets/Capa_dos_livros/dom casmurro.jpg';
import RomeueJulieta from '../../../assets/Capa_dos_livros/romeu e julieta.jpg';
import MilNovecentoseOitentaeQuatro from '../../../assets/Capa_dos_livros/1984.jpg';
import OsMiseráveis from '../../../assets/Capa_dos_livros/os miseráveis.jpg';
import OrgulhoePreconceito from '../../../assets/Capa_dos_livros/orgulho e preconceito.png';
import Heartstopper from '../../../assets/Capa_dos_livros/'

import ImgLogo from '../../../assets/logo.png';
import ImgEtec from '../../../assets/etec.png';
import ImgFunc from '../../../assets/horario.png';
import ImgImportancia from '../../../assets/fraseimportancia.png'

import styles from './styles';

export const RetangGreen = () => {
  return (
    <View style={styles.retangGreen}>
      <Image source={ImgLogo} style={styles.imgLogo}/>
      <Image source={ImgEtec} style={styles.imgEtec}/>
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

export const Quad1 = () => {
  return (
    <View style={styles.quadrado}>
        <Image source={AnneFrank} style={styles.capaLivros}/>
        <Text style={styles.livros
}>O diário de Anne Frank - Anne Frank</Text>
    </View>
  );
};

export const Quad2 = () => {
  return (
    <View style={styles.quadrado}>
        <Image source={DomCasmurro} style={styles.capaLivros}/>
        <Text style={styles.livros}>Dom Casmurro - Machado de Assís</Text>
    </View>
  );
};

export const Quad3 = () => {
  return (
    <View style={styles.quadrado}>
        <Image source={RomeueJulieta} style={styles.capaLivros}/>
        <Text style={styles.livros}>Romeu e Julieta - William Shakespeare</Text>
    </View>
  );
};

export const Quad4 = () => {
  return (
    <View style={styles.quadrado}>
        <Image source={MilNovecentoseOitentaeQuatro} style={styles.capaLivros}/>
        <Text style={styles.livros}>1984 - George Orwell</Text>
    </View>
  );
};

export const Quad5 = () => {
  return (
    <View style={styles.quadrado}>
        <Image source={OsMiseráveis} style={styles.capaLivros}/>
        <Text style={styles.livros}>Os Miseráveis - Victor Hugo</Text>
    </View>
  );
};

export const Quad6 = () => {
  return (
    <View style={styles.quadrado}>
        <Image source={OrgulhoePreconceito} style={styles.capaLivros}/>
        <Text style={styles.livros}>Orgulho e Preconceito - Jane Austen</Text>
    </View>
  );
};
