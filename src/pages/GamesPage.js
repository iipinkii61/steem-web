// import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import PageMainLayout from "../layouts/PageMainLayout";
import GamesLayout from "../layouts/GamesLayout";

import { clearShowGame, fetchGame } from "../redux/game-slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export default function GamesPage() {
  const { steamAppId } = useParams();
  const dispatch = useDispatch();

  dispatch(clearShowGame());
  useEffect(() => {
    dispatch(fetchGame(steamAppId));
  }, []);
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
