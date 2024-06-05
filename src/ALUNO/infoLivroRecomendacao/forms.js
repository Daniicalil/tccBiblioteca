import React from 'react';
import { View, Text, Image } from 'react-native';

import ImgLogo from '../../../assets/logo.png';
import ImgEtec from '../../../assets/etec.png';

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