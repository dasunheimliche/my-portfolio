import Link from "next/link";

import ScrollController from "@/components/ScrollController";

import style from "../../../../styles/projects.module.css";
import zahir_desk from "../../../../images/zahir-desktop.jpg";
import url from "../../../../icons/url1.png";
import git from "../../../../icons/github.png";

const Zahir = () => {
  return (
    <>
      <div className={style.header}>
        <div className={`${style.zahir} ${style.logo}`}>Zahir.</div>
        <Link href={"https://zahir-pink.vercel.app/"} target="_blank">
          <img src={url.src} alt="url" />
        </Link>

        <Link
          href={"https://github.com/dasunheimliche/el_zahir"}
          target="_blank"
        >
          <img src={git.src} alt="github" />
        </Link>
      </div>
      <ScrollController className={style.container}>
        <div className={style.project}>
          <section className={`${style.text} ${style.post} ${style.fade1}`}>
            <div className={style.title}>
              Concept: My ideal Tumblr. A different social network.
            </div>
            <div className={style.content}>
              <p>
                Zahir is a social network whose objective is to store and share
                multimedia content that has marked the user in a lasting and
                meaningful way. In contrast to the rest of the content, which
                may generate a great impact but quickly fades from the user's
                thoughts.
              </p>
              <br />
              <p>
                It is a social network strongly inspired by Tumblr but with a
                more specific orientation and purpose. Users' posts offer
                glimpses into their obsessions, aesthetic and intellectual
                pursuits, or safe havens they repeatedly return to.
              </p>
              <br />
              <p>
                Zahir is an expression from 16th-century Islamic mythology that
                means{" "}
                <i>"something that, once seen, can never be forgotten."</i>
              </p>
            </div>
          </section>
          <img
            src={zahir_desk.src}
            className={`${style.post} ${style.fade2}`}
            alt=""
          />
          <section className={`${style.text} ${style.post} ${style.fade3}`}>
            <div className={style.title}>Used technologies</div>
            <div className={`${style.content} ${style.flexed}`}>
              <div>
                <div className={style.subtitle}>Lenguaje</div>
                <ul className={style.list}>
                  <li>Javascript</li>
                </ul>
              </div>
              <div>
                <div className={style.subtitle}>Frontend</div>
                <ul className={style.list}>
                  <li>React</li>
                  <li>React Router</li>
                  <li>Axios</li>
                  <li>Redux</li>
                </ul>
              </div>
              <div>
                <div className={style.subtitle}>Backend</div>
                <ul className={style.list}>
                  <li>NodeJS</li>
                  <li>MongoDB</li>
                  <li>Express</li>
                  <li>ImageKit API</li>
                </ul>
              </div>
            </div>
          </section>
          <section className={`${style.text} ${style.post} ${style.fade4}`}>
            <div className={style.title}>Functionality</div>
            <div className={style.content}>
              <p>
                Zahir has all the basic functionalities of a multimedia social
                network. It allows users to register, login, post text, images,
                videos (both by URL and file), comments, likes, as well as
                follow other users and be followed, among other things.
              </p>
              <br></br>
              <p>
                Images from a URL are stored on a private host, so link
                expiration is not a problem. The image will always be available.
              </p>
            </div>
          </section>
          <section className={`${style.text} ${style.post} ${style.fade5}`}>
            <div className={style.title}>Upcoming features</div>
            <div className={style.content}>
              <ul className={style.list}>
                <li>
                  Moods: a system that allows grouping posts into collections
                  related to different moods or aesthetics
                </li>
                <li>Live notifications</li>
                <li>
                  Playlist: allow the videos of a moods collection to be played
                  in a pop-up window. Especially useful for collections with
                  multiple music videos
                </li>
              </ul>
            </div>
          </section>
        </div>
      </ScrollController>
    </>
  );
};

export default Zahir;
