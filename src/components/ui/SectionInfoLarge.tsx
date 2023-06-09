import Image from "next/image";
import { StaticImageData } from "next/image";
import classes from "./SectionInfoLarge.module.css";

const SectionInfoLarge: React.FC<{
  title?: string;
  text: string;
  altText: string;
  imageObj: StaticImageData;
}> = (props) => {
  return (
    <section className={classes["section-info"]}>
      <h2>{props.title}</h2>
      <div className={classes["box-img"]}>
        <Image
          src={props.imageObj}
          fill
          style={{ objectFit: "cover" }}
          alt={props.altText}
          placeholder="blur"
          sizes="(max-width: 640px) 90vw, (max-width: 768px) 70vw, 55vw"
        />
      </div>
      <p>{props.text}</p>
    </section>
  );
};

export default SectionInfoLarge;
