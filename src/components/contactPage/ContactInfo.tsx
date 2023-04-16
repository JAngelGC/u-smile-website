import Image from "next/image";
import classes from "./ContactInfo.module.css";

const ContactInfo: React.FC<{}> = () => {
  return (
    <section className={classes["section-info"]}>
      <div className={classes["box-img"]}>
        <Image
          src={"/img/Usmile-fotografia-14.jpg"}
          fill
          style={{ objectFit: "cover" }}
          alt=""
        />
      </div>

      <div className={classes["box-info"]}>
        <div className={classes["box-text"]}>
          <p className={classes["title"]}>Teléfono</p>
          <p className={classes["text"]}>222 808 2303</p>
        </div>
        <div className={classes["box-text"]}>
          <p className={classes["title"]}>Dirección</p>
          <p className={classes["text"]}>
            Periférico Ecológico, Plaza Arco Lomas 17002-A, 72830 Pue.
          </p>
        </div>
        <div className={classes["box-text"]}>
          <p className={classes["title"]}>Horario de atención</p>
          <p className={classes["text"]}>Lunes a viernes: 9:00 am - 7:00 pm</p>
          <p className={classes["text"]}>Sábados: 9:00 am - 2:00 pm</p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
