import Image from "next/image";
import classes from "./SectionLogo.module.css";

import imgLogo from "../../../public/img/Usmile-logo.png";

const SectionLogo: React.FC<{ text?: string }> = (props) => {
  return (
    <section className={classes["section-logo"]}>
      <div className={classes["box-img"]}>
        <Image
          src={imgLogo}
          fill
          style={{ objectFit: "contain" }}
          placeholder="blur"
          alt="Usmile Puebla Logo"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 40vw, 20vw"
        />
      </div>
      <p className={classes["text"]}>{props.text}</p>
    </section>
  );
};

export default SectionLogo;
