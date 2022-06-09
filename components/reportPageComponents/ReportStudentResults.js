import React from 'react'
import styles from '../../styles/reportPage/reportStudentsResults.module.css'
import spaceman from '../../assets/reportAssets/spaceMan.svg'
import mainMan from '../../assets/reportAssets/mainManImage.png'
import mainQualities from '../../assets/reportAssets/MainQualities.png'
import securityJob from '../../assets/reportAssets/securityJob.png'
import securityAnalystNotes from '../../assets/reportAssets/securityAnalystNotes.png'
import softwareDeveloper from '../../assets/reportAssets/softwareDeveloper.png'
import skillsSolarSystem from '../../assets/reportAssets/skillsSolarSystem.svg'
import analytical from '../../assets/reportAssets/analyticlaImage.png'
import Image from 'next/image'

export default function ReportStudentResults() {
  return (
    <div className={styles.resultsBody}>
        <div className={styles.topSection}>
            <Image src={spaceman} alt="picture of an astronaut standing on a planet" />

            <span>YOU GOT:</span>
        </div>

        <div className={styles.mainAttribute}>

            <Image src={mainMan} width={115 * 3} height={189 * 2} alt="picture of an astronaut standing on a planet" />
            
              <div className={styles.mainAttributeTitle}>
              <span>The Manager</span>
            </div>
        </div>

        <div className={styles.AttributesTopSection}>
        <Image width={449 * 2} height={172 * 2} src={skillsSolarSystem} alt="image of a solar system made up of a range of 7 skills" />
        </div>
        <div className={styles.skillsTop}>
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
            <div className={styles.bottomJobsLeft}>

              <div className={styles.bottomJobsLeftTop}>
                <Image src={securityJob} />
              </div>
              <div className={styles.bottomJobsLeftBottom}>
                <Image src={securityAnalystNotes} />
              </div>

              <div className={styles.bottomJobsLeftTop}>
                <Image src={softwareDeveloper} />
              </div>
              <div className={styles.bottomJobsLeftBottom}>
                <Image src={securityAnalystNotes} />
              </div>

              <div className={styles.bottomJobsLeftTop}>
                <Image src={securityJob} />
              </div>
              <div className={styles.bottomJobsLeftBottom}>
                <Image src={securityAnalystNotes} />
              </div>

              <div className={styles.bottomJobsLeftTop}>
                <Image src={softwareDeveloper} />
              </div>
              <div className={styles.bottomJobsLeftBottom}>
                <Image src={securityAnalystNotes} />
              </div>

            </div>
            
            <div>

              <div className={styles.bottomJobsLeftTop}>
                <Image src={softwareDeveloper} />
              </div>
              <div className={styles.bottomJobsLeftBottom}>
                <Image src={securityAnalystNotes} />
              </div>

              <div className={styles.bottomJobsLeftTop}>
                <Image src={securityJob} />
              </div>
              <div className={styles.bottomJobsLeftBottom}>
                <Image src={securityAnalystNotes} />
              </div>

              <div className={styles.bottomJobsLeftTop}>
                <Image src={softwareDeveloper} />
              </div>
              <div className={styles.bottomJobsLeftBottom}>
                <Image src={securityAnalystNotes} />
              </div>

              <div className={styles.bottomJobsLeftTop}>
                <Image src={securityJob} />
              </div>
              <div className={styles.bottomJobsLeftBottom}>
                <Image src={securityAnalystNotes} />
              </div>
              
            </div>
        </div>
        
    </div>
  )
}
