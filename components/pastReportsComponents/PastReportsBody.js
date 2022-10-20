import React, { useState, useEffect } from 'react'
import styles from '../../styles/pastReportsPage/pastReports.module.css'
import axios from 'axios'
import Link from 'next/link'

export default function PastReportsBody({user}) {
    const [reports, setReports] = useState([])

    useEffect(() => {
        axios.get('/api/getReportsList/' + user.student_id)
        .then((response) => {
            if (response.data) {
                setReports(response.data)
            }
        })
        .catch((error) => console.error(error))
    }, [])


    return (
        <div className={styles.pastReportsBodyRoot}>
            <div className={styles.pastReportsHeader}>
                PAST REPORTS
            </div>
            <div className={styles.pastReportsBodyDiv}>
                <div className={styles.pastReportsHistoryHeader}>
                    History
                </div>
                <div className={styles.pastReportsListDiv}>
                    {reports.map((report, index) => (
                        <div className={styles.pastReportsList}>
                            <div>
                                Completed {new Date(report.date_created).toLocaleDateString('en-nz')}
                            </div>
                            <div className={styles.viewReportButtonDiv}>
                                <Link href={'/report?class=' + report.class_id}>
                                    <button className={styles.viewReportButton}>View Report</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
