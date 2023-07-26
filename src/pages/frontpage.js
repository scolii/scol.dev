import React from 'react'
import styles from './frontpage.module.css'
import SocialLink from '../component/SocialLink'
import steamIcon from '../assets/icons/steam.png'
import malIcon from '../assets/icons/mal.png'
import discordIcon from '../assets/icons/discord.png'
import twitchIcon from '../assets/icons/twitch.png'
import scolioDgif from '../assets/icons/scolioD.gif'
import mtgIcon from '../assets/icons/mtg.png'

const Frontpage = () => {
  return (
    <div className={styles.main}>
        <div className={styles.gradient}/>
        <div className={styles.main3x3grid}>
            <img src={scolioDgif}/>
            <div className={styles.centerContainer}>
                <div className={styles.socialIconHolder}>
                    <SocialLink className={styles.iconHolder} icon={steamIcon} name='Steam' url='https://steamcommunity.com/id/scoliosisboy/'/>
                    <SocialLink className={styles.iconHolder} icon={malIcon} name='MyAnimeList' url='https://myanimelist.net/profile/scol'/>
                    <SocialLink className={styles.iconHolder} icon={discordIcon} name='Discord' url='https://discordid.netlify.app/?id=143157790070800384'/>
                    <SocialLink className={styles.iconHolder} icon={twitchIcon} name='Twitch' url='https://twitch.tv/scoliosisboy'/>
                    <SocialLink className={styles.iconHolder} icon={mtgIcon} name='MTG Decks' url='https://www.moxfield.com/users/scol'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Frontpage