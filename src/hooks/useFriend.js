import { useSelector } from "react-redux";

export default function () {
  const friends = useSelector((state) => state.friend.friend);
  return friends;
}
