export const Marker = ({ data }) => {
  const { weather, main } = data || {};
  const [dataW ] = weather || [];
  const { icon, description } = dataW || {};
  const { temp } = main || {};

  return (
    <>
      {data?.weather?.length > 0 && (
        <div className="bg-white h-auto w-48 rounded-xl flex justify-center items-center space-x-6">
          <div className="w-1/3">
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={description}
              className="w-auto"
            />
          </div>
          <div className="w-2/3 flex justify-center">
            <h2 className="text-3xl font-bold">{temp}°</h2>
          </div>
        </div>
      )}
    </>
  );
};
