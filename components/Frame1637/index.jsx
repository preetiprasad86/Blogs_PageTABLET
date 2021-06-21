import React from "react";
import Frame15982 from "../Frame15982";
import "./Frame1637.css";

function Frame1637(props) {
  const { className, frame15982Props, frame159822Props } = props;

  return (
    <div className={`frame-1637 ${className || ""}`}>
      <Frame15982
        blogThumbnail={frame15982Props.blogThumbnail}
        address={frame15982Props.address}
        text219={frame15982Props.text219}
        text220={frame15982Props.text220}
        className={frame15982Props.className}
        frame1587Props={frame15982Props.frame1587Props}
      />
      <Frame15982
        blogThumbnail={frame159822Props.blogThumbnail}
        address={frame159822Props.address}
        text219={frame159822Props.text219}
        text220={frame159822Props.text220}
        className={frame159822Props.className}
        frame1587Props={frame159822Props.frame1587Props}
      />
    </div>
  );
}

export default Frame1637;
