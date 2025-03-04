import React from "react";
import { Outlet } from "react-router-dom";
import Cursor from "../components/Cursor";

const MainLayout = () => {
    
  return (
    <div>
      <Cursor></Cursor>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
