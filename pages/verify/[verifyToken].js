import React from 'react'
import Header from '../../components/Header'
import styles from '../../styles/verifyPage/verify.module.css'
import Container from '@material-ui/core/Container'
import {useRouter} from 'next/router'
import axios from 'axios'
import Custom404 from '../404'

export default function AccountVerification({ userInfo, isUUID }) {
    const router = useRouter()

    if (!isUUID) return <Custom404 />

    const handleAccountVerification = () => {
        axios.post('/api/auth/verify-email-address', { 
            verifyToken: router.query.verifyToken
        })
        .then(res => {
            if (res.status === 200) {
                router.push('/')
            }
        })
        .catch(err => {
            console.error(err)
        })
    }


    return (
        <div>
            <Header user={userInfo} />
            <Container maxWidth="xl">
                <div className={styles.verifyBodyRoot}>
                    <h1 className={styles.verifyHeader}>Welcome to Mission Technius!</h1>
                    <div className={styles.verifySubheader}>You can confirm your email by clicking the link below.</div>
                    <div onClick={handleAccountVerification} className={styles.confirmAccountButton}>confirm my account</div>
                    {userInfo.school_id ? <p className={styles.verifyText}>Welcome onboard!</p> : <p className={styles.verifyText}>One of the team will be in contact with you shortly.  In the mean time, you may explore the platform with limited access.</p> }
                    <p className={styles.verifyText}>Ngā mihi nui,</p>
                    <p className={styles.verifyText}>Mission Technius team</p>
                </div>
            </Container>
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


    const uuidCheck = await axios.post(process.env.SERVER_URL + '/api/checkVerifyToken', {
        uuid: context.query.verifyToken
    })

    const isUUID = await uuidCheck.data
  
    return {
      props: {userInfo, isUUID}
    }
  }