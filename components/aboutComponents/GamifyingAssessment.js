import React, { useState } from 'react'
import styles from '../../styles/aboutPage/GamifyingAssessment.module.css'
import SpaceMan from '../../assets/aboutPageAssets/spaceMan.svg'
import Image from 'next/image'
import Link from 'next/link'
import loading from '../../assets/loadingIcon.svg'


export default function GamifyingAssessment({ user, setSignupOpen }) {
    const [missionButtonClicked, setMissionButtonClicked] = useState(false);

    return (
        <div className={styles.gamifyRoot}>
            <h1 className={styles.gamifyHeader}>Gamifying the Assessment Tool</h1>
            <div className={styles.gamifyBody}>
                <div className={styles.gamifyTextDiv}>
                    <p className={styles.gamifyText1}>
                        Using a clever blend of education and entertainment, we’ve 
                        developed an online mission that takes students to the planet 
                        Technius. During this mission, they are confronted with a range of 
                        different challenges, each of which requires the 
                        player to choose from three response actions. 
                    </p>
                    <p className={styles.gamifyText2}>
                        With every decision a student makes, their choices are given a 
                        score that relates to the personal qualities and job role-
                        specific capabilities. 
                    </p>
                    <p className={styles.gamifyText3}>
                        Note: As is the case with many assessment tools of this nature, 
                        the “score” that the player achieves should be regarded as a 
                        broad and subjective interpretation of the extent to which 
                        that player has demonstrated the range of skills that the 
                        model aims to evaluate. It is entirely possible that a player 
                        could play the game today and be presented with one 
                        particular profile yet play it again tomorrow and receive a 
                        different response.
                    </p>
                    {user 
                    ?
                        <Link href="/mission">
                            <button onClick={() => setMissionButtonClicked(true)} className={styles.joinMissionButton}>
                                {missionButtonClicked ? <Image src={loading} /> : 'JOIN MISSION'}
                            </button>
                        </Link>
                    :
                        <button onClick={() => setSignupOpen(true)} className={styles.joinMissionButton}>
                            {missionButtonClicked ? <Image src={loading} /> : 'JOIN MISSION'}
                        </button>
                    }
                </div>
                <div className={styles.gamifyImage}>
                    <Image src={SpaceMan} alt="Space Man" />
                </div>
            </div>
        </div>
    )
}