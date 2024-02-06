import styles from "./Profile.module.css";
import Avatar from "./avatar";
import FollowBtn from "./follow-btn/";
import Info from "./info";

function Profile({ userProfile }) {
  // GUI
  return (
    <div className={styles.mainContainer}>
      <Avatar image={userProfile.avatar} />
      <Info profile={userProfile}></Info>

      <FollowBtn />
    </div>
  );
}

export default Profile;
