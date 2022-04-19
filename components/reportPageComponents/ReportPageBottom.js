import React from 'react'
import Image from 'next/image'
import styles from '../../styles/reportPage/reportPage.module.css'
import dynamic from 'next/dynamic'

export default function ReportPageBottom({ careerRec }) {
    const Report = dynamic(() => import(`../../assets/reportAssets/${careerRec}.report.svg`))

    return (
        <div className={styles.reportPageBottomRoot}>
            <Report className={styles.ReportStyles} />
        </div>
    )
}
