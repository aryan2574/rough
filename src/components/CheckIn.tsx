import React, { useState } from "react";
import Axios from "axios";
import "./CheckIn.css";

function CheckIn() {
  const [data, setData] = useState({
    uniqueNumber: "",
  });

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const handler = (e) => {
    const newData = e.target.value;
    setData(newData);
    console.log(newData);
  };

  const submitHandler = async (ev) => {
    ev.preventDefault();
    await timeout(3000);

    Axios.post("https://rough.free.beeceptor.com", {
      uniqueNumber: data.uniqueNumber,
    }).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div id="CheckIn">
      <form action="#" onSubmit={(e) => submitHandler(e)}>
        <div>
          <label>
            {" "}
            Enter a unique 5 digit number :
            <input
              onChange={(e) => handler(e)}
              id="uniqueNumber"
              value={data.uniqueNumber}
              type="text"
              maxLength={5}
              size={5}
              placeholder="Unique"
            />
          </label>
          <br></br>

          <input type="submit" value="Click"></input>
        </div>
      </form>
    </div>
  );
}

export default CheckIn;
