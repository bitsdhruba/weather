import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Search = () => {
  const { query, setQuery, searchHandler, cities, fetchCities, setCityId } =
    useContext(AppContext);

  useEffect(() => {
    fetchCities(query);
  }, [query]);

  const detailHandler = (id) => {
    setCityId(id);
    setQuery("");
  };

  return (
    <div>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Enter City Name"
          name="query"
          onChange={searchHandler}
          className="rounded-xl px-3 py-2 w-[24rem] h-12 text-lg border-2 border-[#A594F9] bg-[#E5D9F2] focus:border-[#7371FC] focus:scale-[1.025] focus:outline-none shadow-md shadow-[#CDC1FF] placeholder-[#A594F9]"
        />
      </div>

      <div>
        {query.length > 3 && cities?.length > 0 ? (
          <div className="bg-[#cdc1ffee]">
            {cities?.map((city) => {
              return (
                <div key={city.id} className="">
                  <button
                    className="w-full h-[2.5rem] border-b-2 border-[#a091db] rounded-lg text-lg text-[#1a1952]"
                    onClick={() => detailHandler(city.id)}
                  >
                    {city.name}, {city.country}
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Search;
