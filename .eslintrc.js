module.exports = {
    env: {
        "browser": true,
        "node": true,
    },
    extends: 'airbnb',
    rules: {
      "max-len": 0,
      "linebreak-style": 0,
      'import/no-extraneous-dependencies': ['error', {'devDependencies': true}]
    },
};
