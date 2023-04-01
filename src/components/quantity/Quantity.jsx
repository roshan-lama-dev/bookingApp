import React, { useState } from "react";
import "./quantity.scss";
export const Quantity = () => {
  const [sopenOption, setOpenOption] = useState("");
  const [option, setOption] = useState({
    children: 0,
    adult: 1,
    room: 0,
  });

  const handleOption = (optionName, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [optionName]:
          operation === "i" ? option[optionName] + 1 : option[optionName] - 1,
      };
    });
  };

  const handleOnclick = () => {
    setOpenOption("hide");
  };
  console.log(sopenOption);

  return (
    <div>
      <div className={sopenOption === "hide" ? "optionItemh" : "optionItem"}>
        <div className="optionContainer">
          <div className="adultItem">
            <div className="text">
              <p>Adults</p>
            </div>
            <div className="coutner">
              <button
                disabled={option.adult <= 1}
                onClick={() => handleOption("adult", "d")}
                className="counterBtn"
              >
                -
              </button>

              <div className="counterText">{`${option.adult}`}</div>
              <button
                onClick={() => handleOption("adult", "i")}
                className="counterBtn"
              >
                +
              </button>
            </div>
          </div>
          <div className="adultItem">
            <div className="text">
              <p>Children</p>
            </div>
            <div className="coutner">
              <button
                disabled={option.children <= 0}
                className="counterBtn"
                onClick={() => handleOption("children", "d")}
              >
                -
              </button>

              <div className="counterText">{`${option.children}`}</div>
              <button
                className="counterBtn"
                onClick={() => handleOption("children", "i")}
              >
                +
              </button>
            </div>
          </div>
          <div className="adultItem">
            <div className="text">
              <p>Rooms</p>
            </div>
            <div className="coutner">
              <button
                disabled={option.room <= 0}
                className="counterBtn"
                onClick={() => handleOption("room", "d")}
              >
                -
              </button>

              <div className="counterText">{option.room}</div>
              <button
                className="counterBtn"
                onClick={() => handleOption("room", "i")}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <button onClick={handleOnclick} className="doneBtn">
          Done
        </button>
      </div>
    </div>
  );
};
