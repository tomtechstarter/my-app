import styles from "./Description.module.css";

// Aufgabe 1.2: Name und Alter aus Datenbank einfügen
function Description() {
  return (
    <p className={styles.mainContainer}>
      {`Name:`} <br />
      {`Alter:`}
    </p>
  );
}

export default Description;
