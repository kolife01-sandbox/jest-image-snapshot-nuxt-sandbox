module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    ".*\\.(vue)$": "@vue/vue3-jest",
  },
  transformIgnorePatterns: [
    "node_modules/",
  ],
  testMatch: ['<rootDir>/tests/**/*.+(ts|js)'],
  setupFilesAfterEnv: ['./jest.setup.ts']
};