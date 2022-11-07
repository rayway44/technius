import React, { useEffect, useState } from 'react'
import styles from '../../styles/profilePage/studentProfileBody.module.css'
import StudentProfileBody from './subcomponents/StudentProfileBody'

export default function ProfilePageBodyStudent({user}) {

    return (
        <div className={styles.profileBodyRoot}>
            <StudentProfileBody user={user} />
        </div>
    )
}
