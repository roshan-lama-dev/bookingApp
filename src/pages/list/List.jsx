import {
  faCalendar,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import React, { useState } from "react";
import { DateRange, DateRangePicker } from "react-date-range";
import { useLocation } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { Navbar } from "../../components/navbar/Navbar";

import "./list.scss";

export const List = () => {
  const location = useLocation();
  console.log(location);
  const [destination, setDestination] = useState(location.state.destination);

  const [date, setDate] = useState(location.state.date);
  const [option, setOption] = useState(location.state.option);

  // useState for the open date Range
  const [openDate, setOpenDate] = useState(false);
  const [openDate2, setOpenDate2] = useState(false);
  console.log(location);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lstitle">Search</h1>
            <div className="listItem">
              <label htmlFor="">Destination/property name:</label>

              <input
                type="text"
                placeholder="Where are you going?"
                className="inputField"
                value={destination}
              />
              <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
            </div>
            <div className="listItem1">
              <label htmlFor="">CheckIn</label>
              <div className="test">
                <div onClick={() => setOpenDate(!openDate)} className="span">
                  {`${format(date[0].startDate, "mm/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "mm/dd/yyyy"
                  )} `}
                </div>
                {openDate && (
                  <DateRange
                    setDate={date}
                    minDate={new Date()}
                    className="dateR"
                  />
                )}
                <FontAwesomeIcon icon={faCalendar} className="icont" />
              </div>
            </div>

            <div className="listItem2">
              <label htmlFor="">CheckIn</label>
              <div className="test2">
                <div onClick={() => setOpenDate2(!openDate2)} className="span2">
                  {`${format(date[0].startDate, "mm/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "mm/dd/yyyy"
                  )} `}
                </div>
                {openDate2 && (
                  <DateRange
                    setDate={date}
                    minDate={new Date()}
                    className="dateR2"
                  />
                )}
                <FontAwesomeIcon icon={faCalendar} className="icont2" />
              </div>
            </div>

            <div className="quantity">Children . {option.children}</div>
          </div>
          <div className="listResult">he</div>
        </div>
      </div>
    </div>
  );
};
