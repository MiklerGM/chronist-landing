const mocks = '<rootDir>/__mocks__/fileMock.js';

module.exports = {
  verbose: true,
  testURL: 'http://localhost/',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': mocks,
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js'
  }
};
