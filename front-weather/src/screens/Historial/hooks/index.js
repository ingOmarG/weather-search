import { useProvider } from "../../../providers";

export const UseHookHistory = () => {
  const { dataHistory } = useProvider();
  const getHistoryBycity = async (city) => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await dataHistory({ city }));
      } catch (e) {
        reject(e);
      }
    });
  };

  return { getHistoryBycity };
};
