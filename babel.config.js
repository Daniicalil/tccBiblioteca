module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',  // Plugin para React Native Reanimated
    ['module:react-native-dotenv', {
      moduleName: '@env',
      path: '.env',
    }],
    '@babel/plugin-transform-private-methods',  // Adicionado para suportar métodos privados
    '@babel/plugin-transform-class-properties', // Adicionado para suportar propriedades privadas
    '@babel/plugin-transform-private-property-in-object', // Adicionado para suportar propriedades privadas em objetos
  ],
  overrides: [
    {
      // Garantir que o modo loose seja configurado
      plugins: [
        ['@babel/plugin-transform-class-properties', { loose: true }],
        ['@babel/plugin-transform-private-methods', { loose: true }],
        ['@babel/plugin-transform-private-property-in-object', { loose: true }],
      ]
    }
  ]
};
