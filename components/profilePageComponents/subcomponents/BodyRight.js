import React, { useEffect, useState } from 'react'
import styles from '../../../styles/profilePage/profileBody.module.css'
import addIcon from '../../../assets/profilePageAssets/addIcon.svg'
import editIcon from '../../../assets/profilePageAssets/editIcon.svg'
import Image from 'next/image'
import clsx from 'clsx'
import axios from 'axios'
import { v4 as uuid } from 'uuid'
import { useRouter } from 'next/router'
import AddClassModal from './AddClassModal'
import EditClassNameModal from './EditClassNameModal'
import InviteStudentsModal from './InviteStudentsModal'

export default function BodyRight({user}) {
    const [addClassModal, setAddClassModal] = useState(false)
    const [nameChangeModal, setNameChangeModal] = useState(false)
    const [inviteStudentsModal, setInviteStudentsModal] = useState(false)
    const [class_name, setClassName] = useState('')
    const [currentClass, setCurrentClass] = useState({})
    const [classList, setClassList] = useState([])
    const [studentInviteSuccess, setStudentInviteSuccess] = useState('placeholder')

    const router = useRouter()

    useEffect(() => {
        axios.get('/api/getClasses/' + user.teacher_id)
        .then(res => {
            setClassList(res.data)
        })
        .catch(err => console.error(err))
    }, [])

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

    return (
        <div className={styles.profileBodyRight}>
            <AddClassModal handleAddClass={handleAddClass} setAddClassModal={setAddClassModal} addClassModal={addClassModal} class_name={class_name} setClassName={setClassName} />
            <EditClassNameModal handleNameChange={handleNameChange} setNameChangeModal={setNameChangeModal} nameChangeModal={nameChangeModal} currentClass={currentClass} setCurrentClass={setCurrentClass} />
            <InviteStudentsModal inviteStudentsModal={inviteStudentsModal} setInviteStudentsModal={setInviteStudentsModal} currentClass={currentClass} handleInviteStudents={handleInviteStudents} studentInviteSuccess={studentInviteSuccess} setStudentInviteSuccess={setStudentInviteSuccess} />
            <div className={styles.profileRightHeaders}>
                <p className={styles.myClasses}>MY CLASSES</p>
                <div onClick={() => user.school_id ? setAddClassModal(true) : undefined} className={clsx(styles.addClassDiv, {[styles.buttonDisabled]: !user.school_id})}>
                    <button className={clsx(styles.addClassButton, {[styles.buttonDisabled]: !user.school_id})}>Add Class</button>
                    <Image src={addIcon} alt="add icon" />
                </div>
            </div>
            <div className={styles.classesList}>
                {Object.keys(classList).map((Class, index) => (
                    <div key={index} className={styles.classRoot}>
                        <div className={styles.className}>
                            <span>{Class}</span>
                            <div className={styles.editIconDiv}>
                                <Image onClick={() => {
                                setNameChangeModal(true)
                                setCurrentClass(classList[Class])
                                }} src={editIcon} alt="edit icon" />
                            </div>
                        </div>
                        <div onClick={() => {
                                setInviteStudentsModal(true)
                                setCurrentClass(classList[Class])
                            }} className={styles.inviteStudentsDiv}>
                            <button className={styles.inviteStudentsButton}>Invite Students</button>
                            <Image src={addIcon} alt="add icon" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
