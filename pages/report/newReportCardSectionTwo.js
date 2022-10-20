import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Style from '../../styles/reportPage/newReportCardSectionTwo.module.css'

import Overview from '../../components/reportPageComponents/newDevelopment/overview'
import Duties from '../../components/reportPageComponents/newDevelopment/duties'
import Earn from '../../components/reportPageComponents/newDevelopment/earn'
import potentialJobs from '../../components/reportPageComponents/newDevelopment/potentialJobs'

import ImageOne from '../../assets/missionAssets/newDevelopement/Group121.png'

import ImageThree from '../../assets/missionAssets/newDevelopement/Group122.png'

import ImageFour from '../../assets/missionAssets/newDevelopement/Group123.png'
import ImageFive from '../../assets/missionAssets/newDevelopement/Group124.png'
import ImageSix from '../../assets/missionAssets/newDevelopement/Group125.png'


export default function newReportCardSectionTwo() {

  const [component, setComponent] = useState(Overview)

  return (
    <div className={Style.body}>
      <div className={Style.bodyWrapper}>
        <div className={Style.top}>
          <div className={Style.topLeft}>
          Our <span className={Style.orange}>Product Owner</span>
          </div>
          <div className={Style.topRight}>
            {/* TOP RIGHT */}
          </div>
        </div>
        <div className={Style.middle}>
          <div className={Style.middleLeft}>
            {/* MIDDLE LEFT */}
            <div className={Style.middleLeftLeft}>
              <Image src={ImageOne} />
            </div>
            <div className={Style.middleLefRight}>
              <Image src={ImageThree} onClick={() => {setComponent(Overview)}}/>
              <Image src={ImageFour} onClick={() => {setComponent(Duties)}} />
              <Image src={ImageFive} onClick={() => {setComponent(potentialJobs)}}  />
              <Image src={ImageSix} onClick={() => {setComponent(Earn)}}  />
            </div>
          </div>
          <div className={Style.middleRight}>
                {component}
          </div>
        </div>
        <div>
          <br/>
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



