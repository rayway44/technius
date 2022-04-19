import React from 'react'
import styles from '../../styles/aboutPage/OurMission.module.css'
import Planets from '../../assets/aboutPageAssets/planets.svg'
import Image from 'next/image'

export default function OurMission() {
    return (
        <div className={styles.ourMissionRoot}>
            <div className={styles.ourMissionText}>
                <h1 className={styles.ourMissionHeader}>Our Mission</h1>
                <p className={styles.ourMissionSubheader1}>
                    Mission Technius is an online mission developed by 
                    The Southern Initiative of Auckland Council and 
                    Mission ReadyHQ.
                </p>
                <p className={styles.ourMissionSubheader2}>
                    Our vision is to inspire school children to consider 
                    IT (information technology) careers and provide 
                    improved awareness around their options in this 
                    space. By doing this we aim to help them make 
                    better-informed decisions around high school 
                    subjects and extra-curricular activities focused on 
                    IT – whether these take place at school or even at 
                    home.
                </p>
            </div>
            <div className={styles.ourMissionImage}>
                <Image src={Planets} alt="Planets" />
            </div>
        </div>
    )
}
