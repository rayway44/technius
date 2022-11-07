import React, { useState, useEffect } from 'react'
import styles from '../styles/reportPage/reportPage.module.css'
import ReportPageTop from '../components/reportPageComponents/ReportPageTop'
import ReportPageBottom from '../components/reportPageComponents/ReportPageBottom'
import ReportStudentResults from '../components/reportPageComponents/ReportStudentResults'
import Container from '@material-ui/core/Container'

import { useRouter } from 'next/router'
import axios from 'axios'
import Error from 'next/error'

export default function report({userInfo, reportResults}) {
    const router = useRouter()
    const [results, setResults] = useState(reportResults)
    const [query, setQuery] = useState('')

    console.log(reportResults)

    useEffect(() => {
        if (userInfo.verified_email === 0) {
          router.push('/verify')
        }
    })


    if(!userInfo) return <Error statusCode={401} title={"You are not authorized to view this content"} />

    return (
        <div>
            <div className={styles.reportPageRoot}>
                <Container maxWidth="lg" >
                
                    <ReportStudentResults careerRec={reportResults.career_rec}/>
                    
                    <ReportPageTop attr1={reportResults.attr1} attr2={reportResults.attr2} careerRec={reportResults.career_rec}/>
                    
                    <ReportPageBottom careerRec={reportResults.career_rec} />
                </Container>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    let userInfo = ''
    let reportResults = ''
    if (context.req.headers.cookie === undefined) {return {props:{userInfo}}}
    const res = await axios.get(process.env.SERVER_URL + '/api/auth/verify', {headers: context.req ? { cookie: context.req.headers.cookie } : undefined})
    const data = await res.data
    if (data.user) {
      userInfo = data.user
    }
    
    if (data.accessToken) {
      context.res.setHeader('Set-Cookie', ['access-token=' + data.accessToken + '; Max-Age=3600; HttpOnly'])
    }

    if (!context.query.class) {
        const getReportResults = await axios.post(process.env.SERVER_URL + '/api/resultCalculator', {
            'chosenItems': context.query['chosenItems'],
            'answers': context.query
        })
      
        reportResults = await getReportResults.data

        reportResults['character'] = context.query.character
    
        axios.post(process.env.SERVER_URL + '/api/uploadResults', {
            student_id: userInfo.student_id,
            career_rec: reportResults.career_rec,
            attr1: reportResults.attr1,
            attr2: reportResults.attr2,
            character: context.query.character
        })
    } else if (context.query.class) {
        const getReportResults = await axios.post(process.env.SERVER_URL + '/api/getResults/', {
            class: context.query.class,
            student_id: userInfo.student_id
        })
      
        reportResults = await getReportResults.data[0]
    }

    

    return {
      props: {userInfo, reportResults}
    }
  }