module.exports = {
  preset: 'jest-puppeteer',
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
 },
  moduleFileExtensions: ['js', 'ts', "vue"],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
    ".*\\.(vue)$": "@vue/vue3-jest",
  },
  transformIgnorePatterns: [
    "node_modules/",
  ],
  testMatch: ['<rootDir>/tests/**/*.+(ts|js)'],
  setupFilesAfterEnv: ['./jest.setup.ts']
};