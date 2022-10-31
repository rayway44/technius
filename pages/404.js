import React from 'react'
import Image from 'next/image'
import Error404Image from '../assets/404Image.svg'
import styles from '../styles/Custom404.module.css'
import Link from 'next/link'

export default function Custom404() {
    return (
        <div className={styles.custom404Root}>
            <Image src={Error404Image} />
            <div className={styles.custom404Text}>
                This is a 404 error, which means you've clicked on a bad link
            </div>
            <Link href="/">
                <button className={styles.custom404Button}>
                        GO BACK HOME
                </button>
            </Link>
        </div>
    )
}
