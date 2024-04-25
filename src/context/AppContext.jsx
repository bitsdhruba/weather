import axios from "axios";
import { createContext, useState } from "react";
import { cityDetail, searchCity } from "../api/api";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [load, setLoad] = useState(false);
  const [cities, setCities] = useState();
  const [query, setQuery] = useState("");

  const searchHandler = (event) => {
    setQuery(event.target.value);
  };

  const fetchCities = async (city) => {
    setLoad(true);
    if (query.length > 4) {
      try {
        const { data } = await axios.get(searchCity(city));
        setCities(data);
        setLoad(false);
      } catch (error) {
        console.log(error, "oopss.. something went wrong !");
      }
    }
  };

  const [cityId, setCityId] = useState();
  const [city, setCity] = useState();

  const fetchCity = async (id) => {
    setLoad(true);
    try {
      const { data } = await axios.get(cityDetail(id));
      setCity(data);
      setLoad(false);
    } catch (error) {
      console.log(error, "oopss.. something went wrong !");
    }
  };

  const value = {
    load,
    query,
    setQuery,
    cities,
    searchHandler,
    fetchCities,
    cityId,
    setCityId,
    city,
    fetchCity,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
