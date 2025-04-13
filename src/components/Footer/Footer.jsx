import styles from "./footer.module.css"

import gmailIcon from "@assets/gmail2.png";
import instagramIcon from "@assets/instagram.png";
import discordIcon from "@assets/discord.png";
import rufusIcon from "@assets/rufus.png"

const Footer = () => {
    return (
            <footer className={styles.footer}>
                <div className={styles.footer_content}>
                    <h2 className={styles.footer_title}>MERCED GAME JAM 2025!</h2>
                    <p className={styles.footer_tagline}>BUILD · PLAY · CONNECT</p>
                                        
                    <div className={styles.socials}>
                        <div className={styles.gmail_container}>
                            <a 
                                href="mailto:ucmgamedevelopmentclub@gmail.com" 
                                className={styles.social_icon}
                            >
                                <img className={styles.pixel_icon} src={gmailIcon}/>
                            </a>
                        </div>
                        <div className={styles.insta_container}>
                            <a 
                                href="https://www.instagram.com/ucmgamedevelopmentclub/?hl=en" 
                                className={styles.social_icon}
                                target="_blank"
                            >
                                <img className={styles.pixel_icon} src={instagramIcon}/>
                            </a>
                        </div>
                        <div className={styles.discord_container}>
                            <a 
                                href="https://www.instagram.com/ucmgamedevelopmentclub/?hl=en " 
                                className={styles.social_icon}
                                target="_blank"
                            >
                                <img className={styles.pixel_icon} src={discordIcon}/>
                            </a>
                        </div>
                        <div className={styles.rufus_container}>
                            <a  
                                href="https://events.ucmerced.edu/group/game_development_club " 
                                className={styles.social_icon}
                                
                            >
                                <img className={styles.pixel_icon} src={rufusIcon}/>
                            </a>
                        </div>
                    </div>
                                        
                    <div>
                        <span className={styles.text}>2025 MercedJam Team</span>
                    </div>
                    
                    <div class="pixel-character"></div>
                </div>
                
            </footer>
    );
};

export default Footer;