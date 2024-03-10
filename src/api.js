import { Config } from "./apikey";

export const geoApioptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": Config.X_RapidAPI_Key,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const Geo_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = Config.WEATHERAPI_KEY;
