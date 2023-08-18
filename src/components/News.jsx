import React, { useEffect, useState } from "react";
import axios from "axios";
import Array from "./data";

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:3001/get-news");
      const data = await response.json();
      setNewsData(data);
    } catch (error) {
      console.log("Error", error);
    }
  }

  return (
    <>
      {newsData.map((curElm) => {
        return (
          <div className="card-div">
            <div className="card-body">
              <a href={curElm.link} className="card-title">
                {curElm.title}
              </a>
              <p className="card-text">{curElm.snippet}</p>
              <a href={curElm.link} className="btn btn-primary" target="_blank">
                View More
              </a>
            </div>
            <div className="card-imgh">
              <div className="card-img">
                <img src="./4500.avif" alt="photo" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default News;