import axios from "axios";

const getWeather = async (city:string) => {
  
  try {
    const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=TKHGB9UQFGE5S7HT4MK3CBBFL&contentType=json`)

    return  response.data;
  } catch (error: any) {
    console.error(error.message, "errors");
  }
}

export default getWeather;