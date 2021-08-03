import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const useProvider = () => {
  const dataWeather = ({ city }) => {
    return axios({
      method: "post",
      url: "weather",
      data: {
        city,
      },
    });
  };

  const dataHistory = ({ city }) => {
    return axios({
      method: "post",
      url: `history`,
      data: {
        city,
      },
    });
  };

  return {
    dataWeather,
    dataHistory,
  };
};
