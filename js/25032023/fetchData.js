export default function fetchData() {
	const BASE_URL = "https://api.nasa.gov/";
	const PATH = "mars-photos/api/v1/rovers/curiosity/photos";
	const API_KEY = "DEMO_KEY";
	return fetch(`${BASE_URL}${PATH}?sol=50&page=2&api_key=${API_KEY}`).then(
		(response) => {
			if (!response.ok) {
				throw new Error(response.status);
            }
            return response;
		}
	);
}
