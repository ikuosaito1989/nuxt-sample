module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/$1',
    '^~/(.*)$': '<rootDir>/app/$1',
    '^vue$':    'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform:            {
    '^.+\\.ts$':   'ts-jest',
    '^.+\\.js$':   'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  coverageThreshold: {
    global: {
      branches:   100,
      functions:  100,
      lines:      100,
      statements: 100,
    },
  },
  collectCoverage:     true,
  collectCoverageFrom: [
    '<rootDir>/app/**/*.{js,vue}',
  ],
}
