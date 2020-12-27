module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
};
