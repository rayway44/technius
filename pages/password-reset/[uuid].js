import Header from '../../components/Header'
import React, { useState, useRef, useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog'
import styles from '../../styles/Header.module.css'
import spaceManWithFlag from '../../assets/spacemanWithFlag.png';
import errorIconBlack from '../../assets/errorIconBlack.svg';
import closeIcon from '../../assets/closeIcon.svg';
import Image from 'next/image'
import axios from 'axios'
import {useRouter} from 'next/router'
import clsx from 'clsx'
import {usePopper} from 'react-popper'
import Custom404 from '../404'

export default function passwordReset({userInfo, isUUID}) {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [submitAttempted, setSubmitAttempted] = useState(false)
    const [passwordPopup, setPasswordPopup] = useState(false)
    const [successPopup, setSuccessPopup] = useState(false);
    const [errorPopup, setErrorPopup] = useState(false)

    const passwordRef = useRef();
    const passwordPopperRef = useRef();
    const passwordPopper = usePopper(passwordRef.current, passwordPopperRef.current, {placement: 'top'})


    const router = useRouter()

    if (!router.query.uuid) {
        return <Custom404 />
    }

    if (!isUUID) return <Custom404 />


    const handleSubmit = (e) => {
        e.preventDefault()
        setSuccessPopup(false)
        setPasswordPopup(false)
        setErrorPopup(false)
        setSubmitAttempted(false)

        if (password === confirmPassword && (password.length > 0 && confirmPassword.length > 0)) {
            axios.post('/api/auth/password-reset', {
                password: password,
                uuid: router.query.uuid
            })
            .then(res => {
                setSuccessPopup(true)
                setPassword('')
                setConfirmPassword('')
                router.push('/')
            })
            .catch((err) => {
                setSuccessPopup(true)
                setErrorPopup(true)
                setPassword('')
                setConfirmPassword('')
            })
        } else if (password.length === 0) {
            setSubmitAttempted(true)
        } else {
            setPasswordPopup(true)
        }
    }

    return (
        <div>
            <Header user={userInfo}/>
            <div className={styles.passwordResetPage}>
                <div className={styles.loginDialogRoot}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.resetPasswordDiv}>
                            <h2 className={styles.resetPasswordTitle}>Reset Password</h2>
                            <p className={styles.loginSubheader}>Please type your new password below</p>
                            <div className={styles.loginForm}>
                                <div className={styles.emailInput}>
                                    <p className={styles.loginInputLabel}>
                                        Password
                                        <span>*</span>
                                    </p>
                                    <input ref={passwordRef} value={password} onChange={(e) => setPassword(e.target.value)} className={clsx(styles.loginInputBox, {[styles.emptyInput]: submitAttempted && password === ''})} placeholder="type here"></input>
                                </div>
                                <div className={styles.emailInput}>
                                    <p className={styles.loginInputLabel}>
                                        Confirm Password
                                        <span>*</span>
                                    </p>
                                    <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className={clsx(styles.loginInputBox, {[styles.emptyInput]: submitAttempted && confirmPassword === ''})} placeholder="type here"></input>
                                </div>
                                <div className={clsx(styles.messagePopup, {[styles.successHidden]: !successPopup})}>{errorPopup ? 'An Error Occurred' : 'Success! Password has been reset.'}</div>
                            </div>
                        </div>
                        <input type='submit' value="Submit" className={styles.changePasswordButton} />
                    </form> 
                </div>
                <div className={clsx(styles.emailErrorPopper, {[styles.menuHidden]: !passwordPopup})} ref={passwordPopperRef} style={passwordPopper.styles.popper} {...passwordPopper.attributes.popper}>
                    <div className={styles.errorIconBlack}>
                        <Image src={errorIconBlack} />
                    </div>
                    <div className={styles.emailErrorPopperText}>
                        Passwords do not match
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    let userInfo = ''

    const res = await axios.get(process.env.SERVER_URL + '/api/auth/verify', {headers: context.req.headers.cookie ? { cookie: context.req.headers.cookie } : undefined})
    const data = await res.data
    if (data.user) {
      userInfo = data.user
    }

    if (data.accessToken) {
      context.res.setHeader('Set-Cookie', ['access-token=' + data.accessToken + '; Max-Age=3600; HttpOnly'])
    }


    const uuidCheck = await axios.post(process.env.SERVER_URL + '/api/checkResetToken', {
        uuid: context.query.uuid
    })

    const isUUID = await uuidCheck.data
  
    return {
      props: {userInfo, isUUID}
    }
  }