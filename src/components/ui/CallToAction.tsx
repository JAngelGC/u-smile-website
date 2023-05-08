import Image from "next/image";
import { StaticImageData } from "next/image";
import Button from "./Button";
import classes from "./CallToAction.module.css";

const CallToAction: React.FC<{
  text: String;
  altText: string;
  bgColor: string;
  imageObj: StaticImageData;
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
          src={props.imageObj}
          fill
          style={{ objectFit: "cover" }}
          alt={props.altText}
          placeholder="blur"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 70vw, 45vw"
        />
      </div>
    </section>
  );
};

export default CallToAction;
