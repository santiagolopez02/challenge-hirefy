import React from "react";

export default function PaginationBar({ currentPage, amount, setPage }) {
  const buttonClass =
    "hover:border-white cursor-pointer bg-graydark text-white rounded-lg  mx-1 w-[34px] h-[34px] border-grayCustom hover:border-graydark  border-2 flex justify-center items-center  active:bg-graydark";
  const activeClass =
    " hover:border-white cursor-pointer text-white rounded-lg  mx-1 w-[34px] h-[34px] border-grayCustom  border-2 flex justify-center items-center font-bold  bg-graydark mx-1  border-grayCustom  ";
  const moreClass =
    "hover:border-white bg-graydark text-white rounded-xl mx-1 pt-3 px-1 ";
  const ButtonPage = ({ page }) => {
    return (
      <p
        key={page}
        onClick={() => pushPage(page)}
        className={page === parseInt(currentPage) ? activeClass : buttonClass}
      >
        {page}
      </p>
    );
  };
  const minumunPages = Array.from({ length: amount }, (_, index) => (
    <ButtonPage page={index + 1} key={index} />
  ));
  const startNumbers = Array.from({ length: 4 }, (_, index) => {
    return <ButtonPage page={index + 1} key={index} />;
  });
  const endNumbers = Array.from({ length: 4 }, (_, index) => {
    return <ButtonPage page={amount - 3 + index} key={index} />;
  });
  const halfNumbers = Array.from({ length: 3 }, (_, index) => {
    return <ButtonPage page={currentPage - 1 + index} key={index} />;
  });

  const pushPage = (page) => {
    setPage(page);
  };

  return (
    <div className="flex">
      <p
        className=" bg-graydark text-white rounded-lg  mx-1 w-[34px] h-[34px] border-grayCustom  border-2  flex justify-center items-center"
        onClick={() => currentPage > 1 && pushPage(currentPage - 1)}
      >
        {"<"}
      </p>
      {amount <= 7 ? (
        <>{minumunPages}</>
      ) : (
        <>
          {currentPage < 4 && (
            <>
              {startNumbers}

              <p className={moreClass}>...</p>
              <ButtonPage page={amount} />
            </>
          )}

          {currentPage > 3 && currentPage < amount - 2 && (
            <>
              <ButtonPage page={1} />
              <p className={moreClass}>...</p>
              {halfNumbers}

              <p className={moreClass}>...</p>
              <ButtonPage page={parseInt(amount)} />
            </>
          )}
          {currentPage > amount - 3 && (
            <>
              <ButtonPage page={1} />

              <p className={moreClass}>...</p>
              {endNumbers}
            </>
          )}
        </>
      )}
      <p
        className=" bg-graydark rounded-lg text-white mx-1 w-[34px] h-[34px] border-grayCustom  border-2  flex justify-center items-center"
        onClick={() =>
          currentPage < amount && pushPage(parseInt(currentPage) + 1)
        }
      >
        {">"}
      </p>
    </div>
  );
}
