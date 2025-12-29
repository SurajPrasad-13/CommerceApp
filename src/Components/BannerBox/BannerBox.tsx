import React from "react";
import { Link } from "react-router-dom";

const BannerBox = (props) => {
  return (
    <div className="box bannerBox rounded-lg overflow-hidden group">
      <Link to={props.link}>
        <img src={props.img} className="w-full transition-all group-hover:scale-105 duration-300" alt="banner img" />
      </Link>
    </div>
  );
};

export default BannerBox;
