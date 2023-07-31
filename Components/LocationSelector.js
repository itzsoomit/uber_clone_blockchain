"use client";
import React from "react";
import { useState } from "react";
const style = {
  wrapper: "pt-2",
  searchHeader:
    "w-full font-bold text-left flex items-center text-3x1 p-4 overflow-hidden text-black",
  inputBoxes: "flex flex-col mb-4 relative",
  inputBox: "h-10 mx-4 border-2 bg-[#eeeee] flex items-center my-1 py-1 px-2",
  focussedInputBox: "border-black",
  svgContainer: "mx-1",
  input:
    "my-2 rounded-2 p-2 outline-none border-none bg-transparent h-full w-full text-black",
};
const LocationSelector = () => {
  const [inFocus, setInFocus] = useState("from");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  return (
    <div className={style.wrapper}>
      <div className={style.searchHeader}>
        {inFocus == "from" ? "Where can we pick you up ?" : "Where to ?"}
      </div>
      <div
        className={`${style.inputBox} ${
          inFocus === "from" ? style.focussedInputBox : ""
        }`}
      >
        <div className={style.svgContainer}>
          <input
            className={style.input}
            placeholder="Enter pickup location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            onFocus={() => setInFocus("from")}
          ></input>
        </div>
      </div>
      <div
        className={`${style.inputBox} ${
          inFocus === "to" ? style.focussedInputBox : ""
        }`}
      >
        <div className={style.svgContainer}>
          <input
            className={style.input}
            placeholder="Enter dropoff location"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            onFocus={() => setInFocus("to")}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default LocationSelector;
