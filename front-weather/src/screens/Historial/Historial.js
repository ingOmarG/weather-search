import { useState } from "react";
import { HomeLayout } from "../../layout/HomeLayout";
import { UseHookHistory } from "./hooks";

export const Historial = () => {
  const [select, setSelect] = useState();
  const [dataHistory, setDataHistory] = useState([]);
  const { getHistoryBycity } = UseHookHistory();

  const handleChange = (e) => {
    setSelect(e.target.value);
    getHistoryBycity(e.target.value).then((resp) => {
      console.log(resp);
      setDataHistory(resp.data);
    });
  };
  return (
    <HomeLayout>
      <div className="flex flex-col pt-4 px-8">
        <div className="flex justify-center">
          <select
            onChange={handleChange}
            value={select}
            className="rounded-lg bg-transparent border border-gray-200 py-3 w-72 outline-none px-2"
          >
            <option value="Orlando">Orlando</option>
            <option value="Miami">Miami</option>
            <option value="New york">New york</option>
          </select>
        </div>
        <div>
          <div className="w-full flex flex-wrap justify-between pt-10">
            {dataHistory.length > 0 &&
              dataHistory.map((data) => (
                <div className="w-1/2 lg:w-1/5 flex flex-col text-center pb-8 -mx-3 shadow-xl rounded-2xl">
                  <img  src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`} alt="Icon Clima" className="mx-auto" />
                  <h2 className="text-4xl font-bold">{data.temp}°</h2>
                  <h2 className="text-lg font-normal">{data.date}</h2>
                </div>
              ))}
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};
