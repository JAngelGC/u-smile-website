import Image from "next/image";
import { StaticImageData } from "next/image";
import classes from "./SectionInfoLarge.module.css";

const SectionInfoLarge: React.FC<{
  title?: string;
  text: string;
  imagePath: string;
  imageBlurPath: StaticImageData;
}> = (props) => {
  return (
    <section className={classes["section-info"]}>
      <h2>{props.title}</h2>
      <div className={classes["box-img"]}>
        <Image
          src={props.imagePath}
          fill
          style={{ objectFit: "cover" }}
          alt=""
          blurDataURL={props.imageBlurPath.src}
          placeholder="blur"
        />
      </div>
      <p>{props.text}</p>
    </section>
  );
};

export default SectionInfoLarge;
