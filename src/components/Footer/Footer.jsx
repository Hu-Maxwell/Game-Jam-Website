import styles from "./footer.module.css"

import tiktokIcon from "@assets/tiktok.png";
import instagramIcon from "@assets/instagram.png";
import discordIcon from "@assets/discord.png";


// test 
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.socials}>
                <a href="#"><img src={tiktokIcon} alt="TikTok" /></a>
                <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
                <a href="#"><img src={discordIcon} alt="Discord" /></a>
            </div>
        </footer>
    );
};

export default Footer;