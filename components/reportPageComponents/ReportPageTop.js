import React, { useEffect } from 'react'
import styles from '../../styles/reportPage/reportPage.module.css'
import spaceman from '../../assets/reportAssets/spaceMan.svg'
import skillsSolarSystem from '../../assets/reportAssets/skillsSolarSystem.svg'

import Image from 'next/image'
import dynamic from 'next/dynamic'

export default function ReportPageTop({ attr1, attr2, careerRec }) {
    let skill1 = '';
    let skill2 = '';
    


    
    let skillsDescription1 = '';
    let skillsDescription2 = '';

    if (attr1 === 'analytical' || attr1 === 'interpersonal' || attr1 === 'collaboration') {
        skill1 = attr1
    } else if (attr1 === 'self_management') {
        skill1 = 'self management'
    } else if (attr1 === 'problem_solving') {
        skill1 = 'problem solving'
    } else if (attr1 === 'reflection') {
        skill1 = 'reflective thinking'
    } else if (attr1 === 'creativity') {
        skill1 = 'creative thinking'
    }

    if (attr2 === 'analytical' || attr2 === 'interpersonal' || attr2 === 'collaboration') {
        skill2 = attr2
    } else if (attr2 === 'self_management') {
        skill2 = 'self management'
    } else if (attr2 === 'problem_solving') {
        skill2 = 'problem solving'
    } else if (attr2 === 'reflection') {
        skill2 = 'reflective thinking'
    } else if (attr2 === 'creativity') {
        skill2 = 'creative thinking'
    }

    return (
        <div className={styles.reportPageTopRoot}>
            <div className={styles.header}>
                <div className={styles.headerText}>{careerRec}<br/><span class={styles.congrats}>CONGRATULATIONS</span> </div>
                <Image width={115 * 2} height={189 * 2} src={spaceman} alt="picture of an astronaut standing on a planet" />
            </div>
            <div className={styles.mySuperpowers}>
                <h2 className={styles.superpowersHeader}>My Super Powers!</h2>
                {/* <p>
                    Welcome to Technius! It's been a long and sometimes dangerous journey to get 
                    here, but we have finally reached our destination and can begin building our base..
                </p> */}
                <p>
                    Our crew monitoring software has been gathering data about your performance on 
                    the mission, and there are some really encouraging signs coming out of what the 
                    software is telling us. For example, the decisions that you have made during the 
                    journey tell us that you have very well developed <b>{skill1} skills</b> and <b>{skill2} skills</b>. 
                    {/* Because of this, you’ve been able to bring some very valuable 
                    qualities to the mission. */}
                </p>
            </div>
            <div className={styles.skillsSolarSystem}>
                <Image width={449 * 3} height={172 * 3} src={skillsSolarSystem} alt="image of a solar system made up of a range of 7 skills" />
            </div>
            <div className={styles.skillsDescription}>
                <div className={styles.skillDescription}>
                    <Image src={require('../../assets/reportAssets/' + attr1 + '.svg')} />
                </div>
                <div className={styles.skillDescription}>
                    <Image src={require('../../assets/reportAssets/' + attr2 + '.svg')} />
                </div>            
            </div>
            <div className={styles.myFutureInTech}>
                <h2 className={styles.futureInTechHeader}>My Future in Tech!</h2>
                <p>
                    So the game is over, and you have learned a little about the challenges of 
                    intergalactic travel – you also may have learned a little about yourself in the 
                    process. 
                    {/* what you are good at doing, and what you might be able to do with those 
                    skills as you move on into high school, perhaps on to university, and then into the 
                    workforce. */}
                </p>
                <p>
                We have listed possible career choices for you. Please do read carefully through this report, it may well make a big difference to what you choose to do when your school days are over.
                    {/* The report shown below has nothing to do with the game you’ve just played, but 
                    instead has quite a lot to do with what your game-playing decisions tell us about a 
                    possible career choice for you. Please do read carefully through this report, and by 
                    all means share it with your family and your teachers – it may well make a big 
                    difference to what you choose to do when your school days are over. */}
                </p>
            </div>
        </div>
    )
}
