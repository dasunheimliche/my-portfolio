import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../_ap";

import style from "../../styles/projects.module.css";
import portfolio_desk from "../../images/portfolio_desk.jpg";
import portfolio_inspi from "../../images/portfolio_inspi.png";
import git from "../../icons/github.png";

import { useRouter } from "next/router";
import useSwipeDirection from "@/hooks/useSwipeController";
import useScrollDirection from "@/hooks/isScrollingUp";

const portfolio = () => {
  const { isRecruiter, setIsScrollUp, setLoading } = useContext(AppContext);
  const elementRef = useRef(null);
  const isScrollingDown = useScrollDirection(elementRef);

  const swipeDirection = useSwipeDirection();
  let page = useRouter();

  useEffect(() => {
    if (swipeDirection === null) {
      return;
    }
    if (swipeDirection === false) {
      page.push("/contact");
    }
    if (swipeDirection === true) {
      page.push("/projects/wordsBattle");
    }
  }, [swipeDirection]);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    setIsScrollUp(isScrollingDown);
  }, [isScrollingDown]);

  return (
    <>
      <div className={style.header}>
        <div className={`${style.promptify} ${style.logo}`}>Portfolio</div>
        {/* <img src={url.src} alt="url" /> */}
        {isRecruiter && (
          <Link
            href={"https://github.com/dasunheimliche/my-portfolio"}
            target="_blank"
          >
            <img src={git.src} alt="github" />
          </Link>
        )}
      </div>

      <div ref={elementRef} className={style.container}>
        <div className={style.project}>
          <div className={`${style.text} ${style.post} ${style.fade1}`}>
            <div className={style.title}>Concept</div>
            <div className={style.content}>
              This portfolio is a project inspired by the synthwave aesthetic,
              which is a style based on electronic music and video games from
              the 80s and early 90s. It is mainly characterized by its
              retro-futuristic style, with bright and neon colors.
            </div>
          </div>
          <img
            src={portfolio_desk.src}
            className={`${style.post} ${style.fade2}`}
            alt=""
          />
          <div className={`${style.text} ${style.post} ${style.fade3}`}>
            <div className={style.title}>Technologies used</div>
            <div className={`${style.content} ${style.flexed}`}>
              <div>
                <div className={style.subtitle}>Language</div>
                <ul className={style.list}>
                  <li>Typescript</li>
                </ul>
              </div>
              <div>
                <div className={style.subtitle}>Frontend</div>
                <ul className={style.list}>
                  <li>NextJS</li>
                  <li>Midjourney</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`${style.text} ${style.post} ${style.fade4}`}>
            <div className={style.title}>Inspiration</div>
            <div className={style.content}>
              <p>
                This is my first project based on a Midjourney result. My
                intention was not necessarily to reproduce the result exactly,
                but to use it as a starting point to achieve something that
                could be similar or completely different.
              </p>
              <br></br>
              <img src={portfolio_inspi.src} alt="portfolio inspiration" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default portfolio;
