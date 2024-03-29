import styles from "./Avatar.module.css";

// Aufgabe 1.2: Image aus Datenbank nutzen
function Avatar({ image }) {
  return <img className={styles.mainContainer} src={image} alt="avatar" />;
}

export default Avatar;
