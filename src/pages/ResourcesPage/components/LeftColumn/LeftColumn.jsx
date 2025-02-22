import "./left-column.css";

const LeftColumn = () => {
    return (
        <div className="left-column">
            <div className="box-left">
                <div className="image-container">
                    <img className="left-image-placeholder" src="/images/discord.png" alt="Discord"/>
                    <img className="left-image-placeholder" src="/images/facebook.png" alt="Facebook"/>
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
