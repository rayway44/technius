import React, { useEffect, useState } from 'react'
import BodyLeft from './subcomponents/BodyLeft'
import BodyRight from './subcomponents/BodyRight'
import styles from '../../styles/profilePage/profileBody.module.css'

export default function ProfilePageBody({user}) {

    return (
        <div className={styles.profileBodyRoot}>
            <BodyLeft user={user} />
            <BodyRight user={user} />
        </div>
    )
}
