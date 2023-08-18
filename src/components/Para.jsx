import React from "react";

const Para = () => {
  return (
    <>
      {/* <p className="card-text">
        The 2023-24 season is underway in Europe and other parts of the world.
        The transfer window is still open and it has been quite a busy summer
        for football clubs. We have seen a stark increase in the number of
        big-money deals this summer.
      </p> */}
      {Array.map((curElm) => {
        return <p className="card-text">{curElm.snippet}</p>;
      })}
    </>
  );
};

export default Para;
