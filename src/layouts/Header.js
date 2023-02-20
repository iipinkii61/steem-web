import React from "react";
import logo from "../assets/header_logo.png";

export default function Header() {
  return (
    <div className="h-28 bg-[#171A21] flex items-center">
      <a href="/">
        <img src={logo} className="h-11" />
      </a>
      <div className=" text-[#b8b6b4] uppercase">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>store</a>
            <ul className="p-2 bg-[#171A21]">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
