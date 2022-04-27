import React, { useState, useRef } from 'react'
import styles from '../../styles/mission/mission.module.css'
import Image from 'next/image'
import ButtonBar from '../../assets/missionAssets/buttonBar.png'
import OutroText from '../../assets/missionAssets/outroText.png'
import ShowMyResultsActive from '../../assets/missionAssets/showMyResultsActive.png'
import ShowMyResultsInactive from '../../assets/missionAssets/showMyResultsInactive.png'
import YesButtonInactive from '../../assets/missionAssets/yesButtonInactive.png'




export default function OutroScene({setCurrentScene}) {
    const [videoTime, setVideoTime] = useState(0)
    const [leftHover, setLeftHover] = useState(false)
    const [rightHover, setRightHover] = useState(false)
    const outroScene = useRef()

    const handleTimeChange = (e) => {
        setVideoTime(e.target.currentTime)
    }

    return (
        <>
            <video poster="/loading_screen.gif" playsInline ref={outroScene} onTimeUpdate={handleTimeChange} className={styles.backgroundVideo} autoPlay muted>
                {/* <source src={"https://technius2022.s3.amazonaws.com/missionAssets/starsBackground.mp4"} type="video/mp4" /> */}
                <source src={"hhttps://technius-sydney.s3.ap-southeast-2.amazonaws.com/missionAssets/starsBackground.webm"} type="video/webm" />
                video not supported in this browser
            </video>
            {videoTime > 0 && (
                <div className={styles.introTextDiv}>
                    <Image width={1200} height={1000} src={OutroText} />
                </div>
            )}
            { videoTime > 14 &&
                <>
                    <div className={styles.buttonBar}>
                        <Image src={ButtonBar}></Image>
                    </div>
                    <div onClick={() => setCurrentScene(19)} onMouseEnter={() => setRightHover(true)} onMouseLeave={() => setRightHover(false)}className={styles.showMyResultsButton}>
                        {rightHover 
                            
                            ? <Image src={ShowMyResultsActive} />
                            : <Image src={ShowMyResultsInactive} />
                        }
                    </div>
                </>
            }
        </>
    )
}
