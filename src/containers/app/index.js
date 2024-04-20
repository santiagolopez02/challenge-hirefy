import Card from "@/components/card";
import { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
const App = ({ countries }) => {
  const [dataCountries, setDataCountries] = useState(countries);
  const [filter, setFilter] = useState("");

  const handleInputChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    let filterArray;
    if (filter?.length >= 2) {
      filterArray = countries?.filter((item) =>
        item?.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      filterArray = countries;
    }
    setDataCountries(filterArray);
  }, [filter]);

  return (
    <div className="w-full h-full flex flex-col justify-start items-center bg-grayCustom">
      <div className="w-3/4 flex flex-col justify-center items-center mt-[60px] sm:mt-[100px]">
        <div className="relative mb-[40px]">
          <input
            type="text"
            placeholder={`Search....`}
            value={filter}
            onChange={handleInputChange}
            className="pl-12 py-1 border-2 border-grayCustom rounded-full w-[305px] h-[60px] sm:w-[576px] bg-graydark text-white"
          />
          <GoSearch className="text-[27px] absolute left-4 top-4 text-white" />
        </div>

        <div className="w-full flex flex-col justify-center items-start lg:grid lg:grid-cols-4 gap-4 bg-grayCustom">
          {dataCountries?.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              location={item.location}
              states={item.states}
              phone={item.phone}
              currency={item.currency}
              languages={item.languages}
              emoji={item.emoji}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;