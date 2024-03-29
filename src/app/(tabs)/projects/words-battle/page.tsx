import Link from "next/link";

import ScrollController from "@/components/ScrollController";

import style from "../../../../styles/projects.module.css";
import words_battle_desk from "../../../../images/words_battle_desktop.jpg";
import url from "../../../../icons/url1.png";
import git from "../../../../icons/github.png";

const WordsBattle = () => {
  return (
    <>
      <div className={style.header}>
        <div className={`${style.promptify} ${style.logo}`}>Words Battle</div>
        <Link href={"https://words-battle.vercel.app/"} target="_blank">
          <img src={url.src} alt="url" />
        </Link>

        <Link
          href={"https://github.com/dasunheimliche/words-battle"}
          target="_blank"
        >
          <img src={git.src} alt="github" />
        </Link>
      </div>
      <ScrollController className={style.container}>
        <div className={`${style.project} ${style.fade1}`}>
          <section className={`${style.text} ${style.post} `}>
            <div className={style.title}>
              Concept: Bookworms, but in the form of an online multiplayer game.
            </div>
            <div className={style.content}>
              Bookworms was one of my favorite childhood games, but I always
              regretted not being able to play against other users. So, I
              decided to create my own online version for two players. Form
              words by connecting the letters on the grid and accumulate points
              to decrease your opponent's life bar.
            </div>
          </section>
          <img
            src={words_battle_desk.src}
            className={`${style.post} `}
            alt=""
          />
          <section className={`${style.text} ${style.post}`}>
            <div className={style.title}>Technologies Used</div>
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
                  <li>Vite</li>
                  <li>Axios</li>
                  <li>Socket.io Client</li>
                </ul>
              </div>
              <div>
                <div className={style.subtitle}>Backend</div>
                <ul className={style.list}>
                  <li>NodeJS</li>
                  <li>Socket.io</li>
                </ul>
              </div>
            </div>
          </section>
          <section className={`${style.text} ${style.post}`}>
            <div className={style.title}>Functionality</div>
            <div className={style.content}>
              <p>
                The application has the basic functions of an online game. It
                allows creating a game room and allowing another user to join.
                During each player's turn, certain functions will be disabled
                for the other player.
              </p>
              <br></br>
              <p>
                On the server side, the name of the room will be reserved so
                that no one can create a room with the same name. Once the host
                has finished the session, the name will become available again.
              </p>
              <br></br>
              <p>
                The definition of each formed word will appear on the screen to
                clarify any doubts about its validity. However, if the word is
                not valid, the damage cannot be dealt.
              </p>
            </div>
          </section>
          <section className={`${style.text} ${style.post}`}>
            <div className={style.title}>Upcoming Implementations</div>
            <div className={style.content}>
              <ul className={style.list}>
                <li>
                  Create user accounts: You can create an account and keep track
                  of battle history with your friends
                </li>
                <li>
                  English language version: You can play the game by forming
                  words in English
                </li>
              </ul>
            </div>
          </section>
        </div>
      </ScrollController>
    </>
  );
};

export default WordsBattle;
