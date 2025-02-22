import "./left-column.css";

import discordIcon from "@assets/discord.png";
import instagramIcon from "@assets/instagram.png";

const LeftColumn = () => {
    return (
        <div className="left-column">
            <div className="box-left">
                <div className="image-container">
                    <img className="left-image-placeholder" src={discordIcon} alt="Discord"/>
                    <img className="left-image-placeholder" src={instagramIcon} alt="Placeholder"/>
                </div>
                <span className="left-title">Placeholder title</span>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <hr className="horizontal-line" />
        </div>
    );
};

export default LeftColumn;
