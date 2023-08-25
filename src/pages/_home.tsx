import Image from "next/image";
import landscape_back from "../../public/background-h.jpg";
import portrait_back from "../../public/background-v.jpg";

import { useContext, useEffect } from "react";
import { AppContext } from "./_ap";

import { useRouter } from "next/router";
import useSwipeDirection from "@/hooks/useSwipeController";
import useScreenWidth from "@/hooks/useScreenWidth500";

const HomePage = () => {
  const { loading, setLoading } = useContext(AppContext);
  const swipeDirection = useSwipeDirection();
  const isWidth500 = useScreenWidth();

  let page = useRouter();

  const imgIsLoaded = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (swipeDirection === null) {
      return;
    }
    if (swipeDirection === false) {
      page.push("/skills");
    }
  }, [swipeDirection]);

  return (
    <div className="main-home">
      {loading && <div className="loading"></div>}
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "-1",
        }}
        className="main-back land-back"
      >
        <Image
          fill={true}
          style={{ objectFit: "cover" }}
          src={landscape_back.src}
          alt="background image"
          onLoadingComplete={imgIsLoaded}
        />
      </div>
      {loading && <div className="loading"></div>}
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "-1",
        }}
        className="main-back port-back"
      >
        <Image
          style={{ objectFit: "cover" }}
          fill={true}
          src={portrait_back.src}
          alt="background image"
          onLoadingComplete={imgIsLoaded}
        />
      </div>
      <div className="main-content">
        <h1 className="main-title neonText fade2">WELCOME TO MY PORTFOLIO</h1>
        <div className="main-subtitle fade3">
          Hello, I'm Claussimar Rodríguez, a frontend-focused full-stack web
          developer. The projects showcased here are ones I use daily and were
          conceived to fulfill an unmet need left by existing apps. I hope you
          can see in your visit through my portfolio my commitment to creating
          visually appealing and user-friendly experiences.
        </div>
        <div className="main-content-buttons">
          {!isWidth500 && (
            <button
              className="main-button arrow fade4"
              onClick={() => page.push("/skills")}
            >
              {"SKILLS"}
            </button>
          )}
          {!isWidth500 && (
            <button
              className="main-button arrow fade4"
              onClick={() => page.push("/projects/zahir")}
            >
              {"PROJECTS"}
            </button>
          )}
          {!isWidth500 && (
            <button
              className="main-button arrow fade4"
              onClick={() => page.push("/contact")}
            >
              {"CONTACT"}
            </button>
          )}
          {isWidth500 && (
            <button className="main-button arrow fade1">
              {"SWIPE TO NAVIGATE"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
