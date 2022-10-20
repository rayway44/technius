import React from 'react'
import styles from '../../styles/reportPage/reportStudentsResults.module.css'
import spaceman from '../../assets/reportAssets/spaceMan.svg'
import mainMan from '../../assets/reportAssets/mainManImage.png'
import mainQualities from '../../assets/reportAssets/MainQualities.png'
import skillsSolarSystem from '../../assets/reportAssets/skillsSolarSystem.svg'
import analytical from '../../assets/reportAssets/analyticlaImage.png'
import Image from 'next/image'

import middleAttribute1 from '../../assets/reportAssets/middleAttribute1.svg'
import middleAttribute2 from '../../assets/reportAssets/middleAttribute2.svg'
import middleAttribute3 from '../../assets/reportAssets/middleAttribute3.svg'
import middleAttribute4 from '../../assets/reportAssets/middleAttribute4.svg'

import securityAnalystNotes from '../../assets/reportAssets/securityAnalystNotes.png'

import securityAnalystCareer from '../../assets/reportAssets/securityAnalystCareer.svg'
import itEntreprenuerCareer from '../../assets/reportAssets/itEntreprenuerCareer.svg'
import softwareDevelopmentCareer from '../../assets/reportAssets/softwareDevelopmentCareer.svg'
import userExperienceDesignCareer from '../../assets/reportAssets/userExperienceDesignCareer.svg'
import productOwnerCareer from '../../assets/reportAssets/productOwnerCareer.svg'
import businessAnalystCareer from '../../assets/reportAssets/businessAnalystCareer.svg'
import gameDeveloperCareer from '../../assets/reportAssets/gameDeveloperCareer.svg'
import socialMediaManagerCareer from '../../assets/reportAssets/socialMediaManagerCareer.svg'

import scrumMasterLightBg from '../../assets/reportAssets/scrumMasterLightBg.svg'
import projectManagerLightBg from '../../assets/reportAssets/projectManagerLightBg.svg'

import dynamic from 'next/dynamic'

