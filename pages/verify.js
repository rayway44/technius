import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'
import styles from '../styles/verifyPage/verify.module.css'
import Header from '../components/Header'
import Container from '@material-ui/core/Container'

export default function verify({ userInfo }) {
    const router = useRouter();
    const [emailSendSuccess, setEmailSendSuccess] = useState(false)
    const [emailSendFailure, setEmailSendFailure] = useState(false)

    useEffect(() => {

        if (!userInfo || userInfo.verified_email === 1) {
            router.push('/')
        }

    }, [])

    const handleEmailResend = () => {
        axios.post('/api/auth/resendEmail', userInfo)
        .then(res => {
            setEmailSendSuccess(true)
        })
        .catch(err => {
            console.error(err)
            setEmailSendFailure(true)
        })
    }
    
    return (
        <div>
            <Header user={userInfo} />
            <Container maxWidth="xl" >
                <div className={styles.verifyBodyRoot}>
                    <h1 className={styles.verifyHeader}>Almost there...</h1>
                    <div className={styles.verifySubheader}>We've sent you a verification email.</div>
                    <p className={styles.verifyText}>Please check your inbox, open the email and click the 'Verify me' link to continue.</p>
                    <p className={styles.verifyText}>
                        If you don't receive an email, please check your spam folder and make sure we've sent it to the right email address.<br/>
                        If the email below isn't right, please try registering again.
                    </p>
                    <p className={styles.verifyTextEmail}>Your email</p>
                    <input className={styles.verifyEmail} type="email" readOnly value={userInfo.email} />
                    <div onClick={handleEmailResend} className={styles.resendEmailButton}>resend email</div>
                    {emailSendSuccess && <p className={styles.resendEmailMessage}>Email has been sent</p>}
                    {emailSendFailure && <p className={styles.resendEmailMessage}>An Error has occurred</p>}
                </div>
            </Container>
        </div>
    )
}

export async function getServerSideProps(context) {
    let userInfo = ''
    if (context.req.headers.cookie === undefined) {return {props:{userInfo}}}
    const res = await axios.get(process.env.SERVER_URL + '/api/auth/verify', {headers: context.req ? { cookie: context.req.headers.cookie } : undefined})
    const data = await res.data
    if (data.user) {
      userInfo = data.user
    }
    
    if (data.accessToken) {
      context.res.setHeader('Set-Cookie', ['access-token=' + data.accessToken + '; Max-Age=3600; HttpOnly'])
    }
  
    return {
      props: {userInfo}
    }
  }