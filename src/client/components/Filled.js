import React from "react";

const Filled = ({ children, className }) => {
  return (
    <div className={className}>
      <div className="bg-white px5 border-left border-black_10">{children}</div>
    </div>
  );
};

export default Filled;
