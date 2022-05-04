import React from 'react'
import styles from '../styles/Footer.module.css'
import Container from '@material-ui/core/Container'
import TechniusLogo from '../assets/MissionTechniusLogo.png'
import InPartnershipWith from '../assets/inPartnershipWith.png'
import ManagedBy from '../assets/managedBy.png'
import Image from 'next/image'

export default function Footer() {
    return (
        <div className={styles.footerRoot}>
            <div className={styles.footerTop}>
                <Container maxWidth="xl">
                    <div className={styles.footerTopFlexbox}>
                        <div className={styles.contact}>
                            <p className={styles.getInTouchText}>Get in touch</p>
                            <p className={styles.contactInfo}>contact@missiontechnius.com</p>
                        </div>
                        <div className={styles.inPartnershipWith}>
                            <Image src={InPartnershipWith} alt="Partner Logos" />
                        </div>
                        <div className={styles.managedBy}>
                            <Image src={ManagedBy} alt="Mission Ready Logo" />
                        </div>

                        <a href="https://www.vercel.com?utm_source=technius-ray&utm_campaign=oss">
                            <Image src='/powered-by-vercel (2).svg' width='100%' height='100%' alt="Mission Ready Logo" />
                        </a>
                    </div>
                </Container>
            </div>
            <div className={styles.footerBottom}>
                <Container maxWidth="xl">
                    <div className={styles.footerBottomFlexbox}>
                        <div className={styles.techniusLogo}>
                            <Image src={TechniusLogo} alt="Technius Logo" />
                        </div>
                        <div className={styles.privacyPolicyTermsAndConditions}>
                            <u><a href="/PDF/Technius-terms-and-conditions.pdf" download>terms and conditions</a></u>
                            <u><a href="/PDF/Technius-privacy-policy.pdf" download>privacy policy</a></u>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
