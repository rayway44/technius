import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import OurMission from '../components/aboutComponents/OurMission'
import CareerReport from '../components/aboutComponents/CareerReport.js'
import GamifyingAssessment from '../components/aboutComponents/GamifyingAssessment'
import styles from '../styles/aboutPage/OurMission.module.css'
import Container from '@material-ui/core/Container'
import axios from 'axios'
import {useRouter} from 'next/router'

export default function About({userInfo}) {
  const [signupOpen, setSignupOpen] = useState(false);

  const router = useRouter()

  useEffect(() => {
    if (userInfo.verified_email === 0) {
      router.push('/verify')
    }
  })

    return (
        <div className={styles.aboutRoot}>
            <Header signupOpen={signupOpen} setSignupOpen={setSignupOpen} user={userInfo} />
            <Container maxWidth='xl'>
                <OurMission />
            </Container>
            <CareerReport />
            <Container maxWidth='xl'>
                <GamifyingAssessment setSignupOpen={setSignupOpen} user={userInfo} />
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
