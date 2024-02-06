import StandardBtn from "../../../common/buttons/standard-btn";
import styles from "./NavBarRight.module.css";
import LoginButton from "./login-btn/login-btn";

// Aufgabe 2.1: LogIn-Button als extra Komponente
// Aufgabe 2.2: useState für LogIn und LoggedIn beim Klicken
function NavBarRight() {
  return (
    <div className={styles.mainContainer}>
      <LoginButton></LoginButton>
      <div className={styles.spacer} />
      <StandardBtn text={"Sign Up"} />
    </div>
  );
}

export default NavBarRight;
