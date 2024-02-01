import styles from "./Profile.module.css";
import Info from "./info";

function Profile() {
  return (
    <div className={styles.mainContainer}>
      {/* <Picture></Picture> */}
      <Info></Info>
    </div>
  );
}

export default Profile;
