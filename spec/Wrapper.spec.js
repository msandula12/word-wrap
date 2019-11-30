const WordWrap = require('../src/Wrapper');

describe('Word Wrap', () => {
  it('should return string unchanged if no column width is provided', () => {
    expect(WordWrap.wrap('Please leave me as I am!')).toBe(
      'Please leave me as I am!'
    );
  });
  it('should return string unchanged if string is shorter than column width ', () => {
    expect(WordWrap.wrap('Too short', 10)).toBe('Too short');
  });
  it('should break words at column', () => {
    expect(WordWrap.wrap('abcdefghij', 3)).toBe('abc\ndef\nghi\nj');
  });
  it('should break words at word boundary', () => {
    expect(WordWrap.wrap('Word word', 5)).toBe('Word\nword');
  });
  it('should break words after word boundary', () => {
    expect(WordWrap.wrap('Word word', 6)).toBe('Word\nword');
  });
  it('should wrap before word boundary', () => {
    expect(WordWrap.wrap('Word word', 3)).toBe('Wor\nd\nwor\nd');
  });
  it('should wrap just before word boundary', () => {
    expect(WordWrap.wrap('Word word', 4)).toBe('Word\nword');
  });
});
