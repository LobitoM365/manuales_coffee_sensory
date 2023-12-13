import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
export const Nav = () => {
  return (
    <>
      <nav className="w-full p-5 bg-blue-950">
        <ul className="flex">
          <li className="w-max">
            <Link to={"/usuario/manual"}>
              <h4 className="text-white p-[10px] hover:bg-blue-500 hover:text-black rounded-sm">
                Manual de usuario
              </h4>
            </Link>
          </li>
          <li className="w-max">
            <Link to={"/manual/tecnico"}>
              <h4 className="text-white p-[10px] hover:bg-blue-500 hover:text-black rounded-sm">
                Manual Técnico
              </h4>
            </Link>
          </li>
          <p></p>
        </ul>
      </nav>
      <div className="contenido flex justify-center">
        <Outlet></Outlet>
      </div>
    </>
  );
};
