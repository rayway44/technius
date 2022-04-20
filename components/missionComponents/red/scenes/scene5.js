import React, { useState, useRef, useEffect } from 'react'
import styles from '../../../../styles/mission/mission.module.css'
import Grid from '@material-ui/core/Grid'
import clsx from 'clsx'
import Image from 'next/image'
import ButtonBar from '../../../../assets/missionAssets/buttonBar.png'
import LeftArrowActive from '../../../../assets/missionAssets/LeftArrowActive.png'
import RightArrowActive from '../../../../assets/missionAssets/rightArrowActive.png'
import LeftArrowInactive from '../../../../assets/missionAssets/LeftArrowInactive.png'
import RightArrowInactive from '../../../../assets/missionAssets/rightArrowInactive.png'
import axios from 'axios'
import useMediaQuery from '@material-ui/core/useMediaQuery'



export default function Scene5({setOpenStartOverDialog, chosenItems, setChosenItems, setCurrentScene, video}) {
    const [videoTime, setVideoTime] = useState(0)
    const [bool, refreshPage] = useState(false)
    const [leftHover, setLeftHover] = useState(false)
    const [rightHover, setRightHover] = useState(false)
    const vid = useRef(null)
    const matches = useMediaQuery('(max-width: 1920px)')
    

    const handleClick = (e) => {
        let temp = chosenItems

        if (temp.includes(e.target.value)) {
            let index = temp.indexOf(e.target.value)
            temp.splice(index, 1)
        } else if (temp.length < 3) {
            temp.push(e.target.value)
        }

        setChosenItems(temp)
        refreshPage(!bool)
    }

    const handleTimeChange = (e) => {
        setVideoTime(e.target.currentTime)
    }

    const handleSubmit = () => {
        if (chosenItems.length < 3) {
            alert('Please choose 3 items')
        } else {
            setCurrentScene(6)
        }
    }

    return (
        <>
            <video poster="/loading_screen.gif" playsInline ref={vid} onTimeUpdate={handleTimeChange} className={styles.backgroundVideo} autoPlay muted>
                <source src={"https://technius2022.s3.amazonaws.com/missionAssets/scene5/redScene5.mp4"} type="video/mp4" />
                video not supported in this browser
            </video>
            { videoTime > 5 &&
                <>
                    <Grid style={{position: "absolute", width: (matches ? "31%" : "29.5%"), right: (matches ? "6.5%" : "9%"), top: (matches ? "39%" : "39%"), zIndex: '10'}} container spacing={0}>
                        <Grid item xs={4}>
                            <button value="books" className={clsx(styles.chooseItemsButton, {[styles.chosenItem]: chosenItems.indexOf("books") !== -1})} onClick={handleClick}></button>
                        </Grid>
                        <Grid item xs={4}>
                            <button value="laptop" className={clsx(styles.chooseItemsButton, {[styles.chosenItem]: chosenItems.indexOf("laptop") !== -1})} onClick={handleClick}></button>
                        </Grid>
                        <Grid item xs={4}>
                            <button value="windows" className={clsx(styles.chooseItemsButton, {[styles.chosenItem]: chosenItems.indexOf("windows") !== -1})} onClick={handleClick} ></button>
                        </Grid>
                        <Grid item xs={4}>
                            <button value="tools" className={clsx(styles.chooseItemsButton, {[styles.chosenItem]: chosenItems.indexOf("tools") !== -1})} onClick={handleClick} ></button>
                        </Grid>
                        <Grid item xs={4}>
                            <button value="flashlight" className={clsx(styles.chooseItemsButton, {[styles.chosenItem]: chosenItems.indexOf("flashlight") !== -1})} onClick={handleClick} ></button>
                        </Grid>
                        <Grid item xs={4}>
                            <button value="cds" className={clsx(styles.chooseItemsButton, {[styles.chosenItem]: chosenItems.indexOf("cds") !== -1})} onClick={handleClick} ></button>
                        </Grid>
                        <Grid item xs={4}>
                            <button value="boots" className={clsx(styles.chooseItemsButton, {[styles.chosenItem]: chosenItems.indexOf("boots") !== -1})} onClick={handleClick} ></button>
                        </Grid>
                        <Grid item xs={4}>
                            <button value="compass" className={clsx(styles.chooseItemsButton, {[styles.chosenItem]: chosenItems.indexOf("compass") !== -1})} onClick={handleClick} ></button>
                        </Grid>
                        <Grid item xs={4}>
                            <button value="map" className={clsx(styles.chooseItemsButton, {[styles.chosenItem]: chosenItems.indexOf("map") !== -1})} onClick={handleClick} ></button>
                        </Grid>
                        <Grid item xs={4}>
                            <button value="phone" className={clsx(styles.chooseItemsButton, {[styles.chosenItem]: chosenItems.indexOf("phone") !== -1})} onClick={handleClick} ></button>
                        </Grid>
                        <Grid item xs={4}>
                            <button value="food" className={clsx(styles.chooseItemsButton, {[styles.chosenItem]: chosenItems.indexOf("food") !== -1})} onClick={handleClick} ></button>
                        </Grid>
                        <Grid item xs={4}>
                            <button value="microscope" className={clsx(styles.chooseItemsButton, {[styles.chosenItem]: chosenItems.indexOf("microscope") !== -1})} onClick={handleClick} ></button>
                        </Grid>
                    </Grid>
                    <div className={styles.buttonBar}>
                        <Image src={ButtonBar}></Image>
                    </div>
                    <div onClick={() => setOpenStartOverDialog(true)} onMouseEnter={() => setLeftHover(true)} onMouseLeave={() => setLeftHover(false)} className={styles.leftArrow}>
                        {leftHover 
                            ? <Image src={LeftArrowActive} />
                            : <Image src={LeftArrowInactive} />
                        }
                    </div>
                    <div onClick={() => handleSubmit()} onMouseEnter={() => setRightHover(true)} onMouseLeave={() => setRightHover(false)} className={styles.rightArrow}>
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
