import Image from "next/image";
import classes from "./Treatments.module.css";

import iconAlineacion from "../../../public/icons/Usmile-alineacion.png";
import iconReconstruccion from "../../../public/icons/Usmile-reconstruccion.png";
import iconImplante from "../../../public/icons/Usmile-implantes.png";
import iconBlanqueamiento from "../../../public/icons/Usmile-blanqueamiento.png";
import iconEstetica from "../../../public/icons/Usmile-estetica.png";

const Treatments = () => {
  return (
    <section className={classes["section-treatments"]}>
      <div className={classes["box-title"]}>
        <h2>Tratamientos</h2>
      </div>
      <div
        className={`${classes["box-icon"]} ${classes["icon-up"]} ${classes["icon-alineacion"]}`}
      >
        <div className={classes["box-img-icon"]}>
          <Image
            src={iconAlineacion}
            fill
            style={{ objectFit: "contain" }}
            placeholder="blur"
            alt=""
          />
        </div>
        <p className={classes["title-treatment"]}>Alineación</p>
      </div>

      <div
        className={`${classes["box-icon"]} ${classes["icon-up"]} ${classes["icon-reconstruccion"]}`}
      >
        <div className={classes["box-img-icon"]}>
          <Image
            src={iconReconstruccion}
            fill
            style={{ objectFit: "contain" }}
            placeholder="blur"
            alt=""
          />
        </div>
        <p className={classes["title-treatment"]}>Recontrucción</p>
      </div>

      <div
        className={`${classes["box-icon"]} ${classes["icon-down"]} ${classes["icon-implantes"]}`}
      >
        <div className={classes["box-img-icon"]}>
          <Image
            src={iconImplante}
            fill
            style={{ objectFit: "contain" }}
            placeholder="blur"
            alt=""
          />
        </div>
        <p className={classes["title-treatment"]}>Implantes</p>
      </div>

      <div
        className={`${classes["box-icon"]} ${classes["icon-down"]} ${classes["icon-blanqueamiento"]}`}
      >
        <div className={classes["box-img-icon"]}>
          <Image
            src={iconBlanqueamiento}
            fill
            style={{ objectFit: "contain" }}
            placeholder="blur"
            alt=""
          />
        </div>
        <p className={classes["title-treatment"]}>Blanqueamiento</p>
      </div>

      <div
        className={`${classes["box-icon"]} ${classes["icon-down"]} ${classes["icon-estetica"]}`}
      >
        <div className={classes["box-img-icon"]}>
          <Image
            src={iconEstetica}
            fill
            style={{ objectFit: "contain" }}
            placeholder="blur"
            alt=""
          />
        </div>
        <p className={classes["title-treatment"]}>Estética dental</p>
      </div>
    </section>
  );
};

export default Treatments;
