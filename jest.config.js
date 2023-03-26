module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    '@testing-library/react-native/cleanup-after-each'
  ]
};
