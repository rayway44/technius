import React, { useEffect, useState } from 'react'
import styles from '../../styles/Header.module.css'
import clsx from 'clsx'


export default function StudentSignup({ 
    firstname, 
    setFirstname, 
    lastname, 
    setLastname, 
    email, 
    setEmail, 
    password,
    setPassword, 
    schoolsList,
    school,
    setSchool, 
    yearOfBirth,
    setYearOfBirth, 
    gender,
    setGender, 
    ethnicity,
    setEthnicity, 
    consideredCareer,
    setConsideredCareer, 
    setOpen,
    setLoginOpen,
    submitAttempted,
    handleModalClose,
    emailRef
}) {

    const handleLoginRedirect = () => {
        handleModalClose()
        setLoginOpen(true)
    }

    return (
        <div>
            <div style={{marginTop: '0'}} className={styles.inputFields}>
                <div className={styles.firstNameField}>
                    <p style={{marginTop: '0'}} className={styles.inputLabel}>
                        Have you ever considered a career in tech?
                    </p>
                    <select defaultValue={0} onChange={(e) => setConsideredCareer(e.target.value)}className={clsx(styles.InputBox)} defaultValue="default">
                            <option value={0} disabled value="default">select</option>
                            <option value={'yes'}>Yes</option>
                            <option value={'maybe'}>Maybe</option>
                            <option value={'no'}>No</option>
                    </select>
                </div>
            </div>
            <div className={styles.inputFields}>
                {/* <div className={styles.firstNameField}>
                    <p className={styles.inputLabel}>
                        First name
                        <span >*</span>
                    </p>
                    <input value={firstname} onChange={(e) => setFirstname(e.target.value)} className={clsx(styles.InputBox, {[styles.emptyInput]: submitAttempted && firstname === ''})} placeholder="type here"></input>
                </div>
                <div className={styles.lastNameField}>
                    <p className={styles.inputLabel}>
                        Last name
                        <span >*</span>
                    </p>
                    <input value={lastname} onChange={(e) => setLastname(e.target.value)} className={clsx(styles.InputBox, {[styles.emptyInput]: submitAttempted && lastname === ''})} placeholder="type here"></input>
                </div> */}
            </div>
            <div className={styles.inputFields}>
                <div>
                    <p className={styles.inputLabel}>
                        Year of birth
                        <span >*</span>
                    </p>
                    <select defaultValue={0} onChange={(e) => setYearOfBirth(e.target.value)}className={clsx(styles.InputBox, {[styles.emptySelect]: submitAttempted && yearOfBirth === 0})} defaultValue="default">
                            <option value="default" disabled>select</option>
                            {Array.from(new Array(19).fill(new Date().getFullYear()), (el, i) => el - i).map((year, i) => (
                                <option key={i} value={year}>{year}</option>
                            ))}
                    </select>
                </div>
                <div className={styles.emailField}>
                    <p className={styles.inputLabel}>
                        Gender
                        <span >*</span>
                    </p>
                    <select defaultValue={0} onChange={(e) => setGender(e.target.value)} className={clsx(styles.InputBox, {[styles.emptySelect]: submitAttempted && gender === ''})} placeholder="type here" defaultValue="default">
                        <option value="default" disabled>select</option>
                        <option value={'male'}>male</option>
                        <option value={'female'}>female</option>
                        <option value={'gender diverse'}>gender diverse</option>
                        <option value={'prefer not to say'}>prefer not to say</option>
                    </select>
                </div>
            </div>
            <div className={styles.inputFields}>
                <div>
                    <p className={styles.inputLabel}>
                        Ethnicity
                        <span >*</span>
                    </p>
                    <select defaultValue={0} onChange={(e) => setEthnicity(e.target.value)}className={clsx(styles.InputBox, {[styles.emptySelect]: submitAttempted && ethnicity === ''})} defaultValue="default">
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
                <div className={styles.emailField}>
                    <p className={styles.inputLabel}>
                        School
                        <span >*</span>
                    </p>
                    <select defaultValue={0} onChange={(e) => setSchool(e.target.value)} className={clsx(styles.InputBox, {[styles.emptySelect]: submitAttempted && school === 0})} placeholder="type here" defaultValue="default">
                        <option value={0} disabled value="default">select</option>
                        {schoolsList.map((school, index) => (
                            <option key={index} value={school.school_id}>{school.school_name}</option>
                        ))}
                            
                    </select>
                    <div className={styles.checkboxDiv}>
                        <input type="checkbox"></input>
                        <label>I can't find my school</label>
                    </div> 
                    
                </div>
            </div>
            <div style={{marginTop: '0'}} className={styles.inputFields}>
                <div className={styles.schoolField}>
                    <p className={styles.inputLabel}>
                        Email
                        <span >*</span>
                    </p>
                    <input ref={emailRef} value={email} onChange={(e) => setEmail(e.target.value)} className={clsx(styles.InputBox, {[styles.emptyInput]: submitAttempted && email === ''})} placeholder="type here"></input>
                    {submitAttempted && email === '' && <div className={styles.invalidEmailText}>Please enter a valid email</div>}
                </div>
                <div className={styles.howDidYouFindOutField}>
                    <p className={styles.inputLabel}>
                        Password
                        <span >*</span>
                    </p>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className={clsx(styles.InputBox, {[styles.emptyInput]: submitAttempted && password === ''})} placeholder="type here"></input>
                </div>
            </div>
            <p className={styles.loginRedirect} onClick={handleLoginRedirect}>Already registered? Log in here</p>
        </div>
    )
}
