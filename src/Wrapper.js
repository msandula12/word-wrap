class Wrapper {
  static wrap(str, colWidth) {
    if (typeof colWidth !== 'number' || str.length <= colWidth) {
      return str;
    }

    // If substring contains empty space(s), break on the last one
    const emptySpaceIndex = str.substring(0, colWidth).lastIndexOf(' ');
    if (emptySpaceIndex !== -1) {
      return `${str.substring(0, emptySpaceIndex)}\n${this.wrap(
        str.substring(emptySpaceIndex + 1),
        colWidth
      )}`;
      // New lines should not start with empty space
    } else if (str.charAt(colWidth) === ' ') {
      return `${str.substring(0, colWidth)}\n${this.wrap(
        str.substring(colWidth + 1),
        colWidth
      )}`;
    } else {
      return `${str.substring(0, colWidth)}\n${this.wrap(
        str.substring(colWidth),
        colWidth
      )}`;
    }
  }
}

module.exports = Wrapper;
