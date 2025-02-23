import styles from "./team.module.css";

import personPlaceholder from "@assets/white_square_1.png";

const teamMembers = [
    "Person 1",
    "Person 2",
    "Person 3",
    "Person 4",
    "Person 5",
    "Person 6"
];

const TeamSection = () => {
    return (
        <section className={styles.teamSection}>
            <h3 className={styles.header}>Our Team</h3>
            <div className={styles.peopleGrid}>

                {teamMembers.map((member, index) => (
                    <div key={index} className={styles.teamMember}>
                        <img src={personPlaceholder} alt="Placeholder" width="200px" />
                        <p>{member}</p>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default TeamSection;
