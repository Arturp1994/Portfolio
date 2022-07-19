import React from 'react';
import style from "./Project.module.css";

type ProjectPropsType={
    title: string
    description: string
}

function Project(props:ProjectPropsType) {
    return (
        <div className={style.project}>
            <div className={style.imgProject}>
                <button>SEE</button>
            </div>
            <div className={style.allDescription}>
                <h3 className={style.title}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
}

export default Project;
