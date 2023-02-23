import React from "react";
import FriendLayout from "../layouts/FriendLayout";
import backgroundFriend from "../assets/bgfriendpage.png";

export default function Friendpage() {
  return (
    <>
      <div style={{ backgroundImage: `url(${backgroundFriend})` }}>
        <FriendLayout />
      </div>
    </>
  );
}
