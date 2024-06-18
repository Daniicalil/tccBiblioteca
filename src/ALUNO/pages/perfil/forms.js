import React from 'react';
import { View, Text, Image } from 'react-native';

import ImgLogo from '../../../../assets/imagens_telas/logo.png';
import ImgEtec from '../../../../assets/imagens_telas/etec.png';

import styles from './styles';
import TopHeader from '../../rotas/header';

export const RetangGreen = () => {
  return (
    <View style={styles.retangGreen}>
      <TopHeader/>
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