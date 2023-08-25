import style from "../styles/contact.module.css";
import mailIcon from "../icons/mail3.png";
import git from "../icons/github.png";
import linkedin from "../icons/linkedin.png";

import { useEffect } from "react";

import { useRouter } from "next/router";
import useSwipeDirection from "@/hooks/useSwipeController";

const Contact = () => {
  const swipeDirection = useSwipeDirection();
  let page = useRouter();

  useEffect(() => {
    if (swipeDirection === null) {
      return;
    }
    if (swipeDirection === false) {
      return;
    }
    if (swipeDirection === true) {
      page.push("/projects/portfolio");
    }
  }, [swipeDirection]);

  return (
    <>
      <div className={style.container}>
        <div className={style.list}>
          <ul>
            <li id={style.first}>
              <a
                href="https://linkedin.com/in/claussimar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>/claussimar</span>
                <img src={linkedin.src} alt="linkedin" />
              </a>
            </li>
            <li id={style.second}>
              <a
                href="https://github.com/dasunheimliche"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>/dasunheimliche</span>
                <img src={git.src} alt="github" />
              </a>
            </li>
            <li id={style.third}>
              <a
                href="mailto:dasunheimliche7@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>dasunheimliche7@gmail.com</span>
                <img src={mailIcon.src} alt="email" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;
