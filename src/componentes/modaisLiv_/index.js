import React, { useState } from "react";
import {
  View,
  Modal,
  TextInput,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";
import styles from "./styles";
import useBotaoConfirmarAcao from "../alertConfirmacao";
import { API_URL, API_PORT } from "@env";
import api from "../../services/api";

const ModalAddAutor = ({ show, onClose }) => {
  const apiUrl = API_URL; // URL da API
  const apiPorta = API_PORT; // Porta da API

  const [livAutores, setLivAutores] = useState({ aut_cod: 0, liv_cod: 0 });
  const [livEditora, setLivEditora] = useState({ edt_cod: 0, liv_cod: 0 });
  const [livGenero, setLivGenero] = useState({ gen_cod: 0, liv_cod: 0 });

  // Estado para controlar qual modal está sendo exibido
  const [currentModal, setCurrentModal] = useState(1);

  const valDefault = styles.formControl;
  const valSucesso = styles.formControl + " " + styles.success;
  const valErro = styles.formControl + " " + styles.error;

  // validação
  const [valida, setValida] = useState({
    aut_cod: {
      validado: valDefault,
      mensagem: [],
    },
    livCodAut: {
      validado: valDefault,
      mensagem: [],
    },
    edt_cod: {
      validado: valDefault,
      mensagem: [],
    },
    livCodEdt: {
      validado: valDefault,
      mensagem: [],
    },
    gen_cod: {
      validado: valDefault,
      mensagem: [],
    },
    livCodGen: {
      validado: valDefault,
      mensagem: [],
    },
  });

  const handleChangeAut = (fieldName, value) => {
    setLivAutores((prev) => ({ ...prev, [fieldName]: value }));
  };
  const handleChangeEdt = (fieldName, value) => {
    setLivEditora((prev) => ({ ...prev, [fieldName]: value }));
  };
  const handleChangeGen = (fieldName, value) => {
    setLivGenero((prev) => ({ ...prev, [fieldName]: value }));
  };
  // const handleChangeLiv = (fieldName, value) => {
  //     setLivCod(prev => ({ ...prev, [fieldName]: value }));
  // };

  function validaAutCod() {
    let objTemp = {
      validado: valSucesso, // css referente ao estado de validação
      mensagem: [], // array de mensagens de validação
    };

    if (!livAutores.aut_cod) {
      objTemp.validado = valErro;
      objTemp.mensagem.push("O código do autor(a) é obrigatório");
    }

    setValida((prevState) => ({
      ...prevState, // mantém os valores anteriores
      aut_cod: objTemp, // atualiza apenas o campo 'nome'
    }));

    const testeResult = objTemp.mensagem.length === 0 ? 1 : 0;
    return testeResult;
  }

  function validaLivCodAut() {
    let objTemp = {
      validado: valSucesso, // css referente ao estado de validação
      mensagem: [], // array de mensagens de validação
    };

    if (!livAutores.liv_cod) {
      objTemp.validado = valErro;
      objTemp.mensagem.push("O código do livro é obrigatório");
    }

    setValida((prevState) => ({
      ...prevState, // mantém os valores anteriores
      livCodAut: objTemp, // atualiza apenas o campo 'nome'
    }));

    const testeResult = objTemp.mensagem.length === 0 ? 1 : 0;
    return testeResult;
  }

  function validaEdtCod() {
    let objTemp = {
      validado: valSucesso, // css referente ao estado de validação
      mensagem: [], // array de mensagens de validação
    };

    if (!livEditora.edt_cod) {
      objTemp.validado = valErro;
      objTemp.mensagem.push("O código da editora é obrigatório");
    }

    setValida((prevState) => ({
      ...prevState, // mantém os valores anteriores
      edt_cod: objTemp, // atualiza apenas o campo 'nome'
    }));

    const testeResult = objTemp.mensagem.length === 0 ? 1 : 0;
    return testeResult;
  }

  function validaLivCodEdt() {
    let objTemp = {
      validado: valSucesso, // css referente ao estado de validação
      mensagem: [], // array de mensagens de validação
    };

    if (!livEditora.liv_cod) {
      objTemp.validado = valErro;
      objTemp.mensagem.push("O código do livro é obrigatório");
    }

    setValida((prevState) => ({
      ...prevState, // mantém os valores anteriores
      livCodEdt: objTemp, // atualiza apenas o campo 'nome'
    }));

    const testeResult = objTemp.mensagem.length === 0 ? 1 : 0;
    return testeResult;
  }

  function validaGenCod() {
    let objTemp = {
      validado: valSucesso, // css referente ao estado de validação
      mensagem: [], // array de mensagens de validação
    };

    if (!livGenero.gen_cod) {
      objTemp.validado = valErro;
      objTemp.mensagem.push("O código do gênero é obrigatório");
    }

    setValida((prevState) => ({
      ...prevState, // mantém os valores anteriores
      gen_cod: objTemp, // atualiza apenas o campo 'nome'
    }));

    const testeResult = objTemp.mensagem.length === 0 ? 1 : 0;
    return testeResult;
  }

  function validaLivCodGen() {
    let objTemp = {
      validado: valSucesso, // css referente ao estado de validação
      mensagem: [], // array de mensagens de validação
    };

    if (!livGenero.liv_cod) {
      objTemp.validado = valErro;
      objTemp.mensagem.push("O código do livro é obrigatório");
    }

    setValida((prevState) => ({
      ...prevState, // mantém os valores anteriores
      livCodGen: objTemp, // atualiza apenas o campo 'nome'
    }));

    const testeResult = objTemp.mensagem.length === 0 ? 1 : 0;
    return testeResult;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    let isValid = false;

    if (currentModal === 1) {
      isValid = validaAutCod() || validaLivCodAut();
      if (isValid) {
        try {
          const response = await api.post("/livros_autores", livAutores);
          if (response.data.sucesso) {
            alert("livro_autor adicionado com sucesso!");
            setCurrentModal(2); // Avançar para o segundo modal
          }
        } catch (error) {
          alert(
            error.response
              ? error.response.data.mensagem + "\n" + error.response.data.dados
              : "Erro no front-end" + "\n" + error
          );
        }
      }
    } else if (currentModal === 2) {
      isValid = validaEdtCod() || validaLivCodEdt();
      if (isValid) {
        try {
          const response = await api.post("/livros_editoras", livEditora);
          if (response.data.sucesso) {
            alert("livro_editora adicionado com sucesso!");
            setCurrentModal(3); // Avançar para o terceiro modal
          }
        } catch (error) {
          alert(
            error.response
              ? error.response.data.mensagem + "\n" + error.response.data.dados
              : "Erro no front-end" + "\n" + error
          );
        }
      }
    } else if (currentModal === 3) {
      isValid = validaGenCod() || validaLivCodGen();
      if (isValid) {
        try {
          const response = await api.post("/livros_generos", livGenero);
          if (response.data.sucesso) {
            alert("livro_genero adicionado com sucesso!");
            setTimeout(() => {
              onClose(); // Fecha o modal após 2 segundos
            }, 2000);
          }
        } catch (error) {
          alert(
            error.response
              ? error.response.data.mensagem + "\n" + error.response.data.dados
              : "Erro no front-end" + "\n" + error
          );
        }
      }
    }
  }

  return (
    <Modal
      transparent={true}
      visible={show}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View className={styles.conteudo} id="form" onSubmit={handleSubmit}>
            {currentModal === 1 && (
              <View>
                <View>
                  <Text style={styles.textInput}>Código autor(a):</Text>
                  <View className={styles.divInput}>
                    <TextInput
                      keyboardType="number"
                      name="aut_cod"
                      value={livAutores.aut_cod || ""}
                      style={styles.inputField}
                      onChangeText={(value) =>
                        handleChangeAut("aut_cod", value)
                      }
                    />
                  </View>
                  {valida.aut_cod.mensagem.map((mens) => (
                    <Text key={mens} id="aut_cod" style={styles.small}>
                      {mens}
                    </Text>
                  ))}
                </View>
                <View>
                  <Text style={styles.textInput}>Código livro:</Text>
                  <View className={styles.divInput}>
                    <TextInput
                      keyboardType="number"
                      name="liv_cod"
                      value={livAutores.liv_cod || ""}
                      style={styles.inputField}
                      onChangeText={(value) =>
                        handleChangeAut("liv_cod", value)
                      }
                    />
                  </View>
                  {valida.livCodAut.mensagem.map((mens) => (
                    <Text key={mens} id="livCodAut" style={styles.small}>
                      {mens}
                    </Text>
                  ))}
                </View>
              </View>
            )}

            {currentModal === 2 && (
              <View>
                <View>
                  <Text style={styles.textInput}>Código editora:</Text>
                  <View className={styles.divInput}>
                    <TextInput
                      keyboardType="number"
                      name="edt_cod"
                      value={livEditora.edt_cod || ""}
                      style={styles.inputField}
                      onChangeText={(value) =>
                        handleChangeEdt("edt_cod", value)
                      }
                    />
                  </View>
                  {valida.edt_cod.mensagem.map((mens) => (
                    <Text key={mens} id="edt_cod" style={styles.small}>
                      {mens}
                    </Text>
                  ))}
                </View>
                <View>
                  <Text style={styles.textInput}>Código livro:</Text>
                  <View className={styles.divInput}>
                    <TextInput
                      keyboardType="number"
                      name="liv_cod"
                      value={livGenero.liv_cod || ""}
                      style={styles.inputField}
                      onChangeText={(value) =>
                        handleChangeEdt("liv_cod", value)
                      }
                    />
                  </View>
                  {valida.livCodEdt.mensagem.map((mens) => (
                    <Text key={mens} id="livCodEdt" style={styles.small}>
                      {mens}
                    </Text>
                  ))}
                </View>
              </View>
            )}

            {currentModal === 3 && (
              <View>
                <View>
                  <Text style={styles.textInput}>Código gênero:</Text>
                  <View className={styles.divInput}>
                    <TextInput
                      keyboardType="number"
                      name="gen_cod"
                      value={livGenero.gen_cod || ""}
                      style={styles.inputField}
                      onChangeText={(value) =>
                        handleChangeGen("gen_cod", value)
                      }
                    />
                  </View>
                  {valida.gen_cod.mensagem.map((mens) => (
                    <Text key={mens} id="gen_cod" style={styles.small}>
                      {mens}
                    </Text>
                  ))}
                </View>
                <View>
                  <Text style={styles.textInput}>Código livro:</Text>
                  <View className={styles.divInput}>
                    <TextInput
                      keyboardType="number"
                      name="liv_cod"
                      value={livGenero.liv_cod || ""}
                      style={styles.inputField}
                      onChangeText={(value) =>
                        handleChangeGen("liv_cod", value)
                      }
                    />
                  </View>
                  {valida.livCodGen.mensagem.map((mens) => (
                    <Text key={mens} id="livCodGen" style={styles.small}>
                      {mens}
                    </Text>
                  ))}
                </View>
              </View>
            )}

            <View style={styles.buttonsContainer}>
              <Pressable onPress={handleSubmit} style={styles.modalButtonAdd}>
                <Text style={styles.buttonTextAdd}>Adicionar</Text>
              </Pressable>
              <Pressable onPress={onClose} style={styles.modalButtonCanc}>
                <Text style={styles.buttonTextCanc}>Cancelar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalAddAutor;
