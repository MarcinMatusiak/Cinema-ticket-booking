import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	// headers: 'api_key: 90c5cb06ac52c1395de20502caaa6a51'
});
