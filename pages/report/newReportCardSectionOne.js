import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/reportPage/newReportCardSectionOne.module.css";
import Image from "next/image";
import ImageOne from "../../assets/missionAssets/newDevelopement/reportPageSection1/Originator.png";

import Originator from "../../components/reportPageComponents/newDevelopment/sectionOneComponent/originator";
import Developer from "../../components/reportPageComponents/newDevelopment/sectionOneComponent/developer";
import Designer from "../../components/reportPageComponents/newDevelopment/sectionOneComponent/designer";
import Manager from "../../components/reportPageComponents/newDevelopment/sectionOneComponent/manager";
import Engineer from "../../components/reportPageComponents/newDevelopment/sectionOneComponent/engineer";
import Investigator from "../../components/reportPageComponents/newDevelopment/sectionOneComponent/investigator";

export default function NewReportCardSectionOne() {
  const [component, setComponent] = useState(Originator);

  return (
    <div className={styles.root}>
      {/* <Link href="/report/newReportCard">
        <a>LINK BACK TO MAIN COMPONENT</a>
      </Link> */}

      <div className={styles.container}>
        <div className={styles.innerSection}>
          <div className={styles.sideBar}>
            <button
              className={styles.sideBarButton}
              onClick={() => setComponent(Originator)}
            >
              <b>Originator</b>
            </button>
            <button
              className={styles.sideBarButton}
              onClick={() => setComponent(Designer)}
            >
              <b>Designer</b>
            </button>
            <button
              className={styles.sideBarButton}
              onClick={() => setComponent(Developer)}
            >
              <b>Developer</b>
            </button>
            <button
              className={styles.sideBarButton}
              onClick={() => setComponent(Manager)}
            >
              <b>Manager</b>
            </button>
            <button
              className={styles.sideBarButton}
              onClick={() => setComponent(Engineer)}
            >
              <b>Engineer</b>
            </button>
            <button
              className={styles.sideBarButton}
              onClick={() => setComponent(Investigator)}
            >
              <b>Investigator</b>
            </button>
          </div>
          {component}
        </div>
      </div>
    </div>
  );
}
