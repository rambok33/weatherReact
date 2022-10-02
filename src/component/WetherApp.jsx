import React, { useState } from "react";
import "./styles.css";
import axios from "axios";

const WetherApp = () => {
  const [data, setdata] = useState("");
  const [op, updateop] = useState();
  const [search, setsearch] = useState({
    temp: 0,
    temp_min: 0,
    temp_max: 0,
  });
  const handle = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=8bb14a971f2673471b0575b87765e38b&units=metric`
      )

      .then((responce) => {
        const hello = responce.data;
        console.log(hello);
        setsearch({
          temp: responce.data.main.temp,
          temp_min: responce.data.main.temp_min,
          temp_max: responce.data.main.temp_max,
        });
      });
  };
  const onsubmit = () => {
    updateop(data);
  };

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="serach"
            value={data}
            className="inputField"
            placeholder="Enter Your City"
            onChange={(event) => {
              setdata(event.target.value);
            }}
          />

          <button
            className="inputField1"
            onClick={() => {
              handle();
              onsubmit();
            }}
          >
            Get Temp
          </button>
        </div>
        <div className="info">
          <h2 className="location">
            <i className=" temp fas fatreet-view">{op}</i>
          </h2>
          <h3 className="temp">{search.temp} °C</h3>
          <h3 className="tempmin_max">
            min: {search.temp_min} || max: {search.temp_max}
          </h3>
        </div>
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>

      <div className="footer">
        <div id="button"></div>
        <div id="container">
          <div id="cont">
            <div className="footer_center">
              <h3>
                2022{" "}
                <a href="https://flicker786.github.io/portfolioo/">Flicker</a> A
                Right Reserved.
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* <footer className='body1'>
 2022 <a href='https://flicker786.github.io/portfolioo/'>Flicker</a> A Right Reserved.
</footer> */}
    </>
  );
};

export default WetherApp;
