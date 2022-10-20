import React, { useEffect, useState } from 'react'
import styles from '../../../styles/profilePage/studentProfileBody.module.css'
import Image from 'next/image'
import profileImageBig from '../../../assets/profilePageAssets/profileImageBig.svg'
import clsx from 'clsx'
import axios from 'axios'

export default function StudentProfileBody({user}) {
    const [schoolsList, setSchoolsList] = useState([])
    const [firstname, setFirstname] = useState(user.first_name)
    const [lastname, setLastname] = useState(user.last_name)
    const [email, setEmail] = useState(user.email)
    const [school, setSchool] = useState(user.school_id)
    const [gender, setGender] = useState(user.gender)
    const [ethnicity, setEthnicity] = useState(user.ethnicity)
    const [yearOfBirth, setYearOfBirth] = useState(user.year_of_birth)
    const [password, setPassword] = useState('')
    const [infoChangeSuccess, setInfoChangeSuccess] = useState(false)
    const [infoChangeFailure, setInfoChangeFailure] = useState(false)
    const [isInfoChanged, setIsInfoChanged] = useState(false)

    useEffect(() => {
        if (firstname !== user.first_name || lastname !== user.last_name || email !== user.email || (Number(school) !== user.school_id && school !== null) || password !== '' || gender !== user.gender || Number(yearOfBirth) !== user.year_of_birth || ethnicity !== user.ethnicity) {
            setIsInfoChanged(true)
        } else {
            setIsInfoChanged(false)
            setInfoChangeSuccess(false)
            setInfoChangeFailure(false)
        }
    }, [firstname, lastname, email, school, password, gender, yearOfBirth, ethnicity])

    useEffect(() => {
        axios.get('/api/getSchools')
        .then(response => {
            setSchoolsList(response.data);
        })
        .catch((error) => console.error(error))
    }, [])

    const handleInfoChange = () => {
        axios.post('api/changeInfo', {
            accountType: 'student',
            firstname: firstname,
            lastname: lastname,
            email: email,
            school: school, 
            password: password,
            gender: gender,
            ethnicity: ethnicity,
            year_of_birth: yearOfBirth
        })
        .then(res => {
            if (res.status === 200) {
                setInfoChangeSuccess(true)
                setPassword('')
            }
        })
        .catch((error) => {
            console.log(error)
            setInfoChangeFailure(true)
        })
    }

    return (
        <div className={styles.profileBody}>
            <div className={styles.profileImageDiv}>
                <Image src={profileImageBig} alt="profile image" />
            </div>
            <form>
                <div className={styles.profileUpdater}>
                    <div className={styles.profileUpdaterInnerDiv}>
                        <label>First Name</label>
                        <div>
                            <input value={firstname} onChange={(e) => setFirstname(e.target.value)} className={styles.profileUpdaterInput} type="first name" placeholder="type here" />
                        </div>
                    </div>
                    <div className={styles.profileUpdaterInnerDiv}>
                        <label>Last Name</label>
                        <div>
                            <input value={lastname} onChange={(e) => setLastname(e.target.value)} className={styles.profileUpdaterInput} type="last name" placeholder="type here" />
                        </div>
                    </div>  
                </div>
                <div className={styles.profileUpdater}>
                    <div className={styles.profileUpdaterInnerDiv}>
                        <label>Year of birth</label>
                        <div>
                            <select value={yearOfBirth} onChange={(e) => setYearOfBirth(e.target.value)}className={styles.profileUpdaterInput}>
                                <option value="default" disabled>select</option>
                                {Array.from(new Array(19).fill(new Date().getFullYear()), (el, i) => el - i).map((year, i) => (
                                    <option key={i} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                    </div> 
                    <div className={styles.profileUpdaterInnerDiv}>
                        <label>Gender</label>
                        <div>
                            <select value={gender} onChange={(e) => setGender(e.target.value)} className={styles.profileUpdaterInput}>
                                <option value="default" disabled>select</option>
                                <option value={'male'}>male</option>
                                <option value={'female'}>female</option>
                                <option value={'gender diverse'}>gender diverse</option>
                                <option value={'prefer not to say'}>prefer not to say</option>
                            </select>
                        </div>
                    </div> 
                </div> 
                <div className={styles.profileUpdater}>
                    <div className={styles.profileUpdaterInnerDiv}>
                        <label>Ethnicity</label>
                        <div>
                            <select value={ethnicity} onChange={(e) => setEthnicity(e.target.value)}className={styles.profileUpdaterInput}>
                                <option value={0} disabled value="default">select</option>
                                <option value={'NZ European'}>NZ European</option>
                                <option value={'Maori'}>Maori</option>
                                <option value={'Chinese'}>Chinese</option>
                                <option value={'Indian'}>Indian</option>
                                <option value={'Asian'}>Asian</option>
                                <option value={'Pacific Peoples'}>Pacific Peoples</option>
                                <option value={'Other'}>Other</option>
                                <option value={'I dont know'}>I don't know</option>
                            </select>
                        </div>
                    </div> 
                    <div className={styles.profileUpdaterInnerDiv}>
                        <label>School</label>
                        <div>
                            <select value={school || 0} onChange={(e) => setSchool(e.target.value)} className={clsx(styles.profileUpdaterInput)}>
                                <option value={0} disabled>select</option>
                                {schoolsList.map((school, index) => (
                                    <option key={index} value={school.school_id}>{school.school_name}</option>
                                ))}
                            </select>
                        </div>
                    </div>  
                </div>
                <div className={styles.profileUpdater}>
                    <div className={styles.profileUpdaterInnerDiv}>
                        <label>Email</label>
                        <div>
                            <input readOnly value={email} onChange={(e) => setEmail(e.target.value)} className={clsx(styles.profileUpdaterInput)} type="email" placeholder="type here" />
                        </div>
                    </div>  
                    <div className={styles.profileUpdaterInnerDiv}>
                        <label>Update Password</label>
                        <div>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} className={clsx(styles.profileUpdaterInput)} type="password" placeholder="type here" />
                        </div>
                    </div>  
                </div> 
                <div onClick={isInfoChanged ? handleInfoChange : undefined} className={clsx(styles.updateInformationButton, {[styles.buttonDisabled]: !isInfoChanged})}>Submit</div>
                {infoChangeSuccess && <p className={styles.responseMessage}>Updated successfully</p>}
                {infoChangeFailure && <p className={styles.responseMessage}>An error has occurred</p>}
            </form>
        </div>
    )
}
