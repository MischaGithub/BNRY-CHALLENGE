// jest.config.js

// Updating JEST configuration so that Jest knows how to use the image snapshot tools.

module.exports = {
    verboose: true,
    setUpFliesAfterEnv: ["./setupTest.js"],
    transform: {
        "^.+\\.js$": "babel.jest",
        "^.+\\.css$": "jest-transform-css",
        "\\.(jpg.|jpeg|png|gif|webp|svg)$": "jest-transform-file"
    }
};
