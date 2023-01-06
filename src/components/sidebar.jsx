import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const buttonStyle =
    "w-full uppercase block px-6 text-left py-4 rounded-tr-full rounded-br-full";
  return (
    <aside className="h-screen sm:w-[200px] bg-white fixed">
      <div className="sm:pt-12">
        <NavLink
          to="/"
          className={buttonStyle}
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#333",
                  background: "#f2f4f6",
                }
              : { color: "#545e6f", background: "#fff" }
          }
        >
          Overview
        </NavLink>
        <NavLink
          to="/countries"
          className={buttonStyle}
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#333",
                  background: "#f2f4f6",
                }
              : { color: "#545e6f", background: "#fff" }
          }
        >
          Countries
        </NavLink>
        <NavLink
          to="/symptoms"
          className={buttonStyle}
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#333",
                  background: "#f2f4f6",
                }
              : { color: "#545e6f", background: "#fff" }
          }
        >
          Symptoms
        </NavLink>
      </div>
    </aside>
  );
};
export default Sidebar;
