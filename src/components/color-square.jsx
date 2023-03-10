import React from "react";

export const ColorSquare = (props) => {
  const { color, isRectangle } = props;
  return (
    <div
      title={color.label}
      style={{
        backgroundColor: color.value,
        minHeight: "12px",
        minWidth: isRectangle? "auto" : "12px",
        border: "1px solid white",
        margin: 1,
      }}
    ></div>
  );
};
