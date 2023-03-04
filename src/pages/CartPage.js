import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import PageMainLayout from "../layouts/PageMainLayout";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCart } from "../redux/cart-slice";
import useCart from "../hooks/useCart";
import CartItem from "../components/CartItem";
import CartAction from "../components/CartAction";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  // const dispatch = useDispatch();
  const cart = useCart();

  const navigate = useNavigate();
  console.log(cart);

  const onClick = (el) => {
    navigate(
      "/app/" +
        el?.Game?.steamAppid +
        "/" +
        el?.Game?.name.replace(/[\W_]+/g, "_"),
    );
  };

  return (
    <>
      <Header />
      <PageMainLayout>
        <p className="py-8 text-3xl">YOUR SHOPPING CART</p>
        {/* <div className="w-full">
          <CartItem />
          <CartAction />
        </div> */}

        {cart?.map((el) => (
          <CartItem el={el} onClick={onClick} key={el?.id} />
        ))}
        <CartAction />
      </PageMainLayout>
      <Footer />
    </>
  );
}
