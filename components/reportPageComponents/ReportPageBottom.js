import React from 'react'
import Image from 'next/image'
import styles from '../../styles/reportPage/reportPage.module.css'
import dynamic from 'next/dynamic'

export default function ReportPageBottom({ careerRec }) {
    const Report = dynamic(() => import(`../../assets/reportAssets/${careerRec}.report.svg`))
    
    console.log(careerRec)


    return (
        <div className={styles.reportPageBottomRoot}>
            <div className={styles.box}>
                <Report className={styles.ReportStyles} />
                <a href='https://technius.vercel.app/'><div className={styles.bTesting}>
                        CLICK HERE
                </div></a>
            </div>
        </div>
    )
}
