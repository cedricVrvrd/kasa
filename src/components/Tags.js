import React from "react";

const Tag = ({ getTag }) => {
  return (
    <div id="tag">
      <p className="tagList">{getTag}</p>
    </div>
  );
};

export default Tag;
