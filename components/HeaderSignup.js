import React, { useEffect, useState, useRef } from 'react'
import TeacherSignup from './signupComponents/teacherSignup'
import StudentSignup from './signupComponents/studentSignup'
import {useRouter} from 'next/router'
import Dialog from '@material-ui/core/Dialog'
import styles from '../styles/Header.module.css'
import spaceManWithFlag from '../assets/spacemanWithFlag.png';
import closeIcon from '../assets/closeIcon.svg';
import Image from 'next/image'
import axios from 'axios'
import clsx from 'clsx'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {usePopper} from 'react-popper'
import errorIconBlack from '../assets/errorIconBlack.svg';


export default function HeaderSignup({ open, setOpen, setLoginOpen }) {
    const emailRef = useRef();
    const emailPopperRef = useRef();
    const emailPopper = usePopper(emailRef.current, emailPopperRef.current, {placement: 'bottom-start'})

    const matches = useMediaQuery('(min-width: 1280px)')
    const router = useRouter()
    const uuid = router.query.uuid

    const [signupSelect, setSignupSelect] = useState(uuid ? 'student' : 'teacher')
    const [submitAttempted, setSubmitAttempted] = useState(false)

    // teacher inputs
    const [findOut, setFindOut] = useState('');
    const [termsTicked, setTermsTicked] = useState(false);
    const [privacyPolicyTicked, setPrivacyPolicyTicked] = useState(false)
    const [findOutOther, setFindOutOther] = useState('')

    // student inputs
    const [yearOfBirth, setYearOfBirth] = useState(0);
    const [gender, setGender] = useState('');
    const [ethnicity, setEthnicity] = useState('');
    const [consideredCareer, setConsideredCareer] = useState('');
    
    // shared inputs
    const [schoolsList, setSchoolsList] = useState([]);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [school, setSchool] = useState(0);
    const [teacherExists, setTeacherExists] = useState(false);
    const [studentExists, setStudentExists] = useState(false);
    const [noSchoolTicked, setNoSchoolTicked] = useState(false)


    useEffect(() => {
        axios.get('/api/getSchools')
        .then(response => {
            setSchoolsList(response.data);
        })
        .catch((error) => console.error(error))
    }, [])

    useEffect(() => {
        setStudentExists(false)
        setTeacherExists(false)
        setSubmitAttempted(false)
    }, [signupSelect])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (
            signupSelect === 'teacher' 
            && firstname !== '' 
            && lastname !== '' 
            && email !== '' 
            && password !== ''
            && (school !== 0 || noSchoolTicked)
            && termsTicked === true
            && privacyPolicyTicked === true
            ) {
            axios.post('/api/auth/register/teacher', {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
                school: noSchoolTicked ? null : school,
                findOut: findOutOther.length > 0 ? findOutOther : findOut
            })
            .then(response => {
                if (response.status === 201) {
                    router.push('/verify')
                }
            })
            .catch((error) => {
                console.error(error)
                if (error.response.status === 409) {
                    setTeacherExists(true)
                }
            })
        } else if (
            signupSelect === 'student' 
            && firstname !== '' 
            && lastname !== '' 
            && email !== '' 
            && password !== ''
            && (school !== 0 || noSchoolTicked)
            && yearOfBirth !== 0
            && ethnicity !== ''
            && gender !== ''
            ) {
            axios.post('/api/auth/register/student', {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
                school: noSchoolTicked ? null : school,
                yearOfBirth: yearOfBirth,
                ethnicity: ethnicity,
                gender: gender,
                consideredCareer: consideredCareer,
                uuid: uuid
            })
            .then(response => {
                router.query.uuid ? router.push('/') : router.reload(window.location.pathname)
            })
            .catch((error) => {
                console.error(error)
                if (error.response.status === 409) {
                    setStudentExists(true)
                }
            })
        } else {
            setSubmitAttempted(true)
        }   
    }

    const handleModalClose = () => {
        setOpen(false)
        setFindOut('')
        setFindOutOther('')
        setTermsTicked(false)
        setPrivacyPolicyTicked(false)
        setYearOfBirth(0)
        setGender('')
        setEthnicity('')
        setFirstname('')
        setLastname('')
        setEmail('')
        setPassword('')
        setSchool(0)
        setSubmitAttempted(false)
        setTeacherExists(false)
        setStudentExists(false)
        setNoSchoolTicked(false)
    }
    
    if (signupSelect === 'student' && !uuid) {
        return (
            <Dialog fullWidth maxWidth={matches ? "lg" : "sm"} open={open} onClose={handleModalClose}>
                <div className={styles.signupModal}>
                   <Image width={signupSelect === 'teacher' ? 650 : 700} height={700} src={spaceManWithFlag} alt="Space man with flag" />
                    <div className={styles.signUpForm}>
                        <div className={styles.signupSelect}>
                            <p className={styles.signupSelectLabel}><b>I am a...</b></p>
                            <span style={{color: 'red', fontSize: '20px'}}>*</span>
                            <select value={signupSelect} onChange={(e) => setSignupSelect(e.target.value)} className={styles.signupSelectInput}>
                                <option value="teacher">teacher</option>
                                <option value="student">student</option>
                            </select>
                        </div>
                            <div style={{height: '300px'}}>
                            Contact your school to create an account.
                            </div>
                    </div>
                   <div onClick={() => setOpen(false)} className={styles.closeIconDiv}>
                            <Image src={closeIcon} alt="close icon" />
                    </div>
                </div>
            </Dialog>
        )
    }

    return (
        <div>            
            <Dialog maxWidth={matches ? "lg" : "lg"} open={open} onClose={handleModalClose}>
            <form onSubmit={handleSubmit}>
                <div className={styles.signupModal}>
                    <div className={styles.spaceManDiv}>
                        <Image width={1500} height={1400} src={spaceManWithFlag} alt="Space man with flag" />
                    </div>
                   <div style={{width: '100%'}}>
                    <div className={styles.signUpForm}>
                        <div className={styles.signupSelect}>
                            <p className={styles.signupSelectLabel}><b>I am a...</b></p>
                            <span style={{color: 'red', fontSize: '20px'}}>*</span>
                            <select value={signupSelect} onChange={(e) => setSignupSelect(e.target.value)} className={styles.signupSelectInput}>
                                <option value="teacher">teacher</option>
                                <option value="student">student</option>
                            </select>
                        </div>
                        {signupSelect === 'teacher'
                        ?
                            <TeacherSignup 
                            firstname={firstname}
                            setFirstname={setFirstname}
                            lastname={lastname}
                            setLastname={setLastname}
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            schoolsList={schoolsList}
                            school={school}
                            setSchool={setSchool}
                            setFindOut={setFindOut}
                            setFindOutOther={setFindOutOther}
                            findOutOther={findOutOther}
                            findOut={findOut}
                            termsTicked={termsTicked}
                            setTermsTicked={setTermsTicked}
                            privacyPolicyTicked={privacyPolicyTicked}
                            setPrivacyPolicyTicked={setPrivacyPolicyTicked}
                            setLoginOpen={setLoginOpen}
                            submitAttempted={submitAttempted}
                            handleModalClose={handleModalClose}
                            emailRef={emailRef}
                            noSchoolTicked={noSchoolTicked}
                            setNoSchoolTicked={setNoSchoolTicked}
                            />
                        : 
                            <StudentSignup 
                            firstname={firstname}
                            setFirstname={setFirstname}
                            lastname={lastname}
                            setLastname={setLastname}
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            schoolsList={schoolsList}
                            school={school}
                            setSchool={setSchool}
                            yearOfBirth={yearOfBirth}
                            setYearOfBirth={setYearOfBirth}
                            gender={gender}
                            setGender={setGender}
                            ethnicity={ethnicity}
                            setEthnicity={setEthnicity}
                            consideredCareer={consideredCareer}
                            setConsideredCareer={setConsideredCareer}
                            setOpen={setOpen}
                            setLoginOpen={setLoginOpen}
                            submitAttempted={submitAttempted}
                            handleModalClose={handleModalClose}
                            emailRef={emailRef}
                            />
                        }
                        
                        </div>
                        <div onClick={handleSubmit} className={styles.registerButtonDiv}>
                            <input value="REGISTER" type="submit" className={clsx(styles.registerButton, {[styles.registerButtonStudent]: signupSelect === 'student'})}></input>
                        </div>
                   </div>
                   <div onClick={() => setOpen(false)} className={styles.closeIconDiv}>
                            <Image src={closeIcon} alt="close icon" />
                    </div>
                </div>
            </form> 
            <div className={clsx(styles.emailErrorPopper, {[styles.menuHidden]: !teacherExists && !studentExists})} ref={emailPopperRef} style={emailPopper.styles.popper} {...emailPopper.attributes.popper}>
                <div className={styles.errorIconBlack}>
                    <Image src={errorIconBlack} />
                </div>
                <div className={styles.emailErrorPopperText}>
                    This email is already in use.
                </div>
            </div>
            </Dialog>
        </div>
    )
}
