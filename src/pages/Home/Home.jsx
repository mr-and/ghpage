import React from "react";
import { useState, useEffect } from "react";

import Header from "../../components/Header/Header";
import Preloader from "../../components/Preloader/Preloader";


function Home() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <Preloader load={load} />
      <Header load={load }/>
    </>
  );
}

export default Home;
