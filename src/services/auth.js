import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'SmoakBook';

// Verifica se o usuário está logado
const isLogged = async () => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY);
    return !!value; // Retorna true se houver um token armazenado
  } catch (error) {
    console.error("Erro ao verificar login:", error);
    return false;
  }
};

// Salva o token de login
const login = async (token) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, token);
  } catch (error) {
    console.error("Erro ao salvar token:", error);
  }
};

// Remove o token de login
const logout = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Erro ao remover token:", error);
  }
};

// Obtém os dados do token armazenado
const getDados = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error("Erro ao obter dados:", error);
    return null;
  }
};

export { isLogged, login, logout, getDados };
