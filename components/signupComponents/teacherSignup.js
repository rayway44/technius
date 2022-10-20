import React, { useEffect, useState } from 'react'
import styles from '../../styles/Header.module.css'
import clsx from 'clsx'


export default function TeacherSignup({ 
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
    setFindOut,
    findOut, 
    findOutOther,
    setFindOutOther,
    termsTicked,
    setTermsTicked,
    privacyPolicyTicked,
    setPrivacyPolicyTicked,
    setLoginOpen,
    submitAttempted,
    handleModalClose,
    emailRef,
    noSchoolTicked,
    setNoSchoolTicked
}) {
    const handleLoginRedirect = () => {
        handleModalClose()
        setLoginOpen(true)
    }
    return (
        <div>
            <div className={styles.inputFields}>
                <div className={styles.firstNameField}>
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
                </div>
            </div>
            <div className={styles.inputFields}>
                <div className={styles.schoolField}>
                    <p className={styles.inputLabel}>
                        Email
                        <span >*</span>
                    </p>
                    <input ref={emailRef} value={email} onChange={(e) => setEmail(e.target.value)} className={clsx(styles.InputBox, {[styles.emptyInput]: submitAttempted && email === ''})} placeholder="type here"></input>
                    {submitAttempted && email === '' && <div className={styles.invalidEmailText} >Please enter a valid email</div>}
                </div>
                <div className={styles.howDidYouFindOutField}>
                    <p className={styles.inputLabel}>
                        Password
                        <span >*</span>
                    </p>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className={clsx(styles.InputBox, {[styles.emptyInput]: submitAttempted && password === ''})} placeholder="type here"></input>
                </div>
            </div>
            <div className={styles.inputFields}>
                <div className={styles.emailField}>
                    <p className={styles.inputLabel}>
                        School
                        <span >*</span>
                    </p>
                    <select defaultValue={0} onChange={(e) => setSchool(e.target.value)} className={clsx(styles.InputBox, styles.teacherSchoolSelect, {[styles.emptySelect]: submitAttempted && school === 0 && !noSchoolTicked})} placeholder="type here" defaultValue="default">
                        <option value={0} disabled value="default">select</option>
                        {schoolsList.map((school, index) => (
                            <option key={index} value={school.school_id}>{school.school_name}</option>
                        ))}
                            
                    </select>
                    <div className={styles.checkboxDiv}>
                        <input onChange={() => setNoSchoolTicked(!noSchoolTicked)} type="checkbox"></input>
                        <label>I can't find my school</label>
                    </div> 
                    {submitAttempted && !noSchoolTicked && school === 0 && (<div className={styles.invalidEmailText} >Please select a school or select the box if you can't find it</div>)}
                </div>
                <div>
                    <p className={styles.inputLabel}>
                        How did you find out about us?
                    </p>
                    <select defaultValue={0} onChange={(e) => setFindOut(e.target.value)} className={clsx(styles.InputBox)} defaultValue="default">
                            <option value={0} disabled value="default">select</option>
                            <option value={'Internet Search'}>Internet Search</option>
                            <option value={'Colleague'}>Colleague</option>
                            <option value={'Friend'}>Friend</option>
                            <option value={'Former Student'}>Former Student</option>
                            <option value={'Other'}>Other</option>
                    </select>
                    {findOut === 'Other' && <p><input onChange={(e) => setFindOutOther(e.target.value)} placeholder="Please specify..." className={clsx(styles.InputBox, {[styles.emptyInput]: submitAttempted && findOutOther === ''})} /></p>}
                </div>
                </div>
                <div className={clsx(styles.checkboxDiv, styles.TandC, {[styles.uncheckedCheckbox]: submitAttempted && termsTicked === false})}>
                    <input onChange={(e) => setTermsTicked(e.target.checked)} type="checkbox"></input>
                    <label>
                        I agree to the <u><a href={'/PDF/Technius-terms-and-conditions.pdf'} download>terms and conditions</a></u>
                        <span >*</span>
                    </label>
                </div> 
                <div className={clsx(styles.checkboxDiv, {[styles.uncheckedCheckbox]: submitAttempted && privacyPolicyTicked === false})}>
                    <input onChange={(e) => setPrivacyPolicyTicked(e.target.checked)} type="checkbox"></input>
                    <label>
                        I acknowledge Mission to Technius's <u><a href={'/PDF/Technius-privacy-policy.pdf'} download>privacy policy</a></u>
                        <span>*</span>
                    </label>
                </div> 
                <p className={styles.loginRedirect} onClick={handleLoginRedirect}>Already registered? Log in here</p>
        </div>
    )
}
