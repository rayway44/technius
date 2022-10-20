import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import styles from '../styles/profilePage/profilePage.module.css'
import DashboardBody from '../components/dashboardPageComponents/DashboardBody'
import Container from '@material-ui/core/Container'
import Image from 'next/image'
import userIcon from '../assets/profilePageAssets/userIcon.svg'
import dashboardIcon from '../assets/profilePageAssets/dashboardIcon.svg'
import clsx from 'clsx'
import Link from 'next/link'
import Error from 'next/error'
import {useRouter} from 'next/router'

export default function Dashboard({ userInfo }) {
  
  const router = useRouter()

  useEffect(() => {
    if (userInfo.verified_email === 0) {
      router.push('/verify')
    }
  })

  if(!userInfo) {
    return <Error statusCode={401} title={"You are not authorized to view this content"} />
  }

  return (
      <div>
          <Header user={userInfo} />
          <Container maxWidth="xl">
              <div className={styles.profilePageBodyDiv}>
                  <div className={styles.profileNavigation}>
                      <Link href="/profile">
                          <div className={styles.sideNavElement}>
                              <Image src={userIcon} alt="profile icon" />
                              <span>My Profile</span>
                          </div>
                      </Link>
                      <div style={{visibility: 'hidden'}} className={styles.navigationDivider}></div>
                    <div className={styles.sideNavElement}>
                      <Image src={dashboardIcon} alt="dashboard icon" />
                      <span>My Dashboard</span>
                    </div>
                    <div style={{marginBottom: '0'}} className={styles.navigationDivider}></div>
                  </div>
                  <DashboardBody user={userInfo} />
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

