import React, { useEffect, useState } from "react";
import axios from "axios";
import Array from "./data";

const News = () => {
  const [newsData, setNewsData] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get("http://18.221.59.245:3001/get-news");
      // const data = await response.json();
      console.log(response);
      setNewsData(response.data.news);
    } catch (error) {
      console.log("Error", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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
