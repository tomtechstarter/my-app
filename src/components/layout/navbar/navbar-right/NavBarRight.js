import StandardBtn from "../../../common/buttons/standard-btn";
import styles from "./NavBarRight.module.css";

// Aufgabe 2.1: LogIn-Button als extra Komponente
// Aufgabe 2.2: useState für LogIn und LoggedIn beim Klicken
function NavBarRight() {
  return (
    <div className={styles.mainContainer}>
      <StandardBtn text={"Login"} />
      <div className={styles.spacer} />
      <StandardBtn text={"Sign Up"} />
    </div>
  );
}

export default NavBarRight;
