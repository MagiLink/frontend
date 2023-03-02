import axios from 'axios';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const getAllComponents = async (setAllComponents) => {
	try {
		const results = await axios.get(`${SERVER_URL}/library`);
		setAllComponents(results.data);
	} catch (error) {
		console.log('error getting all components from library: ', error);
	}
};

export const groupBy = (objectArray, property) => {
	return objectArray.reduce((acc, obj) => {
		const key = obj[property];
		const curGroup = acc[key] ?? [];

		return { ...acc, [key]: [...curGroup, obj] };
	}, {});
};
