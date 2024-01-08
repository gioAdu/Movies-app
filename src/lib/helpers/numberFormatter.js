/**
 * Formats a number by adding suffixes for billions, millions, and thousands.
 * @param {number} num - The number to be formatted.
 * @returns {string} The formatted number with suffix.
 */
export function formatNumber(num) {
  if (num >= 1e9) {
      return (num / 1e9).toFixed(2) + 'B';
  }
  if (num >= 1e6) {
      return (num / 1e6).toFixed(2) + 'M';
  }
  if (num >= 1e3) {
      return (num / 1e3).toFixed(2) + 'K';
  }
  return num.toString();
}
