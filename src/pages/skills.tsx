import style from '../styles/skills.module.css'

const Skills = ()=> {
    return (
        <>
            <div className={style.container}>
                <div className={style.topic}>
                    <div className={style.title}>Frontend</div>
                    <div className={style.list}>
                        <ul>
                            <li>React</li>
                            <li>NextJS</li>
                        </ul>
                    </div>
                </div>
                <div className={style.topic}>
                    <div className={style.title}>Backend</div>
                    <div className={style.list}>
                        <ul>
                            <li>NodeJS</li>
                            <li>Express</li>
                            <li>Graphql</li>
                            <li>Socket.io</li>
                        </ul>
                    </div>
                </div>
                <div className={style.topic}>
                    <div className={style.title}>Lenguajes</div>
                    <div className={style.list}>
                        <ul>
                            <li>Javascript</li>
                            <li>Typescript</li>
                            <li>Python (solo teórico)</li>
                            <li>Java (solo teórico)</li>
                        </ul>
                    </div>
                </div>
                <div className={style.topic}>
                    <div className={style.title}>Soft Skills</div>
                    <div className={style.list}>
                        <ul>
                            <li>Autodidacta</li>
                            <li>Comprometido</li>
                            <li>Participativo</li>
                            <li>Creativo</li>
                            <li>Adaptable</li>
                            <li>Detallista</li>
                            <li>Entusiasta</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills