import Image from "next/image";
import { StaticImageData } from "next/image";

import classes from "./SectionInfo.module.css";

const SectionInfo: React.FC<{
  textSide: string;
  title: string;
  text: string;
  imageObj: StaticImageData;
}> = (props) => {
  const classOrientation: string =
    props.textSide === "left" ? "leftText" : "rightText";

  return (
    <section
      className={`${classes["section-info"]} ${classes[classOrientation]}`}
    >
      <div className={classes["box-img"]}>
        <Image
          src={props.imageObj}
          fill
          style={{ objectFit: "cover" }}
          alt=""
          placeholder="blur"
        />
      </div>

      <div className={classes["box-text"]}>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </section>
  );
};

export default SectionInfo;
