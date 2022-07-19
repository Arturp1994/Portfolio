import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import style from "./Projects.module.css";
import Project from "./project/Project";


function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project description={'It is a very cool project It is a very cool project'} title={'My Project 1'}/>
                    <Project description={'It is a very cool project It is a very cool project'} title={'My Project 1'}/>
                </div>
            </div>

        </div>
    );
}

export default Projects;
