import React from 'react';
import { View, Text, Image } from 'react-native';

// import AnneFrank from '../../../assets/Capa_dos_livros/o diário de anne frank.jpg';
// import DomCasmurro from '../../../assets/Capa_dos_livros/dom casmurro.jpg';
// import RomeueJulieta from '../../../assets/Capa_dos_livros/romeu e julieta.jpg';
// import MilNovecentoseOitentaeQuatro from '../../../assets/Capa_dos_livros/1984.jpg';
// import OsMiseráveis from '../../../assets/Capa_dos_livros/os miseráveis.jpg';
// import OrgulhoePreconceito from '../../../assets/Capa_dos_livros/orgulho e preconceito.png';
// import Heartstopper from '../../../assets/Capa_dos_livros/heartstopper.jpg';
// import ProcurenasCinzas from '../../../assets/Capa_dos_livros/procure nas cinzas.jpg';
// import OsSeteMaridosdeEvelynHugo from '../../../assets/Capa_dos_livros/os sete maridos de evelyn hugo.jpg';
// import AGarotadoLago from '../../../assets/Capa_dos_livros/a garota do lago.jpg';
// import Verity from '../../../assets/Capa_dos_livros/verity.jpg';
// import HarryPottereaPedraFilosofal from '../../../assets/Capa_dos_livros/harry potter e a pedra filosofal.jpg';
// import ARevolucaodosBichos from '../../../assets/Capa_dos_livros/a revolução dos bichos.jpg';
// import DeixadaparaTrás from '../../../assets/Capa_dos_livros/deixada para trás.jpg';

import ImgLogo from '../../../../assets/imagens_telas/logo.png';
import ImgEtec from '../../../../assets/imagens_telas/etec.png';
import ImgFunc from '../../../../assets/imagens_telas/horario.png';
import ImgImportancia from '../../../../assets/imagens_telas/fraseimportancia.png'

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
