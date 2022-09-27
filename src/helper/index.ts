/* eslint-disable no-plusplus */

/**
 *
 * @param array
 * @returns a randomized array
 */
export const shuffle = (array: any[]) => {
	let currentIndex = array.length;
	let randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex !== 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
};

/**
 *
 * @param array
 * @returns true if all elements in the array are same
 */
export const allElementsAreEqual = (array: any[]) => {
	const result = array.every((element: any) => {
		if (element === array[0]) {
			return true;
		}

		return false;
	});

	return result;
};
