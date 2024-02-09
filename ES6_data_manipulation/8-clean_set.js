export default function cleanSet(set, startString) {
  return Array.isArray(set) && typeof startString === 'string'
    ? set
      .filter(value => typeof value === 'string' && value.startsWith(startString))
      .map(value => value.slice(startString.length))
      .join('-')
    : '';
}
