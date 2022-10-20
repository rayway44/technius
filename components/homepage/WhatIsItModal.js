import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import styles from '../../styles/homepage/homepageBody.module.css'
import makeStyles from '@material-ui/styles/makeStyles'
import Image from 'next/image'
import Planets from '../../assets/homepageImages/planets.png'


const style = makeStyles({
    paper: {
        borderRadius: '23px'
    }
})

export default function WhatIsItModal({ matches, open, setOpen }) {
    const muiStyles = style();

    return (
        <div>
            <Dialog classes={{paper: muiStyles.paper}} fullWidth maxWidth={matches ? "lg" : "md"} open={open} onClose={() => setOpen(false)}>
                <div className={styles.whatIsItModal}>
                    <div className={styles.leftModalHeader}>
                        <Image  width={250} height={250} src={Planets} alt="Planets" />
                        <p className={styles.leftModalHeaderTitle}>WHAT IS IT?</p>
                    </div>
                    <div className={styles.leftModalText}>
                        <p className={styles.leftModalTextP1}>Ever wondered who makes the games you play or builds the apps you use?</p>
                        <p className={styles.leftModalTextP2}>
                            They are called IT (information technology) professionals, and New Zealand is needing 
                            more and more! Not only do they get paid really well, but their job is to change the 
                            future so it’s better for all of us!
                        </p>
                        <p className={styles.leftModalTextP3}>But how would you get such a cool job and what skills would you need?</p>
                        <p className={styles.leftModalTextP4}>
                            To help you understand this better, we’ve developed an online 
                            mission that takes you to a distant planet! If you are going to get there safely, 
                            you’ll need to solve some tricky problems and make some important decisions.
                        </p>
                        <p className={styles.leftModalTextP5}>
                            Based on your answers we’ll provide a Mission Report that tells you which qualities 
                            you showed best and what tech career you could potentially have one day! We’ll even 
                            let you know which high school subjects and online resources can help you get there.
                        </p>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

   

