module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react-jsx',
      },
      useESM: true,
    },
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/$1',
  },
  preset: 'ts-jest/presets/js-with-ts-esm',
  setupFiles: ['<rootDir>/text-encoder.mock.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': ['babel-jest', { presets: ['next/babel'] }],
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
