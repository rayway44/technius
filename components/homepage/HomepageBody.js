import React, { useState, useRef, useEffect} from 'react'
import Container from '@material-ui/core/Container'
import styles from '../../styles/homepage/homepageBody.module.css'
import Planets from '../../assets/homepageImages/planets.png'
import Rocketship from '../../assets/homepageImages/rocketship.png'
import loading from '../../assets/loadingIcon.svg'
import Image from 'next/image'
import Dialog from '@material-ui/core/Dialog'
import WhatIsItModal from './WhatIsItModal'
import WhyPlayItModal from './WhyPlayItModal'
import DownIcon from '../../assets/homepageImages/downIcon.svg'
import Link from 'next/link'
import {useRouter} from 'next/router'
import useMediaQuery from '@material-ui/core/useMediaQuery'


export default function HomepageBody({ user, setSignupOpen }) {
    const [openLeftModal, setOpenLeftModal] = useState(false);
    const [openRightModal, setOpenRightModal] = useState(false);
    const [missionButtonClicked, setMissionButtonClicked] = useState(false);
    const router = useRouter();
    const scrollToDiv = useRef(null)
    const matches = useMediaQuery('(min-width: 1600px)')

    useEffect(() => {
        const browser = navigator.userAgent
        const chrome = browser.search(/Safari|Chrome/)

        console.log(chrome)
        
        if(chrome > 90){
            console.log('You are ON SAFARI')
            
        } else {
            console.log('You are NOT on SAFARI')
            
        }
    })


    return (
        <div className={styles.homepageBodyRoot}>
            <Container maxWidth='xl'>
                <div className={styles.homepageTop}>
                    <div className={styles.discoverTitle}>
                        Discover Planet Technius.<br/>
                        Discover your future<br/>
                        in Tech.
                    </div>
                    <div className={styles.discoverSubtitle}>
                        The game plan is simple – Join us on the<br/>
                        Mission to Planet Technius, solve the mission<br/>
                        challenges, select a path and discover your<br/>
                        career options in the IT Industry. CHANGED 
                    </div>
                        <div>
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
                </div>
                <div className={styles.downIconDiv}>
                    <Image onClick={() => scrollToDiv.current.scrollIntoView({ behavior: "smooth" })} src={DownIcon} />
                </div>
                <div className={styles.homepageBottom}>
                    <div className={styles.aboutGame}>
                        <div ref={scrollToDiv} className={styles.aboutGameTitle}>
                            About This Game
                        </div>
                        <p className={styles.aboutGameSubtitle}>
                            We’ve developed an online adventure that takes you on a mission to a distant planet where
                            important decisions need to be made. Learn about it here!
                        </p>
                    </div>
                    <div className={styles.learnMoreCards}>
                        <div className={styles.whatIsItCard}>
                            <div className={styles.card}>
                                <Image src={Planets} alt="Planets" />
                                <p className={styles.cardTitle}>WHAT IS IT?</p>
                                <p className={styles.cardText}>
                                    Ever wondered who makes<br/>
                                    the games you play or<br/>
                                    builds the apps you use…
                                </p>
                            </div>
                            <div onClick={() => setOpenLeftModal(true)} className={styles.learnMoreButton}>
                                Learn More
                            </div>
                            <WhatIsItModal matches={matches} open={openLeftModal} setOpen={setOpenLeftModal} />
                        </div>
                        <div className={styles.whyPlayItCard}>
                            <div className={styles.card}>
                                <Image src={Rocketship} alt="Rocketship" />
                                <p className={styles.cardTitle}>WHY PLAY IT?</p>
                                <p className={styles.cardText}>
                                    A career in technology can<br/>
                                    be really exciting and<br/>
                                    something you should…
                                </p>
                            </div>
                            <div onClick={() => setOpenRightModal(true)} className={styles.learnMoreButton}>
                                Learn More
                            </div>
                            <WhyPlayItModal matches={matches} open={openRightModal} setOpen={setOpenRightModal} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
