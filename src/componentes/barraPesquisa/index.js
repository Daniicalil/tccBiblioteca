import React, { useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

import styles from "./styles";

export const BarraPesquisa = ({ livNome, atLivNome, listaLivros }) => {
  return (
    <Searchbar
      placeholder="Pesquisar"
      value={livNome}
      onChangeText={atLivNome}
      onIconPress={listaLivros}
      style={styles.barraPesq}
      inputStyle={styles.placeholderStyle}
      icon={({ size, color }) => (
        <Icon name="search" size={20} color="#000" style={styles.iconStyle} />
      )}
    />
  );
};
