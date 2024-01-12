let timer;

const debounceTimer = async (inputData) => {
	clearTimeout(timer);

	const getFilteredData = async (data) => {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ data })
		};

		const resp = await fetch('/api/search', options);
		const filteredData = await resp.json();
		return filteredData;
	};

	return new Promise((resolve) => {
		timer = setTimeout(async () => {
			resolve(await getFilteredData(inputData));
		}, 400);
	});
};

export default debounceTimer;
