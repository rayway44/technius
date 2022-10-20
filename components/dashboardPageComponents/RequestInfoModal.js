import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import styles from '../../styles/profilePage/profileBody.module.css'
import clsx from 'clsx'
import useMediaQuery from '@material-ui/core/useMediaQuery'


export default function RequestInfoModal({ open, setOpen }) {
    const matches = useMediaQuery('(max-width: 1920px)')

    
    return (
        <Dialog open={open} onClose={() => {
            setOpen(false) 
            }} maxWidth="sm" fullWidth={matches ? false : true}>
            <div className={styles.addClassModal}>
                <div className={styles.addClassModalHeader}>
                    Request Sent
                </div>
                <div className={styles.addClassNameDiv}>
                    <p>Please look out for your class report in the next 1-2 days. Thank you for your patience.</p>
                </div>
                <button onClick={() => setOpen(false)} className={clsx(styles.addClassNextButton)}>GOT IT</button>
            </div>
        </Dialog>
    )
}
