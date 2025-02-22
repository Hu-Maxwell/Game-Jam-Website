import "./right-column.css";

const RightColumn = () => {
    return (
        <div className="right-column">
            <span className="mentors-title">Mentors</span>
            <div className="box-right">
                <img className="image-placeholder" src="/images/cat-1.jpg" alt="Mentor"/>
                <div className="box-text">
                    <span className="box-title">Placeholder mentor name</span>
                    <p>Some information about mentors: Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
            <div className="box-right">
                <img className="image-placeholder" src="/images/cat-1.jpg" alt="Mentor"/>
                <div className="box-text">
                    <span className="box-title">Placeholder mentor name</span>
                    <p>Some information about mentors: Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
        </div>
    );
};

export default RightColumn;
