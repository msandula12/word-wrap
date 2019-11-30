class Wrapper {
  static wrap(str, colWidth) {
    if (typeof str !== 'string') {
      throw new Error('Cannot wrap a non-string');
    }
    if (typeof colWidth !== 'number' || str.length <= colWidth) {
      return str;
    }

    const currentSection = str.substring(0, colWidth);
    const hasEmptySpace = currentSection.includes(' ');
    const charAfterColumnIsEmptySpace = str.charAt(colWidth) === ' ';

    // If current section has empty space(s), break at the last one
    const position = hasEmptySpace ? currentSection.lastIndexOf(' ') : colWidth;

    // Insert a gap if current section has empty space(s) or next section starts with one
    const gap = hasEmptySpace || charAfterColumnIsEmptySpace ? 1 : 0;

    return `${str.substring(0, position)}\n${this.wrap(
      str.substring(position + gap),
      colWidth
    )}`;
  }
}

module.exports = Wrapper;
