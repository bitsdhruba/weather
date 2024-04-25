import { FiSunrise, FiSunset } from "react-icons/fi";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Forecast from "./Forecast";
import Search from "./Search";

const Detail = ({ city }) => {
  const forecast = city?.forecast.forecastday[0].hour;

  return (
    <div className="sm:flex h-fit rounded-lg shadow-lg shadow-purple-300">
      <div className=" py-3 sm:border-b-0 rounded-lg border-b-2 border-[#A594F9] backdrop-blur-sm bg-[#CDC1FF]/30 h-fit sm:w-2/5">
        <Search />
        <div className=" flex flex-col items-center w-full h-4/5 justify-center">
          <h1 className="text-3xl mt-3">{city?.location.name}</h1>
          <div className="m-4 flex items-center justify-center">
            <img
              src={city?.current.condition.icon}
              alt="condition"
              className="size-[16rem] aspect-square"
            />
          </div>
          <h1 className="text-xl capitalize">{city?.current.condition.text}</h1>
        </div>
        <div className="p-4">
          <h1 className="text-7xl font-medium mx-8">{city?.current.temp_c}℃</h1>
        </div>
      </div>

      <div className="bg-[#E5D9F2] py-3 mt-4 sm:py-0 sm:flex sm:flex-col sm:justify-between">
        <div className="w-full">
          <Forecast forecast={forecast} />
        </div>

        <div className="flex flex-wrap justify-evenly gap-4 sm:gap-8 py-3 sm:px-12">
          <div className="bg-[#CDC1FF]/50 backdrop-blur-sm size-40 p-3 rounded-xl shadow-md shadow-purple-300">
            <h1>Humidity</h1>
            <div className="flex w-full h-4/5 justify-center items-center">
              <h1 className="text-4xl">
                {city?.current.humidity}
                <span className="text-3xl">%</span>
              </h1>
            </div>
          </div>
          <div className="bg-[#CDC1FF]/50 backdrop-blur-sm size-40 p-3 rounded-xl shadow-md shadow-purple-300">
            <h1>Wind Status</h1>
            <div className="flex w-full h-4/5 justify-center items-center">
              <h1 className="text-4xl">
                {city?.current.wind_kph}
                <span className="text-2xl"> Km/h</span>
              </h1>
            </div>
          </div>
          <div className="bg-[#CDC1FF] size-40 p-3 rounded-full shadow-md shadow-purple-300">
            <h1 className="text-center mt-4">Feels Like</h1>
            <div className="flex w-full h-3/5 justify-center items-center">
              <h1 className="text-4xl">{city?.current.feelslike_c}℃</h1>
            </div>
          </div>
          <div className="bg-[#CDC1FF]/50 backdrop-blur-sm size-40 p-3 rounded-xl shadow-md shadow-purple-300">
            <h1>Sunrise & Sunset</h1>
            <div className="flex flex-col w-full h-4/5 justify-center items-center">
              <h1 className="text-2xl flex items-center">
                <span className="mr-2">
                  <FiSunrise fontSize="{20}" />
                </span>
                {city?.forecast.forecastday[0].astro.sunrise}{" "}
              </h1>
              <h1 className="text-2xl flex items-center mt-3">
                <span className="mr-2">
                  <FiSunset fontSize="{20}" />
                </span>
                {city?.forecast.forecastday[0].astro.sunset}
              </h1>
            </div>
          </div>
          <div className="bg-[#CDC1FF]/50 backdrop-blur-sm size-40 p-3 rounded-xl shadow-md shadow-purple-300">
            <h1>UV index</h1>
            <div className="flex w-full h-4/5 justify-center items-center">
              <h1 className="text-5xl">{city?.current.uv}</h1>
            </div>
          </div>
          <div className="bg-[#CDC1FF]/50 backdrop-blur-sm size-40 p-3 rounded-xl shadow-md shadow-purple-300">
            <h1>Max & Min</h1>
            <div className="flex flex-col w-full h-4/5 justify-center items-center">
              <h1 className="text-3xl flex items-center my-1">
                <span className="mr-2">
                  <IoIosArrowUp fontSize="{20}" />
                </span>
                {city?.forecast.forecastday[0].day.maxtemp_c}℃
              </h1>
              <h1 className="text-3xl flex items-center my-1">
                <span className="mr-2">
                  <IoIosArrowDown fontSize="{20}" />
                </span>
                {city?.forecast.forecastday[0].day.mintemp_c}℃
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
