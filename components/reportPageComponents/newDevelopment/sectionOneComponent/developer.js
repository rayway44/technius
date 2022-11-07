import React from "react";
import styles from "../../../../styles/reportPage/newReportCardSectionOne.module.css";
import Link from "next/link";
import Image from "next/image";
import ImageOne from "../../../../assets/missionAssets/newDevelopement/reportPageSection1/Developer.png";

export default function developer() {
  return (
    <div className={styles.rightSection}>
      <div className={styles.imgSection}>
        <h2>
          <span>Our</span> Developer
        </h2>
        <p className={styles.developer}>
          You'll be responsible for most of the technologies that we see in
          today's workplaces and into the future. You're brilliant at
          identifying unmet human needs, and then use that analysis as the
          trigger for the{" "}
        </p>

        <Image
          // id={styles.image}
          src={ImageOne}
          alt="Developer"
          width={334}
          height={494}
          // fill
        />
      </div>
      <div className={styles.cardSection}>
        <h3> What makes me an Developer?</h3>
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
