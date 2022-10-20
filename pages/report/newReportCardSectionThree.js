import React from 'react'
import Link from 'next/link'

import Style from '../../styles/reportPage/newReportCardSectionThree.module.css'

import Image from 'next/image'
import ImageOne from '../../assets/missionAssets/newDevelopement/Group45.png'




export default function newReportCardSectionThree() {



  return (
    <div className={Style.body}>
      <div className={Style.bodyWrapper}>
        <div className={Style.topTitle}>
          What's <span className={Style.orange}>Next?</span>
        </div>
        <div className={Style.topContent}>
        For your very first next step we reccomend choosing Math as a High School subject.<br/>
        This gives you the widest range of choices in the tech field but it isn’t required for all<br/>
        tech jobs. Visit ??? to find out more. 
        </div>
        <div className={Style.secondTitle}>
          Advice from our <span className={Style.orange}>Tech leaders</span>
        </div>
        <div className={Style.secondContent}>
          SECOND CONTENT BOX SCROLLABLE
        </div>
        <div>
          <Link href='/report/newReportCard'>
            <a>
              BACK  
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
