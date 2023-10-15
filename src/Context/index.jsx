/* eslint-disable react/prop-types */
import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [values, setValues] = useState([]);
  const [place, setPlace] = useState("Melbourne");
  const [thisLocation, setLocation] = useState("");

  //fetch api
  // https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?location=Melbourne&aggregateHours=24&unitGroup=us&contentType=json&shortColumnNames=false&key=273ZD7HZNLRWZVEJ8WJV88MTW
  const fetchWeather = async () => {
    const options = {
      method: "GET",
      url: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast",
      params: {
        aggregateHours: "24",
        location: place,
        contentType: "json",
        unitGroup: "metric",
        shortColumnNames: 0,
        key: import.meta.env.VITE_API_KEY,
      },
      // headers: {
      //   "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      //   "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
      // },
    };

    try {
      const response = await axios.request(options);

      const thisData = Object.values(response.data.locations)[0];

      setLocation(thisData.address);
      setValues(thisData.values);
      setWeather(thisData.values[0]);
    } catch (error) {
      console.error(error);
      //if the api throws error
      alert("this place does not exist");
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [place]);

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <StateContext.Provider
      value={{
        weather,
        setPlace,
        values,
        thisLocation,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
