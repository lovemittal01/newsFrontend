import React from "react";
import News from "./News";

const Card = () => {
  return (
    <>
      <div>
        <div className="card">
          <div className="card-header">Featured</div>
          <News />
        </div>
      </div>
    </>
  );
};

export default Card;
