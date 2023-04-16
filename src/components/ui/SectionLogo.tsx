import Image from "next/image";
import classes from "./SectionLogo.module.css";

const SectionLogo: React.FC<{ text?: string }> = (props) => {
  return (
    <section className={classes["section-logo"]}>
      <div className={classes["box-img"]}>
        <Image
          src={"/img/Usmile-logo.png"}
          fill
          style={{ objectFit: "contain" }}
          alt=""
        />
      </div>
      <p className={classes["text"]}>{props.text}</p>
    </section>
  );
};

export default SectionLogo;
