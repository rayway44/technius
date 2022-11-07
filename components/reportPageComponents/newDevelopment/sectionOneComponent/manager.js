import React from "react";
import styles from "../../../../styles/reportPage/newReportCardSectionOne.module.css";
import Link from "next/link";
import Image from "next/image";
import ImageOne from "../../../../assets/missionAssets/newDevelopement/reportPageSection1/Manager.png";

export default function manager() {
  return (
    <div className={styles.rightSection}>
      <div className={styles.imgSection}>
        <h2>
          <span>Our</span> Manager
        </h2>
        <p className={styles.manager}>
          You'll be responsible for most of the technologies that we see in
          today's workplaces and into the future. You're brilliant at
          identifying unmet human needs, and then use that analysis as the
          trigger for the{" "}
        </p>

        <Image
          // id={styles.image}
          src={ImageOne}
          alt="Manager"
          width={332}
          height={421}
          // fill
        />
      </div>
      <div className={styles.cardSection}>
        <h3> What makes me an Manager?</h3>
        <h6>Analytical Thinker</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem
          accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla lorem accumsan.
        </p>
        <h6>Analytical Thinker</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem
          accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla lorem accumsan.
        </p>
      </div>
    </div>
  );
}
