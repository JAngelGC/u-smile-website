import Image from "next/image";
import classes from "./Advantage.module.css";

const Advantage: React.FC<{ text: string }> = (props) => {
  return (
    <div className={classes["box-advantage"]}>
      <div className={classes["box-icon"]}>
        <Image
          src={"/icons/white-icon.png"}
          //   fill
          //   style={{ objectFit: "contain" }}
          height={50}
          width={50}
          alt=""
        />
      </div>

      <p className={classes["text"]}>{props.text}</p>
    </div>
  );
};

export default Advantage;
