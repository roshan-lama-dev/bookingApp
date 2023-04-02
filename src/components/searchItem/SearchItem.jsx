import React from "react";
import "./searchItem.scss";
export const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/208404997.jpg?k=35ba7e7541838d7f8b54bde12494156278b61b385979ef3efb3eb20db184abcf&o=&hp=1"
        alt=""
        className="siImg"
      />

      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio. 1 bathroom . 21m2 1 full bed
        </span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today
        </span>
      </div>

      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>

        <div className="siDetailTexts">
          <span className="siPrice">$132</span>

          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButon">See availability</button>
        </div>
      </div>
    </div>
  );
};
