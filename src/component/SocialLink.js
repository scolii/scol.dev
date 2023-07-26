import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SocialLink.module.css'

const SocialLink = (props) => {
  return (
    <div className={props.className}>
      <div className={styles.socialLinkContainer}>
        <a href={props.url} className={styles.link} target="_blank">
          <img src={props.icon} className={styles.img}/>
          <span className={styles.textHolder}>{props.name}</span>
        </a>
      </div>
    </div>
  )
}

export default SocialLink