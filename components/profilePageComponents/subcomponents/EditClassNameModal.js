import React, { useState, useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog'
import styles from '../../../styles/profilePage/profileBody.module.css'
import clsx from 'clsx'
import useMediaQuery from '@material-ui/core/useMediaQuery'


export default function EditClassNameModal({ currentClass, setCurrentClass, handleNameChange, nameChangeModal, setNameChangeModal }) {
    const [name, setName] = useState('')

    const matches = useMediaQuery('(max-width: 1920px)')

    useEffect(() => {
        setName(currentClass.class_name)
    }, [currentClass])

    return (
        <Dialog open={nameChangeModal} onClose={() => {
            setNameChangeModal(false) 
            }} maxWidth="sm" fullWidth={matches ? false : true}>
            <div className={styles.addClassModal}>
                <div className={styles.addClassModalHeader}>
                    Edit Class Name
                </div>
                <div className={styles.addClassNameDiv}>
                    <div>
                        <label><b>Class name</b></label>
                        <div>
                            <input value={name} onChange={(e) => setName(e.target.value)} className={clsx(styles.profileUpdaterInput, styles.addClassInput)} placeholder="type here" />
                        </div>
                    </div>  
                </div>
                <button onClick={() => handleNameChange(currentClass.class_id, name)} className={clsx(styles.addClassNextButton)}>NEXT</button>
            </div>
        </Dialog>
    )
}
