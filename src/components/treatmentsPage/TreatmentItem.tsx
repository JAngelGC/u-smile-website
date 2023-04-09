import classes from "./TreatmentItem.module.css";
import Image from "next/image";

const TreatmentItem: React.FC<{
  isActive: boolean;
  title: string;
  text: string;
}> = (props) => {
  return (
    <div
      className={`${props.isActive ? classes["active"] : ""} ${
        classes["box-content"]
      }`}
    >
      <div className={classes["box-img"]}>
        <Image
          src={"/img/Kid-smiling.png"}
          fill
          style={{ objectFit: "cover" }}
          alt=""
        />
      </div>
      <div className={classes["box-text"]}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default TreatmentItem;
