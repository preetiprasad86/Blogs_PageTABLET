import React from "react";
import Frame1587 from "../Frame1587";
import "./Frame15982.css";

function Frame15982(props) {
  const { blogThumbnail, address, text219, text220, className, frame1587Props } = props;

  return (
    <div className={`frame-1598 ${className || ""}`}>
      <div className="blog-thumbnail" style={{ backgroundImage: `url(${blogThumbnail})` }}></div>
      <div className="address-1 valign-text-middle overpass-semi-bold-scarpa-flow-16px">{address}</div>
      <div className="text valign-text-middle typographyheadlineh5-extrabold-20">{text219}</div>
      <p className="text-4 typography-body-smalltext-14-regular">{text220}</p>
      <Frame1587 text74={frame1587Props.text74} />
    </div>
  );
}

export default Frame15982;
