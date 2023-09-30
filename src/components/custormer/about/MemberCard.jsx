"use client";
import React, { useState } from "react";
import styles from "../../../app/MemberCard.module.css";
import { FaPlus } from "react-icons/fa";

const MemberCard = ({ member }) => {
  const { id, name, img, title, social_links } = member || {};
  const [isShow, setIsShow] = useState(false);

  return (
    <div className={`${styles.card} bg-green-50`}>
      <div className={`${styles.card__border}`}>
        <img src={img} alt="card image" className={`${styles.card__img}`} />
      </div>

      <h3 className={styles.card__name}>{name}</h3>
      <span className={styles.card__profession}>{title}</span>

      <div
        className={`${styles.card__social} ${isShow ? styles.animation : ""}`}
      >
        <div className={styles.card__social_control}>
          <div
            onClick={() => setIsShow(!isShow)}
            className={styles.card__social_toggle}
            id="card-toggle"
          >
            <FaPlus />
          </div>

          <span className={styles.card__social_text}>My social networks</span>

          <ul className={`flex gap-5 ${styles.card__social_list}`}>
            {social_links.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                className={styles.card__social_link}
              >
                <img className="w-8" src={item?.icon} alt="social-link" />
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
