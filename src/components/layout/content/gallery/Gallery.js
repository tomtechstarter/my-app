import AppData from "../../../../utils/AppData";
import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <div className={styles.mainContainer}>
      {AppData.images.map(function (image, index) {
        return <img src={image} alt={"My Galery Img" + index} />;
      })}
    </div>
  );
}

export default Gallery;
