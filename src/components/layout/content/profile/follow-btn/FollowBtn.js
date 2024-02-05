import { useState } from "react";
import styles from "./FollowBtn.module.css";

function FollowBtn() {
  const [isFollowing, setIsFollowing] = useState(false);

  function onClickFollow() {
    setIsFollowing(true);
  }

  function onClickUnfollow() {
    setIsFollowing(false);
  }

  if (isFollowing) {
    return (
      <button
        className={styles.mainContainer}
        style={{ backgroundColor: "grey" }}
        onClick={onClickUnfollow}
      >
        Following
      </button>
    );
  }

  return (
    <button
      className={styles.mainContainer}
      style={{ backgroundColor: "green" }}
      onClick={onClickFollow}
    >
      Follow
    </button>
  );
}

export default FollowBtn;
