import styles from "./dragon.module.css" 

import dragon from "@assets/dragon.png"; 

const Dragon = () => {
    return (
        <div>
            <img src={dragon} alt="Dragon" />
        </div>
    );
};

export default Dragon; 