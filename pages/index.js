import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/homepage/Home.module.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomepageBody from '../components/homepage/HomepageBody'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'

<<<<<<< HEAD
import Link from 'next/link'

// New Report Card Developement
import NewReportCard from './report/newReportCard'

=======
>>>>>>> rayFeature
export default function Home({ userInfo }) {
  const [user, setUser] = useState(userInfo)
  const [signupOpen, setSignupOpen] = useState(false);

  const router = useRouter()

  useEffect(() => {
    if (userInfo.verified_email === 0) {
      router.push('/verify')
    }
  })


  return (
<<<<<<< HEAD
    <div>

    {/* <Link href='/Report/newReport'>
      <a>
        hit me
      </a>
    </Link> */}


      <div className={styles.homepageRoot}>
      <Header user={user} signupOpen={signupOpen} setSignupOpen={setSignupOpen} />
      <HomepageBody setSignupOpen={setSignupOpen} user={user} />
      <Footer />
      </div>
      
=======
    <div className={styles.homepageRoot}>
      <Header user={user} signupOpen={signupOpen} setSignupOpen={setSignupOpen} />
      <HomepageBody setSignupOpen={setSignupOpen} user={user} />
      <Footer />
>>>>>>> rayFeature
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
