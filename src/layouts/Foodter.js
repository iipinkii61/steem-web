import React from "react";
import footer1 from "../assets/logo_steam_footer.png";
import footer2 from "../assets/logo.png";

export default function Foodter() {
  return (
    <footer className="footer p-10 bg-[#171A21]">
      <img src={footer2} className="h-7" />
      <div className="text-[#C6D4DF]">
        <div className="text-xs">
          © 2023 Valve Corporation. All rights reserved. All trademarks are
          property of their respective owners in the US and other countries.
          {/* <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a> */}
        </div>
        <div>
          <span className="text-xs">
            VAT included in all prices where applicable.
          </span>{" "}
          &nbsp;Privacy Policy&nbsp; | &nbsp;Legal&nbsp; | &nbsp;Steam
          Subscriber Agreement&nbsp; | &nbsp;Refunds&nbsp; | &nbsp;Cookies
          {/* <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a> */}
        </div>
        <div>
          About Valve &nbsp; | &nbsp; Jobs &nbsp;| &nbsp; Steamworks&nbsp; |
          &nbsp;Steam Distribution &nbsp;| &nbsp;Support&nbsp; | &nbsp;Gift
          Cards&nbsp; | &nbsp;Steam&nbsp; | &nbsp;@steam
        </div>
      </div>
      <img src={footer1} />
    </footer>
  );
}
