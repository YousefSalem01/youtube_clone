import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
    params: {
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
    const apiUrl = `${BASE_URL}/${url}`;
    try {
      const { data } = await axios.get(apiUrl, options);
      console.log("API Responseeeeeeee:", data);
      return data;
    } catch (error) {
      console.error("API Request Errorrrrrrrrrrrrrr:", error); 
      throw error;
    }
  }