import React, { useState, useEffect } from 'react'
import styles from '../styles/mission/mission.module.css'
import Image from 'next/image/'
import frame from '../assets/missionAssets/frame.svg'
import Scene4 from '../components/missionComponents/scene4'
import IntroScene from '../components/missionComponents/introScene.js'
import OutroScene from '../components/missionComponents/outroScene.js'
import BlueScenes from '../components/missionComponents/blue/blueScenes'
import GreenScenes from '../components/missionComponents/green/greenScenes'
import RedScenes from '../components/missionComponents/red/redScenes'
import YellowScenes from '../components/missionComponents/yellow/yellowScenes'
import Dialog from '@material-ui/core/Dialog'
import clsx from 'clsx'
import {useRouter} from 'next/router'
import Error from 'next/error'
import axios from 'axios'

export default function Mission({userInfo}) {
    const [currentScene, setCurrentScene] = useState(3);
    const [character, setCharacter] = useState('yellow');
    const [chosenItems, setChosenItems] = useState([])
    const [openExitDialog, setOpenExitDialog] = useState(false)
    const [openStartOverDialog, setOpenStartOverDialog] = useState(false)
    const [answers, setAnswers] = useState({
        scene8: '',
        scene9: '',
        scene10: '',
        scene11: '',
        scene12: '',
        scene13: '',
        scene14: '',
        scene15: '',
        scene16: '',   
        scene17: '',      
    })

    const router = useRouter();

    useEffect(() => {
        if (userInfo.verified_email === 0) {
          router.push('/verify')
        }
      })



    const Scene = () => {
        if (currentScene === 3) {
            return <IntroScene setCurrentScene={setCurrentScene} />
        }
        else if (currentScene === 4) {
            return <Scene4 setCharacter={setCharacter} setCurrentScene={setCurrentScene} />
        } else if (currentScene < 18) {
            if (character === 'blue') return <BlueScenes setOpenStartOverDialog={setOpenStartOverDialog} currentScene={currentScene} answers={answers} setAnswers={setAnswers} setCurrentScene={setCurrentScene} chosenItems={chosenItems} setChosenItems={setChosenItems} />
            if (character === 'red') return <RedScenes setOpenStartOverDialog={setOpenStartOverDialog} currentScene={currentScene} answers={answers} setAnswers={setAnswers} setCurrentScene={setCurrentScene} chosenItems={chosenItems} setChosenItems={setChosenItems} />
            if (character === 'green') return <GreenScenes setOpenStartOverDialog={setOpenStartOverDialog} currentScene={currentScene} answers={answers} setAnswers={setAnswers} setCurrentScene={setCurrentScene} chosenItems={chosenItems} setChosenItems={setChosenItems} />
            if (character === 'yellow') return <YellowScenes setOpenStartOverDialog={setOpenStartOverDialog} currentScene={currentScene} answers={answers} setAnswers={setAnswers} setCurrentScene={setCurrentScene} chosenItems={chosenItems} setChosenItems={setChosenItems} />
        } else if (currentScene === 18) {
            return <OutroScene setCurrentScene={setCurrentScene} />
        } else {
            let query = answers;
            query['chosenItems'] = chosenItems;
            query['character'] = character;

            router.push({
                pathname: '/report',
                query: query,
            })
            return null
        }
    
    }

    if(!userInfo) {
        return <Error statusCode={401} title={"You are not authorized to view this content"} />
    }


    return (
        <div className={styles.missionRoot}>
            <Dialog maxWidth='sm' open={openExitDialog} onClose={() => setOpenExitDialog(false)}>
                <div className={styles.exitModal}>
                    <div className={styles.exitHeader}>
                        EXIT GAME 
                    </div>
                    <div className={styles.exitBodyText}>
                        Are you sure you want to leave your mission?<br/>
                        Exiting the game will mean losing all your progress.
                    </div>
                    <div className={styles.exitModalButtons}>
                        <button onClick={() => router.push('/')} className={clsx(styles.exitModalButton, styles.leftButton)}>YES, EXIT</button>
                        <button onClick={() => setOpenExitDialog(false)} className={clsx(styles.exitModalButton, styles.rightButton)}>CANCEL</button>
                    </div>
                </div>
            </Dialog>
            <Dialog maxWidth='sm' open={openStartOverDialog} onClose={() => setOpenStartOverDialog(false)}>
                <div className={styles.exitModal}>
                    <div className={styles.exitHeader}>
                        STARTING OVER?
                    </div>
                    <div className={styles.exitBodyText}>
                    Are you sure you want to start from the beginning?<br/>
                    Going back will mean losing all your progress you've<br/>
                    made so far..
                    </div>
                    <div className={styles.exitModalButtons}>
                        <button onClick={() => {
                            setCurrentScene(4)
                            setOpenStartOverDialog(false)
                            }} className={clsx(styles.exitModalButton, styles.leftButton)}>START OVER</button>
                        <button onClick={() => setOpenStartOverDialog(false)} className={clsx(styles.exitModalButton, styles.rightButton)}>CANCEL</button>
                    </div>
                </div>
            </Dialog>
            <div className={styles.outerDiv}>
                <div className={styles.progressBarDiv}>
                    <Image width={307} height={45} src={require('../assets/missionAssets/progressBars/progressBar' + (currentScene === 18 || currentScene === 19 ? 17 : currentScene) + '.svg')} />
                </div>
                <div className={styles.exitButtonDiv}>
                    <button onClick={() => setOpenExitDialog(true)} className={styles.exitButton}></button>
                    
                </div>
                    {<Scene />}
                <div className={styles.frameStyle}>
                    <Image className={styles.imgStyle} src={frame} />
                    
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    let userInfo = ''
    if (context.req.headers.cookie === undefined) {return {props:{userInfo}}}
    const res = await axios.get(process.env.SERVER_URL + '/api/auth/verify', {headers: context.req ? { cookie: context.req.headers.cookie } : undefined})
    const data = await res.data
    if (data.user) {
      userInfo = data.user
    }
    
    if (data.accessToken) {
      context.res.setHeader('Set-Cookie', ['access-token=' + data.accessToken + '; Max-Age=3600; HttpOnly'])
    }
  
    return {
      props: {userInfo}
    }
  }
