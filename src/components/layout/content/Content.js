import styles from "./Content.module.css";
import Gallery from "./gallery";
import Profile from "./profile";

function Content() {
  return (
    <div className={styles.mainContainer}>
      <Profile></Profile>
      <Gallery />
    </div>
  );
}

export default Content;
