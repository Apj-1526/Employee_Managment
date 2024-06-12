import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-60 bg-cyan-500 fixed flex flex-col items-center pt-10 shadow-lg">
      <h2 className="text-white text-2xl font-bold mb-10">Menu</h2>
      <ul className="w-full text-center">
        <li className="mb-4">
          <Link
            to="/home"
            className="text-white text-lg font-semibold hover:bg-cyan-600 p-3 block rounded transition duration-200"
          >
            Dashboard
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/mainform"
            className="text-white text-lg font-semibold hover:bg-cyan-600 p-3 block rounded transition duration-200"
          >
            Add Employee
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/projectsection"
            className="text-white text-lg font-semibold hover:bg-cyan-600 p-3 block rounded transition duration-200"
          >
            Projects
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/view"
            className="text-white text-lg font-semibold hover:bg-cyan-600 p-3 block rounded transition duration-200"
          >
            Employees
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/history"
            className="text-white text-lg font-semibold hover:bg-cyan-600 p-3 block rounded transition duration-200"
          >
            Completed Projects
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
