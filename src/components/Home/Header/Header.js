import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header
      id="header"
      className="bg-no-repeat w-screen h-screen  bg-cover flex"
    >
      <div className="m-auto w-max">
        <p className="header-title m-auto text-white w-2/3 text-center p-5">
          We’re <span className="header-company-name">Fusion</span>, We Build
          Things for Human
        </p>
        <div id="header-service" className="pt-4 text-center py-2">
          <span className="px-5">DESIGN</span>
          <i className="vl" style={{ height: "10px" }}></i>
          <span className="px-5">STRATEGY</span>
          <i className="vl" style={{ height: "10px" }}></i>
          <span className="px-5">BRANDING</span>
        </div>
      </div>
      <div id="header-bottom" className="absolute bottom-0 pb-7 ">
        <div className="flex items-center justify-between w-screen px-5">
          <div>
            <img src="/resource/img/header/fusion.png" alt="Logo" />
          </div>
          <div className="flex px-5">
            <span>GET IN TOUCH</span>
            <img
              className="px-4"
              src="/resource/img/header/sorrow.png"
              alt="sorrow"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
