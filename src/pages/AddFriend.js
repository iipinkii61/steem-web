import React from "react";
import AddFriendLayout from "../layouts/AddFriendLayout";
import backgroundFriend from "../assets/bgfriendpage.png";

export default function AddFriend() {
  return (
    <>
      <div style={{ backgroundImage: `url(${backgroundFriend})` }}>
        <AddFriendLayout />;
      </div>
    </>
  );
}
