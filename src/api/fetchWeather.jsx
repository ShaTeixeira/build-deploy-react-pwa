import axios from 'axios'

export const fetchWeather = async (query) => {
  const { data } = await axios.get(import.meta.env.VITE_URL, {
    params: {
      q: query,
      APPID: import.meta.env.VITE_API_KEY,
    }
  })

  return data;
}