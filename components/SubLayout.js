import React from "react";

export default function SubLayout({ children }) {
  return (
    <>
      <a href="/">Home</a>
      {children}
    </>
  );
}
