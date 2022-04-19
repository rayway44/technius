import React, { useEffect, useState } from 'react'
import styles from '../../styles/dashboardPage/dashboardBody.module.css'
import addIcon from '../../assets/profilePageAssets/addIcon.svg'
import editIcon from '../../assets/profilePageAssets/editIcon.svg'
import smallProfileIcon from '../../assets/dashboardPageAssets/smallProfileIcon.svg'
import Image from 'next/image'
import clsx from 'clsx'
import axios from 'axios'
import { v4 as uuid } from 'uuid'
import { useRouter } from 'next/router'
import AddClassModal from '../profilePageComponents/subcomponents/AddClassModal'
import EditClassNameModal from '../profilePageComponents/subcomponents/EditClassNameModal'
import InviteStudentsModal from '../profilePageComponents/subcomponents/InviteStudentsModal'
import RequestInfoModal from './RequestInfoModal'

export default function DashboardBody({user}) {
    const [addClassModal, setAddClassModal] = useState(false)
    const [openRequestInfoModal, setOpenRequestInfoModal] = useState(false)
    const [nameChangeModal, setNameChangeModal] = useState(false)
    const [inviteStudentsModal, setInviteStudentsModal] = useState(false)
    const [class_name, setClassName] = useState('')
    const [currentClass, setCurrentClass] = useState({})
    const [classList, setClassList] = useState([])
    const [showStudents, setShowStudents] = useState([])
    const [studentInviteSuccess, setStudentInviteSuccess] = useState('placeholder')

    const router = useRouter()

    useEffect(() => {
        axios.get('/api/getClasses/' + user.teacher_id)
        .then(res => {
            setClassList(res.data);
            setShowStudents(new Array(res.data.length).fill(false))
        })
        .catch(err => console.error(err))
    }, [])

    const handleShowStudents = (index) => {
        let temp = [...showStudents]

        temp[index] = !temp[index]

        setShowStudents(temp)
    }

    const handleAddClass = async () => {
        const class_uuid = await uuid();

        axios.post('/api/addClass', {
            teacher_id: user.teacher_id,
            class_name: class_name,
            class_uuid: class_uuid
        })
        .then(() => router.reload(window.location.pathname))
        .catch(err => console.log(err))
    }

    const handleNameChange = (class_id, className) => {
        axios.post('/api/updateClass', {
            class_name: className,
            class_id: class_id,
        })
        .then(() => router.reload(window.location.pathname))
        .catch((error) => console.error(error))
    }

    const handleInviteStudents = (studentsList, class_uuid) => {
        axios.post('/api/inviteStudents', {
            studentList: studentsList,
            class_uuid: class_uuid
        })
        .then((res) => {
            if (res.status === 200) {
                setStudentInviteSuccess('successful')
                setInviteStudentsModal(false)
            } else {
                setStudentInviteSuccess('unsuccessful')
            }
        })
        .catch((err) => setStudentInviteSuccess('unsuccessful'))
    }

    const handleRequestInfo = (Class) => {
        axios.post('/api/requestInfo', {
            email: user.email,
            class: Class
        })
        setOpenRequestInfoModal(true)
    }

    return (
        <div className={styles.dashboardBodyRoot}>
            <AddClassModal handleAddClass={handleAddClass} setAddClassModal={setAddClassModal} addClassModal={addClassModal} class_name={class_name} setClassName={setClassName} />
            <EditClassNameModal handleNameChange={handleNameChange} setNameChangeModal={setNameChangeModal} nameChangeModal={nameChangeModal} currentClass={currentClass} setCurrentClass={setCurrentClass} />
            <InviteStudentsModal inviteStudentsModal={inviteStudentsModal} setInviteStudentsModal={setInviteStudentsModal} currentClass={currentClass} handleInviteStudents={handleInviteStudents} studentInviteSuccess={studentInviteSuccess} setStudentInviteSuccess={setStudentInviteSuccess} />
            <RequestInfoModal open={openRequestInfoModal} setOpen={setOpenRequestInfoModal} />
            <div className={styles.dashboardBodyHeaderDiv}>
                <div className={styles.dashboardBodyHeader}>
                    MY DASHBOARD
                </div>
                <div onClick={() => user.school_id ? setAddClassModal(true) : undefined} className={clsx(styles.addClassDiv, {[styles.buttonDisabled]: !user.school_id})}>
                    <button className={clsx(styles.addClassButton, {[styles.buttonDisabled]: !user.school_id})}>Add Class</button>
                    <Image src={addIcon} alt="add icon" />
                </div>
            </div>
            <div className={styles.classesList}>
                {Object.keys(classList).map((Class, index) => (
                    <div key={index} className={clsx(styles.classRoot, {[styles.increaseHeight]: showStudents[index]})}>
                        <div className={styles.classListTop}>
                            <div className={styles.className}>
                                <span>{Class}</span>
                                <div className={styles.editIconDiv}>
                                    <Image onClick={() => {
                                    setNameChangeModal(true)
                                    setCurrentClass(classList[Class])
                                    }} src={editIcon} alt="edit icon" />
                                </div>
                            </div>
                            <div className={styles.requestInfoAndInviteStudentsDiv}>
                                <div onClick={() => handleRequestInfo(Class)}className={styles.requestInfo}>
                                    Request class report
                                </div>
                                <div onClick={() => {
                                        setInviteStudentsModal(true)
                                        setCurrentClass(classList[Class])
                                    }} className={styles.inviteStudentsDiv}>
                                    <button className={styles.inviteStudentsButton}>Invite Students</button>
                                    <Image src={addIcon} alt="add icon" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.classListDivider}></div>
                        <div className={styles.classListBottom}>
                            <div className={styles.studentListHeader}>
                                Students
                            </div>
                            {classList[Class].students.slice(0, showStudents[index] ? classList[Class].students.length : 2).map((student, index) => (
                                <div key={index} className={styles.studentList}>
                                    <Image src={smallProfileIcon} alt="profile icon" />
                                    <span>{student.name}</span>
                                </div>
                            ))}
                        {classList[Class].students.length > 2 && <div onClick={() => handleShowStudents(index)} className={styles.seeAllStudents}>{showStudents[index] ? "see less" : "see all students"}</div>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
