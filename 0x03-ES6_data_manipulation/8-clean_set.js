function cleanSet(set, startString) {
  const result = [...set]
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
  return result;
}

module.exports = cleanSet;
