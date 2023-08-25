import Link from "next/link";

import ScrollController from "@/components/ScrollController";

import style from "../../../../styles/projects.module.css";
import portfolio_desk from "../../../../images/portfolio_desk.jpg";
import portfolio_inspi from "../../../../images/portfolio_inspi.png";
import git from "../../../../icons/github.png";

const portfolio = () => {
  return (
    <>
      <div className={style.header}>
        <div className={`${style.promptify} ${style.logo}`}>Portfolio</div>

        <Link
          href={"https://github.com/dasunheimliche/my-portfolio"}
          target="_blank"
        >
          <img src={git.src} alt="github" />
        </Link>
      </div>

      <ScrollController className={style.container}>
        <div className={style.project}>
          <section className={`${style.text} ${style.post} ${style.fade1}`}>
            <div className={style.title}>Concept</div>
            <div className={style.content}>
              This portfolio is a project inspired by the synthwave aesthetic,
              which is a style based on electronic music and video games from
              the 80s and early 90s. It is mainly characterized by its
              retro-futuristic style, with bright and neon colors.
            </div>
          </section>
          <img
            src={portfolio_desk.src}
            className={`${style.post} ${style.fade2}`}
            alt=""
          />
          <section className={`${style.text} ${style.post} ${style.fade3}`}>
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
          </section>
          <section className={`${style.text} ${style.post} ${style.fade4}`}>
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
          </section>
        </div>
      </ScrollController>
    </>
  );
};

export default portfolio;
