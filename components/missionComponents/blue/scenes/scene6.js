import React, { useState, useRef } from 'react'
import styles from '../../../../styles/mission/mission.module.css'
import Image from 'next/image'
import ButtonBar from '../../../../assets/missionAssets/buttonBar.png'
import LeftArrowActive from '../../../../assets/missionAssets/LeftArrowActive.png'
import RightArrowActive from '../../../../assets/missionAssets/rightArrowActive.png'
import LeftArrowInactive from '../../../../assets/missionAssets/LeftArrowInactive.png'
import RightArrowInactive from '../../../../assets/missionAssets/rightArrowInactive.png'


export default function Scene6({setCurrentScene, setOpenStartOverDialog}) {
    const [videoTime, setVideoTime] = useState(0)
    const [leftHover, setLeftHover] = useState(false)
    const [rightHover, setRightHover] = useState(false)
    const scene6 = useRef()

    const handleTimeChange = (e) => {
        setVideoTime(e.target.currentTime)
    }

    if (videoTime > 47) {
        scene6.current.pause()
    }

    return (
        <>
            <video poster="/loading_screen.gif" playsInline ref={scene6} onTimeUpdate={handleTimeChange} className={styles.backgroundVideo} autoPlay muted>
                <source src={"https://technius-sydney.s3.ap-southeast-2.amazonaws.com/missionAssets/scene6/blueScene6.webm"} type="video/webm" />
                <source src={"https://technius2022.s3.amazonaws.com/missionAssets/scene6/blueScene6.mp4"} type="video/mp4" />
                video not supported in this browser
            </video>
            { videoTime > 46 &&
                <>
                    <div className={styles.buttonBar}>
                        <Image src={ButtonBar}></Image>
                    </div>
                    <div onClick={() => setOpenStartOverDialog(true)} onMouseEnter={() => setLeftHover(true)} onMouseLeave={() => setLeftHover(false)} className={styles.leftArrow}>
                        {leftHover 
                            ? <Image src={LeftArrowActive} />
                            : <Image src={LeftArrowInactive} />
                        }
                    </div>
                    <div onClick={() => setCurrentScene(7)} onMouseEnter={() => setRightHover(true)} onMouseLeave={() => setRightHover(false)}className={styles.rightArrow}>
                        {rightHover 
                            ? <Image src={RightArrowActive} />
                            : <Image src={RightArrowInactive} />
                        }
                    </div>
                </>
            }
        </>
    )
}
