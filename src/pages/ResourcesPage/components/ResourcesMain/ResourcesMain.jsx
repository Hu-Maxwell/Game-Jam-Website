import "./resources-main.css";
import LeftColumn from "./../LeftColumn/LeftColumn";
import RightColumn from "./../RightColumn/RightColumn";

const ressss = () => {
    return (
        <section className="resources-main">
            <h1 className="resources-title">Resources</h1>
            <div className="resources-body">
                <LeftColumn />
                <RightColumn />
            </div>
        </section>
    );
};

export default ressss;
