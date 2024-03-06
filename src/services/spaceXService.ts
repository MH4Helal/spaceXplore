import axios from 'axios';

const SPACE_X_API = 'https://api.spacexdata.com/latest/rockets';

export const fetchRockets = async () => {
  try {
    const response = await axios.get(SPACE_X_API);
    return response.data;
  } catch (error) {
    console.error('Error fetching rocket data:', error);
    return [];
  }
};
