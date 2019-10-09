module.exports = function(config) {
  config.set({
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["html", "clear-text", "progress", "dashboard"],
    testRunner: "jest",
    transpilers: [],
    coverageAnalysis: "off",
    mutate: [
        "**/interval.js",
        "**/book.repository.js"
    ],
    thresholds: {
        high: 80,
        low: 70,
        break: 70,
    }
  });
};
