import React, { useState } from 'react'
import styles from '../../styles/mission/mission.module.css'


export default function Scene4({ setCharacter, setCurrentScene }) {
    const [videoState, setVideoState] = useState('');
    const handleClick = (character) => {
        setCharacter(character)
        setCurrentScene(5)
    }
    return (
        <>
            <video poster="/loading_screen.gif" playsInline onEnded={() => setVideoState('ended')} className={styles.backgroundVideo} autoPlay muted>
                <source src={"https://technius2022.s3.amazonaws.com/missionAssets/IntroAndChooseCharacter.mp4"} type="video/mp4" />
                video not supported in this browser
            </video>
            {videoState === 'ended' && 
                <div className={styles.chooseCharacterbuttons}>
                    <button onClick={() => handleClick('red')} className={styles.chooseCharacterButton}></button>
                    <button onClick={() => handleClick('blue')} className={styles.chooseCharacterButton}></button>
                    <button onClick={() => handleClick('yellow')} className={styles.chooseCharacterButton}></button>
                    <button onClick={() => handleClick('green')} className={styles.chooseCharacterButton}></button>
                </div>
            }
        </>
    )
}