export default function ReportStudentResults({careerRec}) {


  return (
    <div className={styles.resultsBody}>
        <div className={styles.topSection}>
            <Image src={spaceman} width={115 * 3} height={189 * 2} alt="picture of an astronaut standing on a planet" />

            <span>YOU GOT:</span>
        </div>

        <div className={styles.mainAttribute}>

              <div className={styles.mainAttributeTitle}>
              <span>{careerRec}</span>
            </div>
            <Image src={mainMan} width={115 * 3} height={189 * 2} alt="picture of an astronaut standing on a planet" />
            
        </div>

        <div className={styles.AttributesTopSection}>
        <Image width={449 * 2} height={172 * 2} src={skillsSolarSystem} alt="image of a solar system made up of a range of 7 skills" />
        </div>
        <div >
            <div className={styles.skillsSection}>
              <div className={styles.skillsLeft}>
                <div className={styles.skillsLeftTitle}>
                  MY TOP SKILLS
                </div>
                <div className={styles.skillsLeftSkillsHolder}>
                  <div className={styles.skillsLeftSkills}>
                    <div className={styles.skillsLeftImage}>
                    <Image src={analytical} alt="picture of an astronaut standing on a planet" />
                    </div>
                    <div className={styles.skillsLeftContent}>
                      <span className={styles.skillsLeftContentTitle}>Analyitical</span>
                      <span>You use logical reasoning, and consider all possibilities before making a decision. </span>
                    </div>
                  </div>
                
                <div className={styles.skillsLeftSkills}>
                  <div className={styles.skillsLeftImage}>
                  <Image src={analytical} alt="picture of an astronaut standing on a planet" className={styles.skillsLeftImage}/>
                  </div>
                  <div className={styles.skillsLeftContent}>
                    <span className={styles.skillsLeftContentTitle}>Reflective Thinker</span>
                    <span>You see the bigger picture and understand all of its consequences.</span>
                  </div>
                </div>
                </div>
              </div>

              <div className={styles.skillsRight}>
                <div className={styles.skillsRightTitle}>
                  MY CHARACTERISTICS
                </div>
                <div className={styles.skillsRightImage}>
                  
                  <Image src={mainQualities} alt="picture of an astronaut standing on a planet" />
                  
                </div>
                
              </div>
            </div>
        </div>

        <div className={styles.topJobsSection}>
            <span className={styles.topJobsSectionTitle}>
              Could you see yourself<br/> working in tech? ....
              </span>
              <span>
              Based off our analysis, here are your most suited jobs:
              </span>
        </div>
        

        <div className={styles.bottomJobsSection}>
        
          <div className={styles.bottomJobsTop}>
            <div className={styles.jobsHolder}>
              <div className={styles.bottomJobsLeftTop}>
                <Image src={scrumMasterLightBg} />
              </div>
              <div className={styles.bottomJobsLeftBottom}>
                {/* <Image src={securityAnalystNotes} /> */}
              </div>
            </div>

            <div className={styles.jobsHolder}>
              <div className={styles.bottomJobsLeftTop}>
                <Image src={projectManagerLightBg} />
              </div>
              <div className={styles.bottomJobsLeftBottom}>
                {/* <Image src={securityAnalystNotes} /> */}
              </div>
            </div>

          </div>

          <div className={styles.bottomJobsMiddle}>
            {/* middle */}
              <div className={styles.bottomJobsMiddleText}> - - - - - Here are other tech jobs to explore - - - - - </div>
              <div className={styles.bottomJobsMiddleStat}>
                <Image src={middleAttribute1} />
                <Image src={middleAttribute2} />
                <Image src={middleAttribute3} />
                <Image src={middleAttribute4} />
              </div>

            
          </div>
          <div className={styles.bottomJobsBottom}>

            <div className={styles.bottomJobsBottomLeft}>
              <div className={styles.bottomJobsLeftTop}>
                <Image src={businessAnalystCareer}  />
              </div>
              <div className={styles.bottomJobsLeftBottom}>
                <Image src={securityAnalystNotes} />
              </div>

              <div className={styles.bottomJobsLeftTop}>
                <Image src={gameDeveloperCareer} />
              </div>
              <div className={styles.bottomJobsLeftBottom}>
                <Image src={securityAnalystNotes} />
              </div>

              <div className={styles.bottomJobsLeftTop}>
                <Image src={socialMediaManagerCareer} />
              </div>
              <div className={styles.bottomJobsLeftBottom}>
                <Image src={securityAnalystNotes} />
              </div>

              <div className={styles.bottomJobsLeftTop}>
                <Image src={productOwnerCareer} />
              </div>
              <div className={styles.bottomJobsLeftBottom}>
                <Image src={securityAnalystNotes} />
              </div>
            </div>

            <div className={styles.bottomJobsBottomRight}>
              <div className={styles.bottomJobsLeftTop}>
                <Image src={itEntreprenuerCareer}  />
              </div>
              <div className={styles.bottomJobsLeftBottom}>
                <Image src={securityAnalystNotes} />
              </div>

              <div className={styles.bottomJobsLeftTop}>
                <Image src={softwareDevelopmentCareer} />
              </div>
              <div className={styles.bottomJobsLeftBottom}>
                <Image src={securityAnalystNotes} />
              </div>

              <div className={styles.bottomJobsLeftTop}>
                <Image src={userExperienceDesignCareer} />
              </div>
              <div className={styles.bottomJobsLeftBottom}>
                <Image src={securityAnalystNotes} />
              </div>

              <div className={styles.bottomJobsLeftTop}>
                <Image src={securityAnalystCareer} />
              </div>
              <div className={styles.bottomJobsLeftBottom}>
                <Image src={securityAnalystNotes} />
              </div>
            </div>

          </div>
        
            
            
            
            <div> 
          </div>
        </div>

    </div>
  )
}
