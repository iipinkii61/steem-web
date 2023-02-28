import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import useAuth from "../hooks/useAuth";

export default function PageLayout() {
  const authenticatedUser = useAuth();
  return (
    <>
      <Header />
      {authenticatedUser ? (
        <Outlet />
      ) : (
        <>
          <div className="flex bg-[radial-gradient(at_center_top,_#184353,_#1B2838,_#1B2838)]">
            <div className="w-screen flex justify-between pb-10">
              <div className="flex-1">{/* side left */}</div>
              <div className="flex-[2_1_0%]">
                <Outlet />
              </div>
              <div className="flex-1">{/* side right */}</div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
