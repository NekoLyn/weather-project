import axios from "axios";

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("执行完成");
//     resolve();
//   }, 2000);
// });

const fetchWeather = async () => {
  const options = {
    method: "GET",
    url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
    params: {
      aggregateHours: "24",
      location: "Melbourne",
      ContentType: "json",
      unitGroup: "metric",
      shortColumnNames: 0,
    },
    headers: {
      "X-RapidAPI-Key": "273ZD7HZNLRWZVEJ8WJV88MTW",
      "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
    },
  };

  // axios
  //   .request(options)
  //   .then((res) => {
  //     console.log(res);
  //     axios
  //       .request(options2(res.tmp))
  //       .then((res) => console.log(res))
  //       .catch((error) => console.log(error));

  //   })
  //   .catch((error) => console.log(error));

  try {
    const response = await axios.get(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locations=Herndon,VA,20170&aggregateHours=24&unitGroup=us&shortColumnNames=false&contentType=csv&key=273ZD7HZNLRWZVEJ8WJV88MTW"
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("some thin error");
    console.error(error);

    console.log("some thin error   end");

    //if the api throws error
    throw new Error("hahahaha ");
  }

  console.log("fetchWeather");

  return "lalalala";
};

async function myFun() {
  const a = 1;

  const b = 3;
  try {
    const res = await fetchWeather();

    console.log(res);
  } catch (sss) {
    console.log("error in my Fun is: ", sss);
  }

  console.log(a);
  console.log(b);
}

console.log("start");
myFun();

console.log("end");
