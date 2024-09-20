import React from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const useBotaoConfirmarAcao = (mensagem, onConfirm, screenToNavigate) => {
  const navigation = useNavigation();

  const showSaveAlert = () => {
    Alert.alert(
      "Informações Salvas",
      "Ação realizada com sucesso!",
      [
        {
          text: "Ok",
          onPress: () => navigation.navigate(screenToNavigate), // Navega para a tela desejada
        },
      ],
      { cancelable: false }
    );
  };

  const showConfirmAlert = () => {
    Alert.alert(
      "Confirmação",
      mensagem,
      [
        {
          text: "Sim",
          onPress: () => {
            if (onConfirm) {
              onConfirm(); // Chama a ação de confirmação passada
            }
            showSaveAlert(); // Exibe o alerta de confirmação
          },
        },
        {
          text: "Não",
          onPress: () => console.log("Ação cancelada"),
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  };

  return showConfirmAlert;
};

export default useBotaoConfirmarAcao;
