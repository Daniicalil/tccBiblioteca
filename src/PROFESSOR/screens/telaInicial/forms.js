import React from 'react';
import { View, Image } from 'react-native';

import ImgLogo from '../../../../assets/imagens_telas/logo.png';
import ImgEtec from '../../../../assets/imagens_telas/etec.png';
import ImgFunc from '../../../../assets/imagens_telas/horario.png';
import ImgImportancia from '../../../../assets/imagens_telas/fraseimportancia.png';


import styles from './styles';
import HeaderDrawer from '../../rotas/headerDrawer';

export const RetangGreen = () => {
  return (
    <View style={styles.retangGreen}>
      <HeaderDrawer />
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

export const Funcionamento = () => {
  return (
    <View style={styles.funcionamento}>
      <Image source={ImgFunc} style={styles.imgFunc}/>
    </View>
  );
};

export const Importancia = () => {
  return (
    <View style={styles.importancia}>
      <Image source={ImgImportancia} style={styles.imgImportancia}/>
    </View>
  );
};
