// import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import PageMainLayout from "../layouts/PageMainLayout";
import GamesLayout from "../layouts/GamesLayout";

import { fetchGame } from "../redux/game-slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useShowGame from "../hooks/useShowGame";

export default function GamesPage() {
  const { steamAppId } = useParams();
  const dispatch = useDispatch();
  const showGame = useShowGame();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!showGame.length) {
        console.log("fetching showGame");
        dispatch(fetchGame(steamAppId));
      }
    }, 300);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [showGame.length]);

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
