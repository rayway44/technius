import React from 'react'

import Image from 'next/image'

import Style from '../../../styles/reportPage/newReportCardSectionTwo.module.css'
import ImageTwo from '../../../assets/missionAssets/newDevelopement/Overview.png'

export default function overview() {
  return (
    <div>
        <div className={Style.middleRightIcon}>
              <Image src={ImageTwo} layout="fixed" />
            </div>
            <div className={Style.middleRightHeading}>
              <span className={Style.krona}>
                OVERVIEW
              </span>

            </div>
            <div className={Style.middleRightContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
             Nulla lorem accumsan. Lorem ipsum dolor sit amet,<br/>
            consectetur adipiscing elit. Nulla lorem accumsan.
            </div>
    </div>
  )
}
