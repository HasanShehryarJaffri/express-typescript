module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
  collectCoverageFrom: [
    "src/api/controllers/*.{js,ts}",
    "src/api/services/*.{js,ts}",
    "!<rootDir>/node_modules/"
  ],
  coverageThreshold: {
    global: {
      lines: 80,
      statements: 80
    }
  }
};