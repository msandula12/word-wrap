class Wrapper {
  static wrap(words, numOfColumns) {
    if (typeof numOfColumns !== 'number') {
      return words;
    }
  }
}

module.exports = Wrapper;
