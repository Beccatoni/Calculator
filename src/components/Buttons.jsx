import React from "react";

const Buttons = ({ handleClick }) => {
  const buttons = [
    "AC",
    "+/-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  const buttonElements = buttons.map((btn, index) => (
    <button
      key={index}
      type="button"
      className={`${
        ["AC", "+/-", "%"].includes(btn)
          ? "bg-[#DBDBDB]"
          : ['/', '*', '=', '+', '-'].includes(btn)
          ? "bg-orange-500"
          : btn === "0"
          ? "col-span-2 bg-[#DBDBDB] w-[10rem]"
          : "bg-[#DBDBDB]"
      } h-[4rem] w-[4rem] rounded`}
      onClick={()=>handleClick(btn)}
    >
      {btn}
    </button>
  ));
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-1 text-black text-xl font-medium">
      {buttonElements}
    </div>
  );
};

export default Buttons;
