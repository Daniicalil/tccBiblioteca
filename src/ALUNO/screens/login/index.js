import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  ImageBackground,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { API_URL, API_PORT } from "@env";
import { Ionicons } from "@expo/vector-icons";
import imgLogin from "../../../../assets/imagens_telas/6737457.png";
import imgDesign from "../../../../assets/imagens_telas/designPage.png";
import styles from "./styles";
// import api from "../../../services/api";

// export default function Login({ navigation }) {
const apiUrl = API_URL; // URL da API
const apiPorta = API_PORT; // Porta da API
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [errors, setErrors] = useState({});

//   const [senha, setSenha] = useState("");
//   const [login, setLogin] = useState("");

//   const valDefault = styles.formControl;
//   const valSucesso = styles.formControl + " " + styles.success;
//   const valErro = styles.formControl + " " + styles.error;

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   function handleSubmit(event) {
//     event.preventDefault();
//     const validLogin = validaLogin();
//     const validSenha = validaSenha();

//     if (validLogin && validSenha) {
//       logar();
//     }
//   }

//   async function logar(login, senha) {
// const navigation = useNavigation();

//     try {
//       const dados = {
//         usu_email_rm: login,
//         usu_senha: senha,
//       };

//       const response = await api.post("/usu_login", dados);

//       if (response.data.sucesso == true) {
//         const usuario = response.data.dados;
//         const objLogado = {
//           cod: usuario.usu_cod,
//           nome: usuario.usu_nome,
//           acesso: usuario.usu_tipo,
//           curso: usuario.cur_cod,
//         };
//         // signin(JSON.stringify(objLogado));

// await AsyncStorage.clear();
// await AsyncStorage.setItem("user", JSON.stringify(objLogado));

//         navigation.navigate('telaInicial');
//       } else {
//         Alert("Erro: " + response.data.mensagem + "\n" + response.data.dados);
//       }
//     } catch (error) {
//       if (error.response) {
//         Alert(
//           error.response.data.dados == null
//             ? error.response.data.mensagem
//             : error.response.data.mensagem + "\n" + error.response.data.dados
//         );
//       } else {
//         Alert("Erro no front-end" + "\n" + error);
//       }
//     }
//   }

//   useEffect(() => {
//     // Limpar estado quando o componente for desmontado
//     return () => {
//       setLogin("");
//       setSenha("");
//       setErrors({});
//     };
//   }, []);

//   // validação
//   const [valida, setValida] = useState({
//     login: {
//       validado: valDefault,
//       mensagem: [],
//     },
//     senha: {
//       validado: valDefault,
//       mensagem: [],
//     },
//   });

//   function validaLogin() {
//     let objTemp = {
//       validado: valSucesso,
//       mensagem: [],
//     };

//     if (login === "") {
//       objTemp.validado = valErro;
//       objTemp.mensagem.push("Preencha o campo com RM ou E-mail");
//     } else if (login.length < 6) {
//       objTemp.validado = valErro;
//       objTemp.mensagem.push("Informação inválida");
//     }

//     setValida((prevState) => ({
//       ...prevState,
//       login: objTemp,
//     }));

//     return objTemp.mensagem.length === 0;
//   }

//   function validaSenha() {
//     let objTemp = {
//       validado: valSucesso,
//       mensagem: [],
//     };

//     if (senha === "") {
//       objTemp.validado = valErro;
//       objTemp.mensagem.push("Preencha o campo senha");
//     } else if (senha.length < 6) {
//       objTemp.validado = valErro;
//       objTemp.mensagem.push("Número de caracteres inválido");
//     }

//     setValida((prevState) => ({
//       ...prevState,
//       senha: objTemp,
//     }));

//     return objTemp.mensagem.length === 0;
//   }

//   return (
//     <ImageBackground source={imgDesign} style={styles.background}>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <StatusBar
//           barStyle="dark-content"
//           translucent={true}
//           backgroundColor="transparent"
//         />
//         <View style={styles.contentContainer}>
//           <Image source={imgLogin} style={styles.logo} />
//           {/* <View className={styles.conteudo} onSubmit={handleSubmit}> */}
//           <Text style={styles.paragraph}>Login</Text>
//           <TextInput
//             placeholder="RM ou e-mail"
//             style={[
//               styles.input,
//               valida.login.validado === valErro && styles.inputError,
//             ]}
//             value={login}
//             onChangeText={(text) => setLogin(text)}
//           />
//           {valida.login.mensagem.length > 0 && (
//             <Text style={styles.errorMessage}>
//               {valida.login.mensagem[0]}
//             </Text>
//           )}

//           <View style={styles.password}>
//             <TextInput
//               placeholder="Senha"
//               style={[
//                 styles.input,
//                 styles.passwordInput,
//                 valida.senha.validado === valErro && styles.inputError,
//               ]}
//               secureTextEntry={!passwordVisible}
//               value={senha}
//               onChangeText={(text) => setSenha(text)}
//             />
//             <Pressable
//               onPress={togglePasswordVisibility}
//               style={styles.passwordVisibilityIcon}
//             >
//               <Ionicons
//                 name={passwordVisible ? "eye-off" : "eye"}
//                 size={24}
//                 color="black"
//               />
//             </Pressable>
//           </View>
//           {valida.senha.mensagem.length > 0 && (
//             <Text style={styles.errorMessage}>
//               {valida.senha.mensagem[0]}
//             </Text>
//           )}
//           <Pressable
//             onPress={() => navigation.navigate("signUp")}
//             style={({ pressed }) =>
//               pressed ? [styles.touchText, styles.TouchPress] : styles.touchText
//             }
//           >
//             <Text style={styles.touchText}>Não tem cadastro? Cadastre-se</Text>
//           </Pressable>

//           <Pressable
//             onPress={() => navigation.navigate("esqueceuSenha1")}
//             style={({ pressed }) =>
//               pressed ? [styles.touchText, styles.TouchPress] : styles.touchText
//             }
//           >
//             <Text style={styles.touchText}>Esqueceu a senha?</Text>
//           </Pressable>

//           <Pressable
//             onPress={handleSubmit}
//             style={({ pressed }) =>
//               pressed
//                 ? [styles.loginButton, styles.btnPress]
//                 : styles.loginButton
//             }
//           >
//             <Text style={styles.loginText}>Fazer login</Text>
//           </Pressable>
//         </View>
//         {/* </View> */}
//       </ScrollView>
//     </ImageBackground>
//   );
// }

//CÓDIGO PARA FAZER LOGIN SEM A API --------------------------------------------------------------------------------------------------------------------------------------------------

export default function Login({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [rm, setRm] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Clear state when component unmounts
    return () => {
      setRm("");
      setPassword("");
      setErrors({});
    };
  }, []);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = () => {
    const newErrors = {};
    if (!rm) newErrors.rm = "*Preencha o campo";
    if (!password) newErrors.password = "*Preencha o campo";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Navigate to 'Home' screen and clear login fields
      setRm("");
      setPassword("");
      navigation.navigate("Home");
    }
  };

  return (
    <ImageBackground source={imgDesign} style={styles.background}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image source={imgLogin} style={styles.logo} />
        <Text style={styles.paragraph}>Login</Text>
        <TextInput
          placeholder="RM ou e-mail"
          style={[styles.input, errors.rm && styles.inputError]}
          value={rm}
          onChangeText={setRm}
        />
        {errors.rm && <Text style={styles.errorText}>{errors.rm}</Text>}

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
          <Pressable onPress={togglePasswordVisibility}>
            <Text style={styles.showPassword}>Mostrar</Text>
          </Pressable>
        </View>
        {errors.password && (
          <Text style={styles.errorText}>{errors.password}</Text>
        )}

        <Pressable onPress={() => navigation.navigate("signUp")}>
          <Text style={styles.touchText}>Não tem cadastro? Cadastre-se</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("esqueceuSenha1")}>
          <Text style={styles.touchText}>Esqueceu a senha?</Text>
        </Pressable>

        <Pressable onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.loginText}>Fazer login</Text>
        </Pressable>
      </ScrollView>
    </ImageBackground>
  );
}
