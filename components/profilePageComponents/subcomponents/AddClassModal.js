import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import styles from '../../../styles/profilePage/profileBody.module.css'
import clsx from 'clsx'
import useMediaQuery from '@material-ui/core/useMediaQuery'


export default function AddClassModal({class_name, setClassName, addClassModal, setAddClassModal, handleAddClass}) {
    const matches = useMediaQuery('(max-width: 1920px)')

    
    return (
        <Dialog open={addClassModal} onClose={() => {
            setAddClassModal(false) 
            setClassName('')
            }} maxWidth="sm" fullWidth={matches ? false : true}>
            <div className={styles.addClassModal}>
                <div className={styles.addClassModalHeader}>
                    Add a new class
                </div>
                <div className={styles.addClassNameDiv}>
                    <div>
                        <label><b>Class name</b></label>
                        <div>
                            <input value={class_name} onChange={(e) => setClassName(e.target.value)} className={clsx(styles.profileUpdaterInput, styles.addClassInput)} placeholder="type here" />
                        </div>
                    </div>  
                </div>
                <button onClick={handleAddClass} className={clsx(styles.addClassNextButton)}>DONE</button>
            </div>
        </Dialog>
    )
}
