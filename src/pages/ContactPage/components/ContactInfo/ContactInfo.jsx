import styles from "./contact-info.module.css";

const ContactInfo = () => {
    return (
        <section className={styles.contactInfo}>
            <p className="header">
                To keep up to date with all the latest club news, follow our Twitter and Discord at XXX.
            </p>
            <p>For inquiries, please contact us at EMAIL.</p>
        </section>
    );
};

export default ContactInfo;
