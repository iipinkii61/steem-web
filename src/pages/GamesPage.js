import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import PageMainLayout from "../layouts/PageMainLayout";
import GamesLayout from "../layouts/GamesLayout";

export default function GamesPage() {
  return (
    <>
      <Header />
      <PageMainLayout>
        <GamesLayout/>
      </PageMainLayout>
      <Footer />
    </>
  );
}
