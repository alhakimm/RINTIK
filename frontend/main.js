const url = 'https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast?location=42.15%2C%2082%2C1&timesteps=1h&units=metric';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '440b6424e4mshea224b4e46b4d0ep149e81jsn29729eede8d7',
		'X-RapidAPI-Host': 'tomorrow-io1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}