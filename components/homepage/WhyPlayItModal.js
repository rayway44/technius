import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import styles from '../../styles/homepage/homepageBody.module.css'
import makeStyles from '@material-ui/styles/makeStyles'
import Image from 'next/image'
import Rocketship from '../../assets/homepageImages/rocketship.png'


const style = makeStyles({
    paper: {
        borderRadius: '23px'
    }
})

export default function WhyPlayItModal({ matches, open, setOpen }) {
    const muiStyles = style();

    return (
        <div>
            <Dialog classes={{paper: muiStyles.paper}} fullWidth maxWidth={matches ? "lg" : "md"} open={open} onClose={() => setOpen(false)}>
                <div className={styles.whyPlayItModal}>
                    <div className={styles.rightModalHeader}>
                        <Image width={250} height={250} src={Rocketship} alt="Planets" />
                        <p className={styles.rightModalHeaderTitle}>WHY PLAY IT?</p>
                    </div>
                    <div className={styles.rightModalText}>
                        <p className={styles.rightModalTextP1}>
                            For students in year 8 and 9, this online mission has been designed to help you 
                            make educated decisions about your future. This includes what subjects to take 
                            in high school if relevant to you. By entering on this online mission, you will: 
                        </p>
                        <ul>
                            <li>Discover your strongest career qualities/skills.</li>
                            <li>Learn more about the tech industry.</li>
                            <li>Discover which tech career you could potentially have.</li>
                            <li>Know which subjects to consider for high school.</li>
                        </ul>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

 
 
