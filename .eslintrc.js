module.exports = {
    env: {
        "browser": true,
        "node": true,
    },
    extends: 'airbnb',
    rules: {
      "jsx-a11y/media-has-caption": 0, // when enabled points an error for medias with muted attr.
      "max-len": 0,
      "linebreak-style": 0,
      'import/no-extraneous-dependencies': ['error', {'devDependencies': true}]
    },
};
