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
import TopHeader from '../../rotas/header';

export const RetangGreen = () => {
  return (
    <View style={styles.retangGreen}>
      <TopHeader />
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

// export const Quad1 = () => {
//   return (
//     <View style={styles.quadrado}>
//         <Image source={AnneFrank} style={styles.capaLivros}/>
//         <Text style={styles.livros
// }>O diário de Anne Frank - Anne Frank</Text>
//     </View>
//   );
// };

// export const Quad2 = () => {
//   return (
//     <View style={styles.quadrado}>
//         <Image source={DomCasmurro} style={styles.capaLivros}/>
//         <Text style={styles.livros}>Dom Casmurro - Machado de Assís</Text>
//     </View>
//   );
// };

// export const Quad3 = () => {
//   return (
//     <View style={styles.quadrado}>
//         <Image source={RomeueJulieta} style={styles.capaLivros}/>
//         <Text style={styles.livros}>Romeu e Julieta - William Shakespeare</Text>
//     </View>
//   );
// };

// export const Quad4 = () => {
//   return (
//     <View style={styles.quadrado}>
//         <Image source={MilNovecentoseOitentaeQuatro} style={styles.capaLivros}/>
//         <Text style={styles.livros}>1984 - George Orwell</Text>
//     </View>
//   );
// };

// export const Quad5 = () => {
//   return (
//     <View style={styles.quadrado}>
//         <Image source={OsMiseráveis} style={styles.capaLivros}/>
//         <Text style={styles.livros}>Os Miseráveis - Victor Hugo</Text>
//     </View>
//   );
// };

// export const Quad6 = () => {
//   return (
//     <View style={styles.quadrado}>
//         <Image source={OrgulhoePreconceito} style={styles.capaLivros}/>
//         <Text style={styles.livros}>Orgulho e Preconceito - Jane Austen</Text>
//     </View>
//   );
// };

// export const Quad7 = () => {
//   return (
//     <View style={styles.quadrado}>
//         <Image source={Heartstopper} style={styles.capaLivros}/>
//         <Text style={styles.livros}>Heartstopper - Alice Oseman</Text>
//     </View>
//   );
// };

// export const Quad8 = () => {
//   return (
//     <View style={styles.quadrado}>
//         <Image source={ProcurenasCinzas} style={styles.capaLivros}/>
//         <Text style={styles.livros}>Procure nas cinzas - Charlie Donlea</Text>
//     </View>
//   );
// };

// export const Quad9 = () => {
//   return (
//     <View style={styles.quadrado}>
//         <Image source={OsSeteMaridosdeEvelynHugo} style={styles.capaLivros}/>
//         <Text style={styles.livros}>Os Sete Maridos de Evelyn Hugo - Taylor Jenkins Reid</Text>
//     </View>
//   );
// };

// export const Quad10 = () => {
//   return (
//     <View style={styles.quadrado}>
//         <Image source={AGarotadoLago} style={styles.capaLivros}/>
//         <Text style={styles.livros}>A garota do lago - Charlie Donlea</Text>
//     </View>
//   );
// };

// export const Quad11 = () => {
//   return (
//     <View style={styles.quadrado}>
//         <Image source={Verity} style={styles.capaLivros}/>
//         <Text style={styles.livros}>Verity - Colleen Hoover</Text>
//     </View>
//   );
// };

// export const Quad12 = () => {
//   return (
//     <View style={styles.quadrado}>
//         <Image source={HarryPottereaPedraFilosofal} style={styles.capaLivros}/>
//         <Text style={styles.livros}>Harry Potter e a pedra filosofal - J.K. Rowling</Text>
//     </View>
//   );
// };

// export const Quad13 = () => {
//   return (
//     <View style={styles.quadrado}>
//         <Image source={ARevolucaodosBichos} style={styles.capaLivros}/>
//         <Text style={styles.livros}>A revolução dos bichos - George Orwell</Text>
//     </View>
//   );
// };

// export const Quad14 = () => {
//   return (
//     <View style={styles.quadrado}>
//         <Image source={DeixadaparaTrás} style={styles.capaLivros}/>
//         <Text style={styles.livros}>Deixada para trás - Charlie Donlea</Text>
//     </View>
//   );
// };
