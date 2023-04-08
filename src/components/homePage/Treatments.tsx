import Image from "next/image";
import classes from "./Treatments.module.css";

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
            src={"/icons/Usmile-alineacion.png"}
            fill
            style={{ objectFit: "contain" }}
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
            src={"/icons/Usmile-reconstruccion.png"}
            fill
            style={{ objectFit: "contain" }}
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
            src={"/icons/Usmile-implantes.png"}
            fill
            style={{ objectFit: "contain" }}
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
            src={"/icons/Usmile-blanqueamiento.png"}
            fill
            style={{ objectFit: "contain" }}
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
            src={"/icons/Usmile-estetica.png"}
            fill
            style={{ objectFit: "contain" }}
            alt=""
          />
        </div>
        <p className={classes["title-treatment"]}>Estética dental</p>
      </div>
    </section>
  );
};

export default Treatments;
