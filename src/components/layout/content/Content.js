import styles from "./Content.module.css";
import Gallery from "./gallery";
import Profile from "./profile";

function Content({ data }) {
  return (
    <div className={styles.mainContainer}>
      <Profile userProfile={data.profile}></Profile>
      <Gallery posts={data.posts} />
    </div>
  );
}

export default Content;
