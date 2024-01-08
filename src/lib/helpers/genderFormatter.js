/**
 * Returns the gender based on the given number.
 * @param {number} num - The number representing the gender.
 * @returns {string} - The corresponding gender as a string.
 */
export function getGender(num) {
	switch (num) {
		case 1:
			return 'Female';
		case 2:
			return 'Male';
		case 3:
			return 'Non-binary';
    default:
      return 'Not specified';
	}
}
