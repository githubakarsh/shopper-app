import React from "react";

const GlobalManager = ({ error, loader, children }) => {
  if (error) {
    return <p>Some thing went wrong !!! Please try again</p>;
  }

  if (loader) {
    return <p>Loading ....</p>;
  }

  return children;
};

export default GlobalManager;
