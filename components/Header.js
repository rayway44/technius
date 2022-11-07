import React, { useState, useEffect, useRef } from 'react'
import styles from '../styles/Header.module.css'
import Container from '@material-ui/core/Container'
import HeaderSignup from './HeaderSignup'
import HeaderLogin from './HeaderLogin'
import techniusLogoIcon from '../assets/homepageImages/techniusLogoIcon.svg'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'
import {usePopper} from 'react-popper'
import clsx from 'clsx';

export default function Header({user, uuid, signupOpen, setSignupOpen}) {
    const [loginOpen, setLoginOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [firstLoad, setFirstLoad] = useState(true);
    const greetingRef = useRef();
    const menuRef = useRef();
    const popper = usePopper(greetingRef.current, menuRef.current, {placement: 'bottom-start', options: {tether: false}})
    const router = useRouter()

    const handleLogout = () => {
        axios.post('/api/auth/logout')
        .then(res => {
            window.location.replace('/')
        })
        .catch(err => console.error(err))
    }

    

    useEffect(() => {
        if (firstLoad) {
            setFirstLoad(false)
        } else if (menuOpen === true) {
            document.addEventListener('click', handleOuterClick)
        }
        return ( () => document.removeEventListener('click', handleOuterClick))
    }, [menuOpen])

    const handleOuterClick = (event) => {
        if (menuOpen === true && !menuRef?.current.contains(event.target) && !greetingRef.current.contains(event.target)) {
            setMenuOpen(false)
        }
        
    }
    return (
        <div className={styles.headerRoot}>
            <Container maxWidth='xl'>
                <div className={styles.headerFlexbox}>
                    <Link href="/" >
                        <div className={styles.missionTechniusTitle}>
                            <Image width={70} height={60} src={techniusLogoIcon} />
                            <p>MISSION TECHNIUS</p>
                        </div>
                    </Link>
                    <div className={styles.rightHeaderButtons}>
                        <p className={styles.aboutLink}><Link href='/about'>ABOUT</Link></p>
                        {user.length === 0
                        ? 
                        <div className={styles.signupAndLoginButtons}>
                            <button onClick={ () => setSignupOpen(true)} className={styles.signupButton}>
                                SIGN UP
                            </button>
                            <button onClick={() => setLoginOpen(true)} className={styles.loginButton}>
                                LOG IN
                            </button>
                        </div>
                        :
                        <div className={styles.loggedInButtons}>
                            <button onClick={() => setMenuOpen(!menuOpen)} ref={greetingRef} className={styles.loggedInGreeting}>
                                HI,&nbsp;{user.first_name.toUpperCase()}
                            </button>
                            <p className={styles.loggedInButtonsDivider}>|</p>
                            <button onClick={handleLogout} className={styles.logoutButton}>
                                LOG OUT
                            </button>
                        </div>
                        }
                        <div className={clsx(styles.dropdownMenu, {[styles.menuHidden]: !menuOpen})} ref={menuRef} style={popper.styles.popper} {...popper.attributes.popper}>
                            <Link href="/profile"><p>View Profile</p></Link>
                            <div className={styles.dropdownMenuDivider}></div>
                            {user.teacher_id ? <Link href="/dashboard"><p>View Dashboard</p></Link> : <Link href="/past-reports"><p>View Past Reports</p></Link>}
                        </div>
                    </div>
                </div>
            </Container>
            <HeaderSignup setLoginOpen={setLoginOpen} open={signupOpen || false} setOpen={setSignupOpen} uuid={uuid} />
            <HeaderLogin open={loginOpen} setOpen={setLoginOpen} uuid={uuid} />
        </div>
    )
}
