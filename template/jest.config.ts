export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    testMatch: ['**/*.test.ts', '**/*.test.tsx'],
    transformIgnorePatterns: [
        '/node_modules/',
    ],
    moduleNameMapper: {
        '\\.css$': 'identity-obj-proxy',
    },
};
