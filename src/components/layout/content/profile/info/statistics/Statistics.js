import StandardLabel from "../../../../../common/labels/standard-label/StandardLabel";
import AppData from "../../../../../../utils/AppData";

function Statistics() {
  return (
    <div>
      <StandardLabel
        text={`${AppData.postCount} Beiträge`}
        style={{ marginRight: "100px" }}
      ></StandardLabel>
      <StandardLabel
        text={`${AppData.followerCount} Follower`}
        style={{ marginRight: "100px" }}
      ></StandardLabel>
      <StandardLabel text={`${AppData.followingCount} gefolgt`} />
    </div>
  );
}

export default Statistics;
