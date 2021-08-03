import { HomeLayout } from "../../layout/HomeLayout";

import GoogleMapReact from "google-map-react";
import { TextFieldSearch } from "../../components/Input/TextField";
import { Marker } from "../../components/MarkerMap";
import { useState } from "react";
import { UseHome } from "./hooks";

export const Home = () => {
  const [city, setCity] = useState();
  const { getWeatherBycity } = UseHome();
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeatherBycity(city).then(({ data }) => {
      if (data.cod === 200) {
        setData(data);
      }
    });
  };

  return (
    <HomeLayout>
      <div className="relative h-full">
        <GoogleMapReact
          mapContainerStyle={{ height: "100vh", width: "100%" }}
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_KEY,
            libraries: ["places"],
          }}
          center={{
            lat: data?.coord?.lat || 27.994402,
            lng: data?.coord?.lon || -81.760254,
          }}
          defaultCenter={{ lat: 27.994402, lng: -81.760254 }}
          options={{ fullscreenControl: false, clickableIcons: false }}
          defaultZoom={7}
          yesIWantToUseGoogleMapApiInternals
        >
          <Marker
            data={data}
            lat={data?.coord?.lat || 27.9944}
            lng={data?.coord?.lon || -81.760254}
          />
        </GoogleMapReact>
        <div className="absolute inset-x-0 top-0 mt-4 lg:mt-10">
          <form onSubmit={handleSubmit}>
            <TextFieldSearch onChange={handleChange} />
          </form>
        </div>
      </div>
    </HomeLayout>
  );
};
