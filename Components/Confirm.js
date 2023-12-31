"use client"
import React from "react"
import RideSelector from "./RideSelector"
const style = {
  wrapper: "flex-1 h-full flex flex-col justify-between",
  rideSelectorContainer: "h-full flex flex-col overflow-scroll",
  confirmButtonContainer:
    "border-black text-black m-4 py-4 text-center text-x1",
  confirmButton: "bg-black text-white m-4 py-4 text-center text-x1",
};

const Confirm=()=>{
  const storeTripDetails = async () => {};
  return (
    <div className={style.wrapper}>
      <div className={style.rideSelectorContainer}>
        <RideSelector />
        <div className={style.confirmButtonContainer}>
          <div className={style.confirmButtonContainer}>
            <div
              className={style.confirmButton}
              onClick={() => storeTripDetails()}
            >
              Confirm Uber
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;