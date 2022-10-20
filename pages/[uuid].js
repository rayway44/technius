import React from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/homepage/Home.module.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomepageBody from '../components/homepage/HomepageBody'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Error from 'next/error'
import Custom404 from './404'

export default function SignupToNewClass({data}) {
    const router = useRouter()
    const [signupOpen, setSignupOpen] = useState(true);

    if (data === 'invalid') return <Custom404 />
    return (
        <div className={styles.homepageRoot}>
            <Header user='' uuid={router.query.uuid} signupOpen={signupOpen} setSignupOpen={setSignupOpen} />
            <HomepageBody setSignupOpen={setSignupOpen} />
            <Footer />
        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await axios.post(process.env.SERVER_URL + '/api/checkUUID', {
        uuid: context.query.uuid
    })
    const data = await res.data
    
    
  
    return {
      props: {data}
    }
}
