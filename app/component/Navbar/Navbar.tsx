import React from "react";
import Nav2 from "../Navbar/Nav2";
import Nav1 from "../Navbar/Nav1";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-5 py-2">
      <Nav1 />
      <Nav2 />
    </div>
  );
};

export default Navbar;
