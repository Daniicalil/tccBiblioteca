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
import { RadioButton } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import imgSignup from "../../../../assets/imagens_telas/img_cadastro.png";
import imgDesign from "../../../../assets/imagens_telas/designPage.png";

import styles from "./styles";

export default function SignUp({ navigation }) {
  const [usuario, setUsuario] = useState({
    usu_rm: "",
    usu_nome: "",
    usu_email: "",
    usu_senha: "",
    confSenha: "",
    usu_sexo: 0,
    cur_cod: 0,
    usu_foto: "",
  });

  const [cursos, setCursos] = useState([]);

  const [errors, setErrors] = useState({});

  const valDefault = styles.formControl;
  const valSucesso = styles.formControl + " " + styles.success;
  const valErro = styles.formControl + " " + styles.error;

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const togglePasswordVisibilityConf = () => {
    setPasswordVisibleConf(!passwordVisibleConf);
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
          openModalAvisoCad();
        }
      } catch (error) {
        if (error.response) {
          alert(
            error.response.data.mensagem + "\n" + error.response.data.dados
          );
        } else {
          alert("Erro no front-end" + "\n" + error);
        }
      }
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

          <div style={valida.rm.validado + " " + styles.valRM} id="valRM">
            <div style={styles.divInput}>
              <TextInput
                keyboardType="numeric"
                name="usu_rm"
                placeholder="RM"
                style={styles.input}
                onChange={handleChange}
              />
            </div>
            {valida.rm.mensagem.map((mens) => (
              <small key={mens} id="rm" style={styles.small}>
                {mens}
              </small>
            ))}
          </div>

          <div style={valida.nome.validado + " " + styles.valNome} id="valNome">
            <div style={styles.divInput}>
              <TextInput
                name="usu_nome"
                placeholder="Nome completo"
                style={styles.input}
                onChange={handleChange}
              />

            </div>
            {
               valida.nome.mensagem.map(mens => <small key={mens} id="nome" style={styles.small}>{mens}</small>)
            }
          </div>

          <div style={valida.email.validado + ' ' + styles.valNome} id="valEmail">
            <div style={styles.divInput}>
            <TextInput
              keyboardType="email-address"
              name="usu_email"
              placeholder="E-mail"
              style={styles.input}
              onChange={handleChange}
            />

            </div>
            {
               valida.email.mensagem.map(mens => <small key={mens} id="email" style={styles.small}>{mens}</small>)
            }
          </div>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedTecnico}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedTecnico(itemValue)}
            >
              {tecnico.map((tec, index) => (
                <Picker.Item
                  key={tec.value}
                  label={tec.label}
                  value={tec.value}
                  enabled={index !== 0} // Desabilita a primeira opção
                  style={index === 0 ? styles.firstItem : styles.defaultItem} // Estilo condicional
                />
              ))}
            </Picker>
          </View>

          <View style={styles.password}>
            <TextInput
              placeholder="Senha"
              style={[
                styles.input,
                styles.passwordInput,
                errors.password && styles.inputError,
              ]}
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={setPassword}
            />
            <Pressable
              onPress={togglePasswordVisibility}
              style={styles.passwordVisibilityIcon}
            >
              <Ionicons
                name={passwordVisible ? "eye-off" : "eye"}
                size={24}
                color="black"
              />
            </Pressable>
          </View>

          <View style={styles.confirmPassword}>
            <TextInput
              placeholder="Confirmar senha"
              style={[
                styles.input,
                styles.passwordInput,
                errors.password && styles.inputError,
              ]}
              secureTextEntry={!passwordVisibleConf}
              value={passwordConf}
              onChangeText={setPasswordConf}
            />
            <Pressable
              onPress={togglePasswordVisibilityConf}
              style={styles.passwordVisibilityIcon}
            >
              <Ionicons
                name={passwordVisibleConf ? "eye-off" : "eye"}
                size={24}
                color="black"
              />
            </Pressable>
          </View>
          {errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}

          <RadioButton.Group
            onValueChange={(newValue) => setValue(newValue)}
            value={value}
          >
            <Text style={styles.sexo}>Sexo:</Text>
            <View style={styles.radioOptions}>
              <View style={styles.radioOption}>
                <RadioButton
                  value="Feminino"
                  color="#FF735C"
                  uncheckedColor="#CCC"
                />
                <Text style={styles.radioText}>Feminino</Text>
              </View>
              <View style={styles.radioOption}>
                <RadioButton
                  value="Masculino"
                  color="#FF735C"
                  uncheckedColor="#CCC"
                />
                <Text style={styles.radioText}>Masculino</Text>
              </View>
              <View style={styles.radioOption}>
                <RadioButton
                  value="Neutro"
                  color="#FF735C"
                  uncheckedColor="#CCC"
                />
                <Text style={styles.radioText}>Neutro</Text>
              </View>
              <View style={styles.radioOption}>
                <RadioButton
                  value="Padrao"
                  color="#FF735C"
                  uncheckedColor="#CCC"
                />
                <Text style={styles.radioText}>Padrão</Text>
              </View>
            </View>
          </RadioButton.Group>
          {errors.value && <Text style={styles.errorText}>{errors.value}</Text>}

          <Pressable
            onPress={() => navigation.navigate("login")}
            style={({ pressed }) =>
              pressed ? [styles.touchText, styles.TouchPress] : styles.touchText
            }
          >
            <Text style={styles.touchText}>Já tem uma conta? Faça login</Text>
          </Pressable>

          <Pressable
            onPress={handleSignUp}
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
