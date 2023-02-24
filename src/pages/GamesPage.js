import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import PageMainLayout from "../layouts/PageMainLayout";
import GamesLayout from "../layouts/GamesLayout";
import useCart from "../hooks/useCart";
import { useEffect } from "react";

export default function GamesPage() {
  const cart = useCart();

  // useEffect(() => {
  //   console.log(cart);
  // }, []);
  // console.log(cart);
  return (
    <>
      <Header />
      <PageMainLayout>
        <GamesLayout />
      </PageMainLayout>
      <Footer />
    </>
  );
}
