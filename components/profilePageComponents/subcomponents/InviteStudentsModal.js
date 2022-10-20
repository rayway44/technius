import React, { useState, useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog'
import styles from '../../../styles/profilePage/profileBody.module.css'
import Image from 'next/image'
import copyIcon from '../../../assets/profilePageAssets/copyIcon.svg'
import clsx from 'clsx'
import useMediaQuery from '@material-ui/core/useMediaQuery'


export default function InviteStudentsModal({inviteStudentsModal, setInviteStudentsModal, currentClass, handleInviteStudents, studentInviteSuccess, setStudentInviteSuccess}) {
    const [showClipboardAlert, setClipboardAlert] = useState(false);
    const [showStudentList, setShowStudentList] = useState(false)
    const [studentList, setStudentList] = useState('')
    const [hostURL, setHostURL] = useState('')

    const matches = useMediaQuery('(max-width: 1920px)')

    useEffect(() => {
        setHostURL(window.location.origin.toString())
    }, [])

    const handleModalClose = () => {
        setInviteStudentsModal(false) 
        setClipboardAlert(false)
        setShowStudentList(false)
        setStudentList('')
        setStudentInviteSuccess('placeholder')
    }

    return (
        <Dialog open={inviteStudentsModal} onClose={handleModalClose} maxWidth="sm" fullWidth={matches ? false : true}>
            <div className={styles.addClassModal}>
                <div className={styles.addClassModalHeader}>
                    Invite Students
                </div>
                {showStudentList 
                ? 
                    <div style={{paddingBottom: '0'}} className={styles.addClassNameDiv}>
                        <p style={{marginTop: '0'}}>Spearate emails by a line break or comma</p>
                        <textarea value={studentList} onChange={(e) => setStudentList(e.target.value)} placeholder="type here" className={styles.studentListTextarea} />
                        {studentInviteSuccess === 'unsuccessful' && (<span className={styles.studentInviteError}>An error occurred, please try again later</span>)}
                    </div>
                :
                    <div style={{paddingBottom: '0'}} className={styles.addClassNameDiv}>
                        <p style={{marginTop: '0'}}>Invite students to join you class by sending them:</p>
                        <div>
                            <label><b>Class URL</b></label>
                            <div className={styles.inviteStudentsInputAndIcon}>
                                <input readOnly value={hostURL + '/' + currentClass.class_uuid} className={clsx(styles.profileUpdaterInput, styles.addClassInput)} placeholder="type here" />
                                <Image onClick={() => {
                                    navigator.clipboard.writeText(hostURL + '/' + currentClass.class_uuid)
                                    setClipboardAlert(true)
                                    }} width={20} src={copyIcon} alt="copy icon" />
                            </div>
                            <div className={clsx(styles.clipboardAlert, {[styles.visible]: showClipboardAlert})}>copied to clipboard</div>
                        </div>
                        <button onClick={() => setShowStudentList(true)} className={styles.inviteButton}>Invite by email</button>  
                    </div>
                }
                <button onClick={() => showStudentList ? studentList ? handleInviteStudents(studentList, currentClass.class_uuid) : alert('list cannot be empty') : handleModalClose()} className={clsx(styles.addClassNextButton)}>{showStudentList ? 'SEND' : 'DONE'}</button>
            </div>
        </Dialog>
    )
}
