import React, { useState, useRef } from 'react'
import styles from '../../styles/mission/mission.module.css'
import Image from 'next/image'
import ButtonBar from '../../assets/missionAssets/buttonBar.png'
import IntroText from '../../assets/missionAssets/introText.png'
import YesButtonActive from '../../assets/missionAssets/yesButtonActive.png'
import YesButtonInactive from '../../assets/missionAssets/yesButtonInactive.png'
import NoButtonActive from '../../assets/missionAssets/noButtonActive.png'
import NoButtonInactive from '../../assets/missionAssets/noButtonInactive.png'
import { useRouter } from 'next/router'



export default function IntroScene({setCurrentScene}) {
    const [videoTime, setVideoTime] = useState(0)
    const [leftHover, setLeftHover] = useState(false)
    const [rightHover, setRightHover] = useState(false)
    const [canPlay, setCanPlay] = useState(false)
    const introScene = useRef()
    const router = useRouter()

    const handleTimeChange = (e) => {
        setVideoTime(e.target.currentTime)
    }

    return (
        <>
            <video poster="/loading_screen.gif" playsInline ref={introScene} onTimeUpdate={handleTimeChange} className={styles.backgroundVideo} autoPlay muted>
                {/* <source src={"https://technius2022.s3.amazonaws.com/missionAssets/starsBackground.mp4"} type="video/mp4" /> */}
                <source src={"https://technius-sydney.s3.ap-southeast-2.amazonaws.com/missionAssets/starsBackground.webm"} type="video/webm" />
                video not supported in this browser
            </video>
            {videoTime > 0 && (
                <div className={styles.introTextDiv}>
                    <Image width={1000} height={1300} src={IntroText} />
                </div>
            )} 
            {videoTime > 20 &&
                <>
                    <div className={styles.buttonBar}>
                        <Image src={ButtonBar}></Image>
                    </div>
                    <div onClick={() => router.push('/')} onMouseEnter={() => setLeftHover(true)} onMouseLeave={() => setLeftHover(false)} className={styles.noThanksButton}>
                        {leftHover 
                            ? <Image src={NoButtonActive} />
                            : <Image src={NoButtonInactive} />
                        }
                    </div>
                    <div onClick={() => setCurrentScene(4)} onMouseEnter={() => setRightHover(true)} onMouseLeave={() => setRightHover(false)}className={styles.yesButton}>
                        {rightHover 
                            
                            ? <Image src={YesButtonActive} />
                            : <Image src={YesButtonInactive} />
                        }
                    </div>
                </>
            }
        </>
    )
}
