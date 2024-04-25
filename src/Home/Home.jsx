import { useContext, useEffect } from "react";
import Detail from "../components/Detail";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { load, cityId, city, fetchCity } = useContext(AppContext);

  useEffect(() => {
    fetchCity(cityId);
  }, [cityId]);

  return (
    <div className="rounded-xl h-fit shadow-md shadow-slate-400 bg-[#E5D9F2]">
      <Detail city={city} />
    </div>
  );
};

export default Home;
