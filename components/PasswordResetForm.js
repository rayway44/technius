import React, { useState, useRef, useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog'
import styles from '../styles/Header.module.css'
import spaceManWithFlag from '../assets/spacemanWithFlag.png';
import errorIconBlack from '../assets/errorIconBlack.svg';
import closeIcon from '../assets/closeIcon.svg';
import Image from 'next/image'
import axios from 'axios'
import {useRouter} from 'next/router'
import clsx from 'clsx'
import {usePopper} from 'react-popper'

export default function PasswordResetForm({ open, setOpen }) {
    const [email, setEmail] = useState('')
    const [submitAttempted, setSubmitAttempted] = useState(false)
    const [emailPopup, setEmailPopup] = useState(false)
    const [successPopup, setSuccessPopup] = useState(false);

    const emailRef = useRef();
    const emailPopperRef = useRef();
    const emailPopper = usePopper(emailRef.current, emailPopperRef.current, {placement: 'top-end'})


    const router = useRouter()


    const handleSubmit = (e) => {
        e.preventDefault()
        setSuccessPopup(false)
        setEmailPopup(false)
        
        axios.post('/api/auth/password-reset-submission', {
            email: email,
        })
        .then(res => {
            console.log(res.data)
            setSuccessPopup(true)
        })
        .catch((err) => {
            setEmailPopup(true)
        })
    }

    const handleModalClose = () => {
        setOpen(false)
        setSubmitAttempted(false)
        setEmail('')
        setEmailPopup(false)
        setSuccessPopup(false)
    }

    return (
        <div>
            <Dialog maxWidth="sm" open={open} onClose={handleModalClose}>
                <div className={styles.loginDialogRoot}>
                <form onSubmit={handleSubmit}>
                    <div onClick={() => setOpen(false)} className={styles.closeIconDiv}>
                            <Image src={closeIcon} alt="close icon" />
                    </div>
                    <div className={styles.loginDialogTop}>
                        <h2 className={styles.loginTitle}>Reset Password</h2>
                        <p className={styles.loginSubheader}>Please type your email into the box below</p>
                        <div className={styles.resetForm}>
                            <div className={styles.emailInput}>
                                <p className={styles.loginInputLabel}>
                                    Email
                                    <span>*</span>
                                </p>
                                <input ref={emailRef} value={email} onChange={(e) => setEmail(e.target.value)} className={clsx(styles.loginInputBox, {[styles.emptyInput]: submitAttempted && email === ''})} placeholder="type here"></input>
                            </div>
                            <div style={{marginTop: '1rem'}} className={clsx({[styles.successHidden]: !successPopup})}>Success! Please check your email for the passoword reset link.</div>
                        </div>
                    </div>
                    <input type='submit' value="Submit" className={styles.loginButtonDiv} />
                </form> 
                </div>
                <div className={clsx(styles.emailErrorPopper, {[styles.menuHidden]: !emailPopup})} ref={emailPopperRef} style={emailPopper.styles.popper} {...emailPopper.attributes.popper}>
                    <div className={styles.errorIconBlack}>
                        <Image src={errorIconBlack} />
                    </div>
                    <div className={styles.emailErrorPopperText}>
                        Sorry that email isn't right.
                    </div>
                </div>
            </Dialog>
        </div>
    )
}
