import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  ImageBackground,
  ScrollView,
  Alert,
} from "react-native";
import { RadioButton, IconButton } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import imgSignup from "../../../../assets/imagens_telas/img_cadastro.png";
import imgDesign from "../../../../assets/imagens_telas/designPage.png";

import api from "../../../services/api";
import styles from "./styles";

export default function SignUp({ navigation }) {
  const [cursos, setCursos] = useState([]);
  const [errors, setErrors] = useState({});

  const [usuario, setUsuario] = useState({
    usu_rm: "",
    usu_nome: "",
    usu_email: "",
    usu_senha: "",
    confSenha: "",
    usu_sexo: "",
    cur_cod: "",
    usu_foto: "",
  });

  const [value, setValue] = useState(usuario.usu_sexo);

  const sexos = [
    { label: "Feminino", value: "0" },
    { label: "Masculino", value: "1" },
    { label: "Neutro", value: "2" },
    { label: "Padrão", value: "3" },
  ];

  const valDefault = styles.formControl;
  const valSucesso = styles.formControl + " " + styles.success;
  const valErro = styles.formControl + " " + styles.error;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  useEffect(() => {
    listaCursos();
  }, []);

  async function listaCursos() {
    try {
      const response = await api.post("/cursos");
      setCursos(response.data.dados);
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.mensagem + "\n" + error.response.data.dados);
      } else {
        alert("Erro no front-end" + "\n" + error);
      }
    }
  }

  // validação
  const [valida, setValida] = useState({
    foto: {
      validado: valDefault,
      mensagem: [],
    },
    nome: {
      validado: valDefault,
      mensagem: [],
    },
    rm: {
      validado: valDefault,
      mensagem: [],
    },
    email: {
      validado: valDefault,
      mensagem: [],
    },
    sexo: {
      validado: valDefault,
      mensagem: [],
    },
    senha: {
      validado: valDefault,
      mensagem: [],
    },
    confSenha: {
      validado: valDefault,
      mensagem: [],
    },
    cur_cod: {
      validado: valDefault,
      mensagem: [],
    },
  });

  const handleChange = (e) => {
    setUsuario((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // const [selectCursos, setSelectCursos] = useState('');
  // const handleSelectCursosChange = (e) => {
  //     setSelectCursos(e.target.value);
  //     setError(''); // Limpa o erro se necessário
  // };

  function validaSelectCursos() {
    let objTemp = {
      validado: valSucesso, // css referente ao estado de validação
      mensagem: [], // array de mensagens de validação
    };

    if (!usuario.cur_cod) {
      objTemp.validado = valErro;
      objTemp.mensagem.push("Por favor, selecione uma opção no campo.");
    }

    setValida((prevState) => ({
      ...prevState, // mantém os valores anteriores
      cur_cod: objTemp, // atualiza apenas o campo 'nome'
    }));

    const testeResult = objTemp.mensagem.length === 0 ? 1 : 0;
    return testeResult;
  }

  function validaNome() {
    let objTemp = {
      validado: valSucesso, // css referente ao estado de validação
      mensagem: [], // array de mensagens de validação
    };

    if (usuario.usu_nome === "") {
      objTemp.validado = valErro;
      objTemp.mensagem.push("O nome do usuário é obrigatório");
    } else if (usuario.usu_nome.length < 5) {
      objTemp.validado = valErro;
      objTemp.mensagem.push("Insira o nome completo do usuário");
    }

    setValida((prevState) => ({
      ...prevState, // mantém os valores anteriores
      nome: objTemp, // atualiza apenas o campo 'nome'
    }));

    const testeResult = objTemp.mensagem.length === 0 ? 1 : 0;
    return testeResult;
  }

  function validaRM() {
    let objTemp = {
      validado: valSucesso, // css referente ao estado de validação
      mensagem: [], // array de mensagens de validação
    };

    if (usuario.usu_rm === "") {
      objTemp.validado = valErro;
      objTemp.mensagem.push("O RM do usuário é obrigatório");
    } else if (usuario.usu_rm.length < 6) {
      objTemp.validado = valErro;
      objTemp.mensagem.push("O RM deve ter pelo menos 6 digitos");
    }

    setValida((prevState) => ({
      ...prevState, // mantém os valores anteriores
      rm: objTemp, // atualiza apenas o campo 'nome'
    }));

    const testeResult = objTemp.mensagem.length === 0 ? 1 : 0;
    return testeResult;
  }

  function checkEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

  function validaEmail() {
    let objTemp = {
      validado: valSucesso,
      mensagem: [],
    };

    if (usuario.usu_email === "") {
      objTemp.validado = valErro;
      objTemp.mensagem.push("O e-mail do usuário é obrigatório");
    } else if (!checkEmail(usuario.usu_email)) {
      objTemp.validado = valErro;
      objTemp.mensagem.push("Insira um e-mail válido");
    }

    setValida((prevState) => ({
      ...prevState, // mantém os valores anteriores
      email: objTemp, // atualiza apenas o campo 'nome'
    }));

    const testeResult = objTemp.mensagem.length === 0 ? 1 : 0;
    return testeResult;
  }

  function validaSenha() {
    let objTemp = {
      validado: valSucesso,
      mensagem: [],
    };

    // Expressão regular para validar a senha
    const senhaForteRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (usuario.usu_senha === "") {
      objTemp.validado = valErro;
      objTemp.mensagem.push("O preenchimento da senha é obrigatório");
    } else if (!senhaForteRegex.test(usuario.usu_senha)) {
      objTemp.validado = valErro;
      objTemp.mensagem.push(
        "Use uma senha forte com pelo menos 8 caracteres, combinando letras, números e símbolos."
      );
    }

    setValida((prevState) => ({
      ...prevState, // mantém os valores anteriores
      senha: objTemp, // atualiza apenas o campo 'senha'
    }));

    const testeResult = objTemp.mensagem.length === 0 ? 1 : 0;
    return testeResult;
  }

  function validaConfSenha() {
    let objTemp = {
      validado: valSucesso,
      mensagem: [],
    };

    if (usuario.confSenha === "") {
      objTemp.validado = valErro;
      objTemp.mensagem.push("A confirmação da senha é obrigatória");
    } else if (usuario.confSenha !== usuario.usu_senha) {
      objTemp.validado = valErro;
      objTemp.mensagem.push("A senha e a confirmação devem ser iguais");
    }

    setValida((prevState) => ({
      ...prevState, // mantém os valores anteriores
      confSenha: objTemp, // atualiza apenas o campo 'nome'
    }));

    const testeResult = objTemp.mensagem.length === 0 ? 1 : 0;
    return testeResult;
  }

  function validaSexo() {
    let objTemp = {
      validado: valSucesso,
      mensagem: [],
    };

    if (usuario.usu_sexo == 0) {
      objTemp.validado = valErro;
      objTemp.mensagem.push("Selecione o sexo do usuário");
    }

    setValida((prevState) => ({
      ...prevState,
      sexo: objTemp,
    }));

    const testeResult = objTemp.mensagem.length === 0 ? 1 : 0;
    return testeResult;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    let itensValidados = 0;

    itensValidados += validaNome();
    itensValidados += validaRM();
    itensValidados += validaEmail();
    itensValidados += validaSelectCursos();
    itensValidados += validaSexo();
    itensValidados += validaSenha();
    itensValidados += validaConfSenha();

    if (itensValidados === 7) {
      try {
        const response = await api.post("/usuarios", usuario);
        if (response.data.sucesso) {
          Alert.alert("Cadastro realizado com sucesso");
          // openModalAvisoCad();
        }
      } catch (error) {
        if (error.response) {
          Alert.alert("Erro no cadastro", error.response.data.mensagem);
        } else {
          Alert.alert("Erro", "Erro no front-end" + "\n" + error);
        }
      }
    } else {
      Alert.alert(
        "Erro de validação",
        "Por favor, corrija os erros e tente novamente."
      );
    }
  }
  console.log(usuario);

  return (
    <ImageBackground source={imgDesign} style={styles.background}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <StatusBar
          barStyle="dark-content" // ou "light-content" para texto claro
          translucent={true}
          backgroundColor="transparent"
        />
        <View style={styles.contentContainer}>
          <Image source={imgSignup} style={styles.logo} />
          <Text style={styles.paragraph}>Cadastro</Text>

          {/* <View style={[valida.rm.validado ? styles.validated : styles.invalid, styles.valRM]} id="valRM"> */}
          <View style={styles.divInput}>
            <TextInput
              keyboardType="numeric"
              placeholder="RM"
              name="usu_rm"
              style={styles.input}
              onChangeText={(value) => handleChange("usu_rm", value)}
              value={usuario.usu_rm}
            />
          </View>
          {valida.rm.mensagem.map((mens) => (
            <Text key={mens} id="rm" style={styles.small}>
              {mens}
            </Text>
          ))}
          {/* </View> */}

          {/* <View
            style={valida.nome.validado + " " + styles.valNome}
            id="valNome"
          > */}
          <View style={styles.divInput}>
            <TextInput
              name="usu_nome"
              placeholder="Nome completo"
              style={styles.input}
              onChangeText={(value) => handleChange("usu_nome", value)}
              value={usuario.usu_nome}
            />
          </View>
          {valida.nome.mensagem.map((mens) => (
            <Text key={mens} id="nome" style={styles.small}>
              {mens}
            </Text>
          ))}
          {/* </View> */}

          <View
            style={valida.email.validado + " " + styles.valNome}
            id="valEmail"
          >
            <View style={styles.divInput}>
              <TextInput
                keyboardType="email-address"
                name="usu_email"
                placeholder="E-mail"
                style={styles.input}
                onChangeText={(value) => handleChange("usu_email", value)}
                value={usuario.usu_email}
              />
            </View>
            {valida.email.mensagem.map((mens) => (
              <Text key={mens} id="email" style={styles.small}>
                {mens}
              </Text>
            ))}
          </View>

          <View style={styles.pickerContainer}>
            <View className={styles.radioOptions}>
              <Picker
                selectedValue={usuario.cur_cod}
                style={styles.radioOption}
                onValueChange={(value) => handleChange("cur_cod", value)}
                value={usuario.cur_cod}
              >
                <Picker.Item
                  label="Sel. curso técnico ou médio"
                  value={null}
                  enabled={false}
                  style={styles.firstItem}
                />
                {cursos.map((cur) => (
                  <Picker.Item
                    key={cur.cur_cod}
                    label={cur.cur_nome}
                    value={cur.cur_cod}
                    style={styles.defaultItem}
                  />
                ))}
              </Picker>
            </View>
            {/* </View> */}
          </View>
          {valida.cur_cod.mensagem.map((mens) => (
            <Text key={mens} style={styles.small}>
              {mens}
            </Text>
          ))}

          <View style={styles.password}>
            <View
              style={valida.senha.validado ? styles.success : styles.error}
              id="validaSn1"
            >
              <View style={styles.divInput}>
                <TextInput
                  name="usu_senha"
                  placeholder="Senha"
                  style={[styles.input, styles.passwordInput]}
                  secureTextEntry={!showPassword}
                  onChangeText={(value) => handleChange("usu_senha", value)}
                  value={usuario.usu_senha}
                />
                <Pressable
                  onPress={togglePasswordVisibility}
                  style={styles.passwordVisibilityIcon}
                >
                  <Ionicons
                    name={showPassword ? "eye-off" : "eye"}
                    size={24}
                    color="black"
                  />
                </Pressable>
              </View>
              {valida.senha.mensagem.map((mens) => (
                <Text key={mens} style={styles.small}>
                  {mens}
                </Text>
              ))}
            </View>
          </View>

          <View style={styles.confirmPassword}>
            <View
              style={valida.confSenha.validado ? styles.success : styles.error}
              id="validaSn2"
            >
              <View style={styles.divInput}>
                <TextInput
                  name="confSenha"
                  placeholder="Confirmar senha"
                  style={[styles.input, styles.passwordInput]}
                  secureTextEntry={!showConfirmPassword}
                  onChangeText={(value) => handleChange("confSenha", value)}
                  value={usuario.confSenha}
                />
                <Pressable
                  onPress={toggleConfirmPasswordVisibility}
                  style={styles.passwordVisibilityIcon}
                >
                  <Ionicons
                    name={showConfirmPassword ? "eye-off" : "eye"}
                    size={24}
                    color="black"
                  />
                </Pressable>
              </View>
              {valida.confSenha.mensagem.map((mens) => (
                <Text key={mens} style={styles.small}>
                  {mens}
                </Text>
              ))}
            </View>
          </View>

          <RadioButton.Group
            onValueChange={(newValue) => {
              console.log("Novo valor selecionado:", newValue); // Verifica o valor
              setValue(newValue);
            }}
            value={value}
          >
            <View style={styles.sexoForm} name="sexo" id="sexo">
              <View
                style={[
                  styles.valSexo,
                  valida.sexo.validado ? styles.success : styles.error,
                ]}
                id="valSexo"
              >
                <Text style={styles.sexo}>Sexo:</Text>
                <View style={styles.divRadio}>
                  {sexos.map((sexo) => (
                    <View key={sexo.value} style={styles.buttonRadio}>
                      <RadioButton
                        value={sexo.value}
                        color="#FF735C"
                        uncheckedColor="#CCC"
                        status={value === sexo.value ? "checked" : "unchecked"}
                      />
                      <Text>{sexo.label}</Text>
                    </View>
                  ))}
                </View>
                {valida.sexo.mensagem.map((mens) => (
                  <Text key={mens} style={styles.small}>
                    {mens}
                  </Text>
                ))}
              </View>
            </View>
          </RadioButton.Group>

          <Pressable
            onPress={() => navigation.navigate("login")}
            style={({ pressed }) =>
              pressed ? [styles.touchText, styles.TouchPress] : styles.touchText
            }
          >
            <Text style={styles.touchText}>Já tem uma conta? Faça login</Text>
          </Pressable>

          <Pressable
            onPress={handleSubmit}
            style={({ pressed }) =>
              pressed
                ? [styles.signUpButton, styles.btnPress]
                : styles.signUpButton
            }
          >
            <Text style={styles.signUpText}>Fazer cadastro</Text>
          </Pressable>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
