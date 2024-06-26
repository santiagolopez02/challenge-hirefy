import Card from "@/components/card";
import PaginationBar from "@/components/pagination";
import { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";

const App = ({ countries }) => {
  const [dataCountries, setDataCountries] = useState(countries);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);

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
      const indexLastCard = page * 12;
      const indexFirstCard = indexLastCard - 12;
      filterArray = countries.slice(indexFirstCard, indexLastCard);
    }
    setDataCountries(filterArray);
  }, [filter]);

  useEffect(() => {
    const indexLastCard = page * 12;
    const indexFirstCard = indexLastCard - 12;
    const currentCard = countries.slice(indexFirstCard, indexLastCard);
    setDataCountries(currentCard);
  }, [page, countries]);

  return (
    <div className=" w-full h-full flex flex-col justify-start items-center ">
      <div className="w-3/4 flex flex-col justify-center items-center pt-[60px] sm:pt-[100px]">
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

        <div className="w-full h-full flex flex-col justify-center items-start xl:grid xl:grid-cols-4 gap-4 bg-transparent">
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
        <div className="my-4">
          <PaginationBar
            currentPage={page}
            setPage={(page) => {
              setPage(page);
            }}
            amount={Math.ceil(countries?.length / 12)}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
