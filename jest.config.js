module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    '~/(.*)': 'src/$1',
    '\\.(css|sass|scss)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/index.{ts,tsx}',
    '!src/**/*-styles.ts',
    '!src/**/*{.interface,.enum,-styles,.type}.ts',
    '!src/presentation/common/icons/**/*',
    '!src/infra/**/*',
    '!src/main/**/*'
  ]
};
