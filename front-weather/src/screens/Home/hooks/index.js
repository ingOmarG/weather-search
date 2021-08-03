import { useProvider } from "../../../providers";

export const UseHome = () => {
  const { dataWeather } = useProvider();
  const getWeatherBycity = async (city) => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await dataWeather({ city }));
      } catch (e) {
        reject(e);
      }
    });
  };

  return { getWeatherBycity };
};
