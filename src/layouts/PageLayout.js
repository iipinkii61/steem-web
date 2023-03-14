import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import useAuth from "../hooks/useAuth";

export default function PageLayout() {
  const authenticatedUser = useAuth();
  return <Outlet />;
}
