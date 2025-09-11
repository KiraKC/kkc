module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
      '^.+\\.jsx?$': 'babel-jest',
    },
    testEnvironment: 'jsdom', // Use jsdom for testing React components
    moduleNameMapper: {
      '\\.(css|less|scss)$': 'identity-obj-proxy', // Mock CSS imports
    },
  };