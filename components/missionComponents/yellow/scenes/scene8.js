import React, { useState, useRef } from 'react'
import styles from '../../../../styles/mission/mission.module.css'
import Image from 'next/image'
import OptionSelectBar from '../../../../assets/missionAssets/optionSelectBar.svg'
import OptionASelected from '../../../../assets/missionAssets/optionASelected.png'
import OptionBSelected from '../../../../assets/missionAssets/optionBSelected.png'
import OptionCSelected from '../../../../assets/missionAssets/optionCSelected.png'
import OptionAInactive from '../../../../assets/missionAssets/optionAInactive.png'
import OptionBInactive from '../../../../assets/missionAssets/optionBInactive.png'
import OptionCInactive from '../../../../assets/missionAssets/optionCInactive.png'
import LeftArrowActive from '../../../../assets/missionAssets/LeftArrowActive.png'
import RightArrowActive from '../../../../assets/missionAssets/rightArrowActive.png'
import LeftArrowInactive from '../../../../assets/missionAssets/LeftArrowInactive.png'
import RightArrowInactive from '../../../../assets/missionAssets/rightArrowInactive.png'



export default function Scene8({setCurrentScene, answers, setAnswers, setOpenStartOverDialog}) {
    const scene8 = useRef()
    const [videoTime, setVideoTime] = useState(0)
    const [leftHover, setLeftHover] = useState(false)
    const [rightHover, setRightHover] = useState(false)
    const [AHover, setAHover] = useState(false)
    const [BHover, setBHover] = useState(false)
    const [CHover, setCHover] = useState(false)
    const [activeButton, setActiveButton] = useState('')


    const handleTimeChange = (e) => {
        setVideoTime(e.target.currentTime)
    }

    const handleClick = (newActiveButton) => {
        activeButton === newActiveButton ? setActiveButton('') : setActiveButton(newActiveButton)
    }

    const handleSubmit = () => {
        if (activeButton === '') {
            alert("Please choose an answer before moving on")
        } else {
            let temp = answers;
            temp['scene8'] = activeButton
            setAnswers(temp)
            
            setCurrentScene(9)
        }
    }


    return (
        <>
            <video poster="/loading_screen.gif" playsInline ref={scene8} onTimeUpdate={handleTimeChange} className={styles.backgroundVideo} autoPlay muted>
                {/* <source src={"https://technius2022.s3.amazonaws.com/missionAssets/scene8/yellowScene8.mp4"} type="video/mp4" /> */}
                <source src={"https://technius-sydney.s3.ap-southeast-2.amazonaws.com/missionAssets/scene8/yellowScene8.webm"} type="video/webm" />
                video not supported in this browser
            </video>
            { videoTime > 14 &&
                <>
                    <div className={styles.buttonBar}>
                        <Image src={OptionSelectBar}></Image>
                    </div>
                    <div className={styles.optionButtons}>
                        {AHover || activeButton === 'A'
                            ? <Image onClick={() => handleClick("A")} onMouseLeave={() => setAHover(false)} height={70} width={180} src={OptionASelected}></Image>
                            : <Image onMouseEnter={() => setAHover(true)} height={70} width={180} src={OptionAInactive}></Image>
                        }
                        {BHover || activeButton === 'B'
                            ? <Image onClick={() => handleClick("B")} onMouseLeave={() => setBHover(false)} height={70} width={180} src={OptionBSelected}></Image>
                            : <Image onMouseEnter={() => setBHover(true)} height={70} width={180} src={OptionBInactive}></Image>
                        }
                        {CHover || activeButton === 'C'
                            ? <Image onClick={() => handleClick("C")} onMouseLeave={() => setCHover(false)} height={70} width={180} src={OptionCSelected}></Image>
                            : <Image onMouseEnter={() => setCHover(true)} height={70} width={180} src={OptionCInactive}></Image>
                        }
                    </div>
                    <div onClick={() => setOpenStartOverDialog(true)} onMouseEnter={() => setLeftHover(true)} onMouseLeave={() => setLeftHover(false)} className={styles.leftArrowWithOptions}>
                        {leftHover 
                            ? <Image src={LeftArrowActive} />
                            : <Image src={LeftArrowInactive} />
                        }
                    </div>
                    <div onClick={() => handleSubmit()} onMouseEnter={() => setRightHover(true)} onMouseLeave={() => setRightHover(false)} className={styles.rightArrowWithOptions}>
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
