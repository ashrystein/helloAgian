module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['<rootDir>/__tests__/**/*.js', '**/?(*.)(spec|test).js?(x)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/__tests__/setup.js',
    '<rootDir>/__tests__/__mocks__'
  ],
  setupFilesAfterEnv: ['<rootDir>/__Tests__/Setup'],
  transformIgnorePatterns: ['node_modules/(?!(jest-)?react-native|)']
}
