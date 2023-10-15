import { useState, useEffect } from "react";
import { useStateContext } from "../Context";
//import images
import Clear from "../assets/images/Clear.jpg";
import Fog from "../assets/images/fog.png";
import Cloudy from "../assets/images/Cloudy.jpg";
import Rainy from "../assets/images/Rainy.jpg";
import Snow from "../assets/images/snow.jpg";
import Stormy from "../assets/images/Stormy.jpg";
import Sunny from "../assets/images/Sunny.jpg";

const BackgroundLayout = () => {
  const { weather } = useStateContext();
  const [image, setImage] = useState(Clear);
  useEffect(() => {
    if (weather.conditions) {
      let imageString = weather.conditions.toLowerCase();
      if (imageString.includes("clear")) {
        setImage(Clear);
      } else if (imageString.includes("fog")) {
        setImage(Fog);
      } else if (imageString.includes("cloud")) {
        setImage(Cloudy);
      } else if (
        imageString.includes("rain") ||
        imageString.includes("shower")
      ) {
        setImage(Rainy);
      } else if (imageString.includes("snow")) {
        setImage(Snow);
      } else if (
        imageString.includes("thunder") ||
        imageString.includes("storm")
      ) {
        setImage(Stormy);
      } else if (imageString.includes("sun")) {
        setImage(Sunny);
      }
    }
  }, [weather]);

  return (
    <img
      src={image}
      alt="weather-background-image"
      className="h-screen-full fixed left-0 top-0 -z-[10]"
    />
  );
};

export default BackgroundLayout;
