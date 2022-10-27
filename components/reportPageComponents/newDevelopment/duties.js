import React from 'react'


import Image from 'next/image'

import Style from '../../../styles/reportPage/newReportCardSectionTwo.module.css'
import ImageOne from '../../../assets/missionAssets/newDevelopement/Scroll.png'
import ImageTwo from '../../../assets/missionAssets/newDevelopement/Group48.png'

export default function duties() {
  return (
    <div>
        <div className={Style.middleRightIcon}>
              <Image src={ImageOne} layout="fixed" />
            </div>
            <div className={Style.middleRightHeading}>
              <span  className={Style.krona}>
                Your Duties
              </span>

            </div>
            <div className={Style.middleRightContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
             Nulla lorem accumsan. Lorem ipsum dolor sit amet,<br/>
            consectetur adipiscing elit. Nulla lorem accumsan.<br/><br/>
              <Image src={ImageTwo} width="250" height="150"/>
            </div>
    </div>
  )
}
