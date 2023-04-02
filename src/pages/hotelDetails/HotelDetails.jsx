import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Header } from "../../components/header/Header";
import { Maillist } from "../../components/mailList/Maillist";
import { Navbar } from "../../components/navbar/Navbar";
import "./hotelDetails.scss";
export const HotelDetails = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/92804606.jpg?k=bcfe85235f9db5bbcab3746d10a4c30399983563d9a73fe9adcbb3267b38ae84&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/91701415.jpg?k=2a38973cff76a7587b1b49c275c868eceeff6165b9d4d1070a574684e59fe430&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/91701413.jpg?k=e789eae67017ad267f44fc71372c493d5cb3f6800744c1308e8b248afcde726c&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/91700367.jpg?k=db4b1b28fadd34ab9d4e642986f9e831135501ec494b4a6458141847edad0d0d&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/208408158.jpg?k=82d236c19acaac6a5cd18473522e294df438bab779d71df5f69f8d956d8a5b22&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/208408158.jpg?k=82d236c19acaac6a5cd18473522e294df438bab779d71df5f69f8d956d8a5b22&o=&hp=1",
    },
  ];
  const handleOnClick = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleArrowClick = (position) => {
    let SliderNumber;
    if (position === "i") {
      SliderNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      SliderNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(SliderNumber);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleArrowClick("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleArrowClick("r")}
            />
          </div>
        )}

        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now !</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>

          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airpot taxi
          </span>

          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOnClick(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>

          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Stay in the heart of Sydney</h1>
              <p className="hotelDesc">
                You're eligible for a Genius discount at Best Western Sanctuary
                Inn! To save at this property, all you have to do is sign in.
                Best Western Sanctuary Inn offers 4-star accommodations and an
                on-site restaurant called Riviera Bar & Grill. The motel is
                located just a few minutes' walk from the center of Tamworth, a
                supermarket and Bicentennial Park. Guests enjoy a free
                continental breakfast for two people per room, per day. An a la
                carte breakfast menu is available at an additional cost. All
                well-appointed guest rooms include an HD LCD large TV. Reverse
                cycle air-conditioning, free high-speed WiFi, bathrobes,
                over-sized fluffy white towels and high quality mattresses with
                crisp white sheets. Guests enjoy complimentary access at the
                offsite gym Advance Fitness Tamworth open 24 hours. Revive,
                unwind and relax, with a swim in the salt water pool or a soak
                in the spa. You can prepare a meal in the BBQ area in the
                evening. Enjoy delicious food at the award winning Riviera Bar
                and Grill, open daily for breakfast and dinner, offering a range
                of cuisines, including Italian, Mediterranean and French
                available every day. Room service is available for dinner 7
                days. For those wanting to book a conference of business
                meeting, the property has multiple convention and meeting spaces
                with flexible floor plans. There are 2 pet friendly rooms
                available. The Best Western Sanctuary Inn & restaurant the
                Riviera Bar and Grill received the 2021 Trip Adviser Certificate
                of Excellence. The property is within a 10-minute drive of the
                airport, Tamworth Regional Entertainment Center, Australian
                Equine Center, hockey, football and basketball stadiums, the
                Tamworth Base Hospital and the Tamworth Racecourse.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>

              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>

      <Maillist />
    </div>
  );
};
