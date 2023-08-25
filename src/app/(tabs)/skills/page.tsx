import style from "../../../styles/skills.module.css";

import reactIMG from "../../../icons/react.png";
import vercelIMG from "../../../icons/vercel.png";
import nodejs from "../../../icons/nodejs.png";
import express from "../../../icons/express.png";
import graphql from "../../../icons/graphql.png";
import socketio from "../../../icons/socketio.png";
import js from "../../../icons/js.png";
import ts from "../../../icons/ts.png";
import mongodb from "../../../icons/mongodb.png";
import mysql from "../../../icons/mysql.png";
import git from "../../../icons/git.png";
import api from "../../../icons/api.png";
import react_router from "../../../icons/react_router.png";
import redux from "../../../icons/redux.png";
import english from "../../../icons/english.png";

import ScrollController from "@/components/ScrollController";
import SkillItem from "@/components/SkillItem";

const Skills = () => {
  return (
    <>
      <ScrollController className={style.container}>
        <div className={style.row0}>Skills</div>
        <div className={style.row1}>
          <div className={`${style.topic2} fade1`}>
            <div className={style.title}>Frontend</div>
            <div className={style.list2}>
              <SkillItem imgSrc={reactIMG.src} label="React" />
              <SkillItem imgSrc={vercelIMG.src} label="NextJS" />
              <SkillItem imgSrc={react_router.src} label="R.Router" />
              <SkillItem imgSrc={redux.src} label="Redux" />
            </div>
          </div>
          <div className={`${style.topic2} fade2`}>
            <div className={style.title}>Backend</div>
            <div className={style.list2}>
              <SkillItem imgSrc={nodejs.src} label="NodeJS" />
              <SkillItem imgSrc={express.src} label="Express" />
              <SkillItem imgSrc={graphql.src} label="GraphQL" />
              <SkillItem imgSrc={socketio.src} label="Socket.io" />
            </div>
          </div>
        </div>
        <div className={style.row2}>
          <div className={`${style.topic2} fade3`}>
            <div className={style.title}>Languages</div>
            <div className={style.list2}>
              <SkillItem imgSrc={js.src} label="Javascript" />
              <SkillItem imgSrc={ts.src} label="Typescript" />
            </div>
          </div>
          <div className={`${style.topic2} fade4`}>
            <div className={style.title}>Database</div>
            <div className={style.list2}>
              <SkillItem imgSrc={mongodb.src} label="MongoDB" />
              <SkillItem imgSrc={mysql.src} label="MySQL" />
            </div>
          </div>
          <div id={style.others} className={`${style.topic2} fade5`}>
            <div className={style.title}>Others</div>
            <div className={style.list2}>
              <SkillItem imgSrc={git.src} label="Git" />
              <SkillItem imgSrc={api.src} label="API's" />
              <SkillItem imgSrc={english.src} label="EN (B2)" />
            </div>
          </div>
        </div>
        <div className={style.row22}>
          <div className={`${style.topic2} fade5`}>
            <div className={style.title}>Others</div>
            <div className={style.list2}>
              <SkillItem imgSrc={git.src} label="Git" />
              <SkillItem imgSrc={api.src} label="API's" />
              <SkillItem imgSrc={english.src} label="EN (B2)" />
            </div>
          </div>
        </div>
        <div className={style.row3}>
          <div className={`${style.topic2} fade6`}>
            <div className={style.title}>Soft Skills</div>
            <div className={style.list3}>
              <ul>
                <li>Self-taught</li>
                <li>Committed</li>
                <li>Participative</li>
                <li>Creative</li>
              </ul>
              <ul>
                <li>Adaptable</li>
                <li>Detail-oriented</li>
                <li>Enthusiastic</li>
              </ul>
            </div>
          </div>
          <div id={style.academic} className={`${style.topic2} fade7`}>
            <div className={style.title}>Other academic skills</div>
            <div className={style.list3}>
              <ul>
                <li>Mathemathics (I, II, II)</li>
                <li>Physics (I, II)</li>
                <li>Physical Chemistry</li>
                <li>Microbiology (I, II, III)</li>
              </ul>
              <ul>
                <li>Chemistry (organic, innorganic)</li>
                <li>Food engineering (Industry I, II, III, etc.)</li>
                <li>Bromatology (I, II, III)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={style.row33}>
          <div className={`${style.topic2} fade7`}>
            <div className={style.title}>Other academic skills</div>
            <div className={style.list3}>
              <ul>
                <li>Mathemathics (I, II, II)</li>
                <li>Physics (I, II)</li>
                <li>Physical Chemistry</li>
                <li>Microbiology (I, II, III)</li>
                <li>Chemistry (organic, innorganic)</li>
                <li>Food engineering (Industries I, II, III, etc.)</li>
                <li>Bromatology (I, II, III)</li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollController>
    </>
  );
};

export default Skills;
