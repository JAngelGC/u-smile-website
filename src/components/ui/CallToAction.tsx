import Image from "next/image";
import { StaticImageData } from "next/image";
import Button from "./Button";
import classes from "./CallToAction.module.css";

const CallToAction: React.FC<{
  text: String;
  bgColor: string;
  imagePath: string;
  imageBlurPath: StaticImageData;
}> = (props) => {
  const bgClass: string =
    props.bgColor === "green" ? "box-text--green" : "box-text--white";

  return (
    <section className={`${classes["section-cta"]}`}>
      <div className={`${classes["box-text"]}  ${classes[bgClass]}`}>
        <p>{props.text}</p>
        <Button bgColor="white" />
      </div>

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
    </section>
  );
};

export default CallToAction;
