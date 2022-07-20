import React from 'react';
import style from './Skills.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Skill from "./skill/Skill";


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'Djvlk fvklfvjklfj vkfjvkfvjfvjfvjfvjfvfv fvfvfv'}/>
                    <Skill title={'CSS'} description={'Djvlkfvklf vjklfjvkfjvk fvjfvjfvjfvj fvfvfvfvfv'}/>
                    <Skill title={'React'} description={'Djvlkfvklf vjklfjvkfjvkfvjfvjfvjfv jfvfvfvfvfv'}/>

                </div>
            </div>

        </div>
    );
}

export default Skills;
