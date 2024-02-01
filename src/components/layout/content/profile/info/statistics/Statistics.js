import StandardLabel from "../../../../../common/labels/standard-label/StandardLabel";

function Statistics() {
  return (
    <div>
      <StandardLabel
        text="36 Beiträge"
        style={{ marginRight: "100px" }}
      ></StandardLabel>
      <StandardLabel
        text="x Follower"
        style={{ marginRight: "100px" }}
      ></StandardLabel>
      <StandardLabel text="y gefolgt" />
    </div>
  );
}

export default Statistics;
