module.exports = {
  transform: {
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
    '^.+\\.js$': 'babel-jest',
  },
};