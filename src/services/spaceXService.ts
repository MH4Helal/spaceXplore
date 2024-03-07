import axios from 'axios';

const SPACE_X_API = 'https://api.spacexdata.com/latest';

export const fetchRockets = async () => {
  try {
    const response = await axios.get(SPACE_X_API + '/rockets');
    return response.data;
  } catch (error) {
    console.error('Error fetching rocket data:', error);
    return [];
  }
};

export const fetchLaunches = async () => {
    try {
      const response = await axios.get(SPACE_X_API + '/launches');
      return response.data;
    } catch (error) {
      console.error('Error fetching launch data:', error);
      return [];
    }
  };

  interface RocketData {
    flickr_images: string[];
   
}

export const fetchRocketById = async (rocketId: string): Promise<RocketData | null> => {
    try {
        const response = await fetch(`https://api.spacexdata.com/v4/rockets/${rocketId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch rocket');
        }
        const data = await response.json();
        return data as RocketData;
    } catch (error) {
        console.error('Error fetching rocket:', error);
        return null;
    }
};