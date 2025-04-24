export default function cleanSet(set, startString) {
  let result = '';
  if (startString !== '') {
    set.forEach((value) => {
      if (value.startsWith(startString)) {
        result += `${value.slice(startString.length)}-`;
      }
    });
    return result.slice(0, -1); // Remove trailing hyphen
  }
  return result; // Return an empty string for an empty startString
}
