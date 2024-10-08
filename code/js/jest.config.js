module.exports = {
    verbose: true,
    roots: [
      "./tests"
    ],
    coveragePathIgnorePatterns: [
      "/node_modules/",
      "/tests/"
    ],
    collectCoverage: true,
    testEnvironment: 'node',
    reporters: ['default', ['jest-to-sonar', {
      outputFile: './coverage/sonar-report.xml',
    }]]
  };