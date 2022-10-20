import React, { useState, useRef } from 'react'
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
import PasswordResetForm from './PasswordResetForm'

export default function HeaderLogin({ open, setOpen, uuid }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginSelect, setLoginSelect] = useState(uuid ? 'student' : 'teacher')
    const [submitAttempted, setSubmitAttempted] = useState(false)
    const [emailPopup, setEmailPopup] = useState(false)
    const [passwordPopup, setPasswordPopup] = useState(false)
    const [resetOpen, setResetOpen] = useState(false);

    const emailRef = useRef();
    const passwordRef = useRef();
    const emailPopperRef = useRef();
    const passwordPopperRef = useRef();
    const emailPopper = usePopper(emailRef.current, emailPopperRef.current, {placement: 'top-end'})
    const passwordPopper = usePopper(passwordRef.current, passwordPopperRef.current, {placement: 'top-end'})


    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (
            loginSelect === 'teacher'
            && email !== ''
            && password !== ''
            ) {
            setPasswordPopup(false)
            setEmailPopup(false)
            axios.post('/api/auth/login/teacher', {
                email: email,
                password: password
            })
            .then((response) => {
                window.location.replace('/')
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    setPassword('')
                    setPasswordPopup(true)
                } else if (error.response.status === 404) {
                    setPassword('')
                    setEmailPopup(true)
                }
            })
        } else if (
            loginSelect === 'student'
            && email !== ''
            && password !== ''
            ) {
            setPasswordPopup(false)
            setEmailPopup(false)
            axios.post('/api/auth/login/student', {
                email: email,
                password: password,
                uuid: uuid
            })
            .then((response) => {
                window.location.replace('/')
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    setPassword('')
                    setPasswordPopup(true)
                } else if (error.response.status === 404) {
                    setPassword('')
                    setEmailPopup(true)
                }
            })
        } else {
            setSubmitAttempted(true)
        }
    }

    const handleModalClose = () => {
        setOpen(false)
        setSubmitAttempted(false)
        setEmail('')
        setPassword('')
        setEmailPopup(false)
        setPasswordPopup(false)
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
                        <h2 className={styles.loginTitle}>Log In</h2>
                        <p className={styles.loginSubheader}>Welcome back, we've missed you!</p>
                        <div className={styles.loginForm}>
                                <div className={styles.signupSelect}>
                                    <p className={styles.signupSelectLabel}><b>I am a...</b></p>
                                    <span>*</span>
                                    <select defaultValue={loginSelect} onChange={(e) => setLoginSelect(e.target.value)} className={styles.signupSelectInput}>
                                        <option value="teacher">teacher</option>
                                        <option value="student">student</option>
                                    </select>
                                </div>
                                <div className={styles.emailInput}>
                                    <p className={styles.loginInputLabel}>
                                        Email
                                        <span>*</span>
                                    </p>
                                    <input ref={emailRef} value={email} onChange={(e) => setEmail(e.target.value)} className={clsx(styles.loginInputBox, {[styles.emptyInput]: submitAttempted && email === ''})} placeholder="type here"></input>
                                </div>
                                <div className={styles.passwordInput}>
                                    <p className={styles.loginInputLabel}>
                                        Password
                                        <span>*</span>
                                    </p>
                                    <input ref={passwordRef} value={password} onChange={(e) => setPassword(e.target.value)} type='password' className={clsx(styles.loginInputBox, {[styles.emptyInput]: submitAttempted && password === ''})} placeholder="type here"></input>
                                    <span onClick={() => {
                                        setResetOpen(true)
                                        handleModalClose()
                                        }} className={styles.forgotPassword}>I forgot my password</span>
                                </div>
                        </div>
                    </div>
                    <input type='submit' value="LOG IN" className={styles.loginButtonDiv} />
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
                <div className={clsx(styles.emailErrorPopper, {[styles.menuHidden]: !passwordPopup})} ref={passwordPopperRef} style={passwordPopper.styles.popper} {...passwordPopper.attributes.popper}>
                    <div className={styles.errorIconBlack}>
                        <Image src={errorIconBlack} />
                    </div>
                    <div className={styles.emailErrorPopperText}>
                        Sorry that password isn't right.
                        We can help you <u onClick={() => {
                            setResetOpen(true)
                            handleModalClose()
                            }} className={styles.passwordResetHelpPopper}>reset it here</u>.
                    </div>
                </div>
            </Dialog>
            <PasswordResetForm open={resetOpen} setOpen={setResetOpen} />
        </div>
    )
}
