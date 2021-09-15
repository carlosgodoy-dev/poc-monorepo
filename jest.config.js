module.exports = {
  clearMocks: true,
  preset: 'ts-jest',
  projects: ['<rootDir>/packages/**/jest.config.js'],
  testEnvironment: 'node',
  testMatch: ['*.spec.ts'],
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '<rootDir>/build/',
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
    '(__tests__/.*.mock).tsx?$'
  ],
  coverageDirectory: '<rootDir>/coverage/',
  verbose: true
};