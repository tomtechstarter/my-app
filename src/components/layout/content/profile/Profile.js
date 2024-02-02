import styles from "./Profile.module.css";
import FollowBtn from "./follow-btn";
import Info from "./info";

function Profile({ userProfile }) {
  // GUI
  return (
    <div className={styles.mainContainer}>
      {/* <Picture></Picture> */}
      <Info profile={userProfile}></Info>

      <FollowBtn />
    </div>
  );
}

export default Profile;
