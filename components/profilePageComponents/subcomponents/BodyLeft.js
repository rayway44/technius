import React, { useEffect, useState } from 'react'
import styles from '../../../styles/profilePage/profileBody.module.css'
import Image from 'next/image'
import profileImageBig from '../../../assets/profilePageAssets/profileImageBig.svg'
import clsx from 'clsx'
import axios from 'axios'

export default function BodyLeft({user}) {
    const [schoolsList, setSchoolsList] = useState([])
    const [firstname, setFirstname] = useState(user.first_name)
    const [lastname, setLastname] = useState(user.last_name)
    const [email, setEmail] = useState(user.email)
    const [school, setSchool] = useState(user.school_id)
    const [password, setPassword] = useState('')
    const [infoChangeSuccess, setInfoChangeSuccess] = useState(false)
    const [infoChangeFailure, setInfoChangeFailure] = useState(false)
    const [isInfoChanged, setIsInfoChanged] = useState(false)


    useEffect(() => {
        axios.get('/api/getSchools')
        .then(response => {
            setSchoolsList(response.data);
        })
        .catch((error) => console.error(error))
    }, [])


    useEffect(() => {
        if (firstname !== user.first_name || lastname !== user.last_name || email !== user.email || (Number(school) !== user.school_id && school !== null) || password !== '') {
            setIsInfoChanged(true)
        } else {
            setIsInfoChanged(false)
        }
    }, [firstname, lastname, email, school, password])

    const handleInfoChange = () => {
        axios.post('api/changeInfo', {
            accountType: 'teacher',
            firstname: firstname,
            lastname: lastname,
            email: email,
            school: school, 
            password: password
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
        <div className={styles.profileBodyLeft}>
            <div className={styles.profileImageDiv}>
                <Image src={profileImageBig} alt="profile image" />
            </div>
            <form>
                <div className={styles.profileUpdater}>
                    <div>
                        <label>First Name</label>
                        <div>
                            <input value={firstname} onChange={(e) => setFirstname(e.target.value)} className={clsx(styles.profileUpdaterInput, styles.profileUpdaterInputSmall)} type="first name" placeholder="type here" />
                        </div>
                    </div>
                    <div className={styles.lastNameInputDiv}>
                        <label>Last Name</label>
                        <div>
                            <input value={lastname} onChange={(e) => setLastname(e.target.value)} className={clsx(styles.profileUpdaterInput, styles.profileUpdaterInputSmall)} type="last name" placeholder="type here" />
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
                </div> 
                <div className={styles.profileUpdater}>
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
