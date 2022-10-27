import React from 'react'
import Image from 'next/image'
import Style from '../../styles/reportPage/newReportPage.module.css'
import Link from 'next/link'


import ImageOne from '../../assets/missionAssets/newDevelopement/Group78.png'
import ImageTwo from '../../assets/missionAssets/newDevelopement/Group119.png'
import ImageThree from '../../assets/missionAssets/newDevelopement/Group.png'
import ImageFour from '../../assets/missionAssets/newDevelopement/image20.png'
import ImageFive from '../../assets/missionAssets/newDevelopement/Group102.png'
import ImageSix from '../../assets/missionAssets/newDevelopement/image19.png'

export default function NewReportCard() {
  return (
    <div>
          <div className={Style.body} >
            <div className={Style.topBox}>
              {/* CARD ONE ========> */}
              <div className={Style.cardOne}>
                <div  className={Style.title}>
                  Who am <span className={Style.orange}>I?</span>
                </div>

                <div>
                  <div className={Style.careerRec}>
                    <div className={Style.careerRecBox}>
                      <span className={Style.orange}>ORIGINATOR</span>
                    </div>
                  </div>
                </div>
                <div className={Style.careerImage}>
                <Link href='/report/newReportCardSectionOne'>
                    <a>
                      <Image src={ImageOne}  className={Style.border} />
                    </a>
                </Link>
                </div>
              </div>
              
              {/* CARD ONE ========> */}
              <div className={Style.cardOne}>
                <div  className={Style.title}>
                What would I <span className={Style.orange}>do?</span>
                </div>

                <div>
                  <div className={Style.careerRec}>
                    <div className={Style.careerRecBox}>
                    <span className={Style.orange}>PRODUCT OWNER</span>
                    </div>
                  </div>
                </div>
                <div className={Style.careerImage}>
                  <Link href='/report/newReportCardSectionTwo'>
                    <a>
                      <Image src={ImageTwo}  className={Style.border} />
                    </a>
                  </Link>
                </div>
              </div>


              {/* CARD ONE ========> */}
              <div className={Style.cardOne}>
                <div  className={Style.title}>
                What's <span className={Style.orange}>next?</span>
                </div>

                <div>
                  <div className={Style.careerRec}>
                  {/* <div className={Style.careerRecBox}>
                    <span className={Style.orange}>YOURE FUTURE IN TECH</span>
                    </div> */}
                  </div>
                </div>
                <div className={Style.careerImage}>
                  <Link href='/report/newReportCardSectionThree'>
                    <a>
                      <Image src={ImageThree}  className={Style.border} />
                    </a>
                  </Link>
                  {/* <Image src={ImageFive}  className={Style.border} /> */}
                </div>
              </div>
              

            </div>

            <div className={Style.bottom}>
              <Image src={ImageFour}  className={Style.border} />
            </div>

          </div>
    </div>
  )
}
