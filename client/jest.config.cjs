module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!some-module-to-transform).+\\.jsx?$"
  ],
};
