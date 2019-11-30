const WordWrap = require('../src/Wrapper');

const words = 'Amazingly few discotheques provide jukeboxes';

describe('Word Wrap', () => {
  it('should return words if no column number is provided', () => {
    const result = WordWrap.wrap(words);
    expect(result).toBe(words);
  });
});
