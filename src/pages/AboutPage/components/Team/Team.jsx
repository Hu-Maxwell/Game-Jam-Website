import styles from "./team.module.css";

import personBlock from "@assets/pixel-square.png";

const teamMembers = [
    "Person 1",
    "Person 2",
    "Person 3",
    "Person 4",
    "Person 5",
    "Person 6",
    "Person 7",
    "Person 8",
    "Person 9",
];

const memberImages = [
    personBlock,
    personBlock,
    personBlock,
    personBlock,
    personBlock,
    personBlock,
    personBlock,
    personBlock,
    personBlock
]

const TeamSection = () => {
    return (
        <section className={styles.teamSection}>
            <h3 className={styles.header}>Our Team</h3>
            <div className={styles.peopleGrid}>

                {teamMembers.map((member, index) => (
                    <div key={index} className={styles.teamMember}>
                        <img src={memberImages[index]} alt="Picture of team member"/>
                        <p>{member}</p>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default TeamSection;
