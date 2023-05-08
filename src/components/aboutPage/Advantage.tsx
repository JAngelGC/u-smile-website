import Image from "next/image";
import { StaticImageData } from "next/image";
import classes from "./Advantage.module.css";

const Advantage: React.FC<{
  text: string;
  altText: string;
  imageObj: StaticImageData;
}> = (props) => {
  return (
    <div className={classes["box-advantage"]}>
      <div className={classes["box-icon"]}>
        <Image
          src={props.imageObj}
          height={50}
          width={50}
          alt={props.altText}
        />
      </div>

      <p className={classes["text"]}>{props.text}</p>
    </div>
  );
};

export default Advantage;
