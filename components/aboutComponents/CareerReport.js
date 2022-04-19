import React from 'react'
import CareerReportImage from '../../assets/aboutPageAssets/careerReport.png'
import Rocket from '../../assets/aboutPageAssets/rocket.svg'
import Image from 'next/image'
import styles from '../../styles/aboutPage/CareerReport.module.css'
import Container from '@material-ui/core/Container'

export default function CareerReport() {
    return (
        <div className={styles.careerReportRoot}>
            <div className={styles.careerReportHeader}>
                <Image src={CareerReportImage} />
            </div>
            <Container maxWidth="xl">
                <div className={styles.careerReportBody}>
                    <div className={styles.rocketDiv}>
                        <Image  src={Rocket} alt="Rocket" />
                    </div>
                    <div className={styles.careerReportText}>
                        <div className={styles.textHeader}>
                            Identifying Personal Quality Requirements
                        </div>
                        <p className={styles.textBody}>
                            Information Technology Professionals New Zealand 
                            (ITPNZ) has identified a list of seven “professional
                            practice” qualities that it regards as essential for all IT 
                            workers. Meanwhile, Careers NZ has also specified a list 
                            of “personal qualities” that are believed valuable for a 
                            person operating in a range of different IT industry job 
                            roles, with each quality being seen as more or less useful 
                            for different job roles. As a result, the “personal quality
                            requirements” that this activity assesses are: 
                        </p>
                        <ul className={styles.textList}>
                            <li>&emsp;&emsp;&emsp;Problem-solving ability</li>
                            <li>&emsp;&emsp;&emsp;Interpersonal skills</li>
                            <li>&emsp;&emsp;&emsp;Self-management ability</li>
                            <li>&emsp;&emsp;&emsp;Collaboration skills</li>
                            <li>&emsp;&emsp;&emsp;Reflective thinking ability</li>
                            <li>&emsp;&emsp;&emsp;Creativity</li>
                            <li>&emsp;&emsp;&emsp;Analytical thinking ability</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}