import classes from "./TreatmentItem.module.css";
import Image from "next/image";
import { StaticImageData } from "next/image";

const TreatmentItem: React.FC<{
  isActive: boolean;
  title: string;
  text1: string;
  text2: string;
  altText: string;
  imageObj: StaticImageData;
}> = (props) => {
  return (
    <div
      className={`${props.isActive ? classes["active"] : ""} ${
        classes["box-content"]
      }`}
    >
      <div className={classes["box-img"]}>
        <Image
          src={props.imageObj}
          fill
          style={{ objectFit: "cover" }}
          alt={props.altText}
          placeholder="blur"
          sizes="(max-width: 640px) 90vw, (max-width: 768px) 60vw, 70vw"
        />
      </div>
      <div className={classes["box-text"]}>
        <h3>{props.title}</h3>
        <p>{props.text1}</p>
        <p className={classes["text2"]}>{props.text2}</p>
      </div>
    </div>
  );
};

export default TreatmentItem;
