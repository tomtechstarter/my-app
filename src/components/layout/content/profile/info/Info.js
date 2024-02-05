import styles from "./Info.module.css";
import Description from "./description/";
import Statistics from "./statistics/Statistics";

function Info({ profile }) {
  return (
    <div>
      {/* Interactions */}
      <Statistics
        followerCount={profile.followerCount}
        followingCount={profile.followingCount}
        postCount={profile.postCount}
      />
      <Description />
    </div>
  );
}

export default Info;
