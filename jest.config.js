module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!index.js", // Exclude entry point
    "!src/reportWebVitals.js", // Exclude optional files
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],
};
