import { useSelector } from "react-redux";

export default function () {
  const user = useSelector((state) => state.user.profile);
  return user;
}
