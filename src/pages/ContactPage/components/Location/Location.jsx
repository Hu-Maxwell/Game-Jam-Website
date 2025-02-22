import "./location.css";
import locationImage from "@assets/white_square_1.png";

const Location = () => {
    return (
        <section className="location-section">
            <h3 className="header">Jam Location</h3>
            <img src={locationImage} alt="Placeholder" width="400px" />
        </section>
    );
};

export default Location;
