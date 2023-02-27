import { useSelector } from "react-redux";

export default function () {
  const auth = useSelector((state) => state.auth.authUser);
  return auth;
}
