import { useState } from "react";
import "./App.css";
import search from "./assets/icons/search.svg";
import { useStateContext } from "./Context";
import { BackgrounLayout, MiniCard, WeatherCard } from "./components";

function App() {
  const [input, setInput] = useState("");
  const { setPlace } = useStateContext();
  const { weather, values, thisLocation } = useStateContext();

  return (
    <div className="w-full h-screen text-white px-8">
      <nav className="w-full p-3 flex justify-between items-center">
        <h1 className="font-bold tracking-wide text-3">Weather App</h1>
        <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2">
          <img src={search} alt="search" className="w-[1.5rem] h-[1.5rem]" />
          <input
            type="text"
            className="focus:outline-none w-full text-[#212121] text-lg"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                setPlace(input);
                setInput(" ");
              }
            }}
          />
        </div>
      </nav>
      <BackgrounLayout />
      <main className="w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center">
        <WeatherCard
          temperature={weather.temp}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          place={thisLocation}
          heatIndex={weather.heatindex}
          inconString={weather.conditions}
          conditions={weather.conditions}
        />

        <div className="flex justify-center gap-8 flex-wrap w-[60%]">
          {values?.slice(1, 7).map((item) => {
            return (
              <MiniCard
                key={item.datetime}
                time={item.datetime}
                temp={item.temp}
                iconString={item.conditions}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
