/**
 * Formats the runtime in minutes to a human-readable format.
 * @param {number} runtime - The runtime in minutes.
 * @returns {string} - The formatted runtime string.
 */
export function formatRuntime(runtime) {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  
  if (hours === 0) {
    return `${minutes}m`;
  } else {
    return `${hours}h ${minutes}m`;
  }
}