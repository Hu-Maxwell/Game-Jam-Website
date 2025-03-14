import { useState } from "react";
import styles from "./team.module.css";

import a from "@assets/alfred.png";
import m from "@assets/matthew.png";
import mx from "@assets/maxwell.png";
import ad from "@assets/adit.png";
import ma from "@assets/marian.png";
import c from "@assets/connie.png";
import j from "@assets/jun.png";
import is from "@assets/ishan.png";
import s from "@assets/serge.png";
import b from "@assets/brandon.png";
import mg from "@assets/megan.png";
import ja from "@assets/jai.png";
import v from "@assets/vincent.png";

import alfred from "@assets/President - Alfred Roy Manongsong.png";
import matthew from "@assets/Vice President - Matthew Acuna.png";
import maxwell from "@assets/Secretary - Maxwell Hu.png";
import adit from "@assets/Treasurer - Adit Khandelwal.png";
import marian from "@assets/Event Coordinator - Marian Zuniga.png";
import connie from "@assets/Connie Wang - Programming Chair.png";
import jun from "@assets/Jun Lu - Programming Chair.png";
import ishan from "@assets/Ishan Chawla - Programming Chair.png";
import serge from "@assets/Serge Lobach - Audio Chair.png";
import brandon from "@assets/Brandon Del Mundo - Developer.png";
import megan from "@assets/Megan Ciraulo - Developer.png";
import jai from "@assets/Jai Sanghrajka - Developer.png";
import vincent from "@assets/Vincent Chen - Developer.png";

const initialImages = [a, m, mx, ad, ma, c, j, is, s, b, mg, ja,v];
const hoverImages = [alfred, matthew, maxwell, adit, marian, connie, jun, ishan, serge, brandon, megan, jai, vincent];

const TeamSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className={styles.teamSection}>
            <div className={styles.peopleGrid}>
                {initialImages.map((img, index) => (
                    <div
                        key={index}
                        className={styles.teamMember}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <img 
                            src={hoveredIndex === index ? hoverImages[index] : img} 
                            alt="Picture of team member" 
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;
