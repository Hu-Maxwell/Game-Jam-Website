import styles from "./input-field.module.css"

const InputField = () => {
    return (
        <> 
            <input className={styles.inputField} type="text" placeholder="Name" />
        </>
    );
}

export default InputField;

