import Advantage from "./Advantage";
import classes from "./SectionAdvantages.module.css";

import imgIcon from "../../../public/icons/white-icon.png";

const SectionAdvantages: React.FC<{}> = () => {
  return (
    <section className={classes["section-advantages"]}>
      <h2>Lo que nos diferencia</h2>
      <div className={classes["box-advantages"]}>
        <Advantage
          imageObj={imgIcon}
          text="Nos esforzamos por mantenernos siempre actualizados, utilizando la mejor tecnología y las técnicas más vanguardistas."
        />
        <Advantage
          imageObj={imgIcon}
          text="Nos enorgullece ofrecer el sistema Invisalign a nuestros pacientes como una opción de tratamiento de ortodoncia discreta y cómoda y de la más alta calidad."
        />
        <Advantage
          imageObj={imgIcon}
          text="Nos enorgullece ofrecer el sistema Invisalign a nuestros pacientes como una opción de tratamiento de ortodoncia discreta y cómoda y de la más alta calidad."
        />
        <Advantage
          imageObj={imgIcon}
          text="Nos esforzamos por mantenernos siempre actualizados, utilizando la mejor tecnología y las técnicas más vanguardistas."
        />
      </div>
    </section>
  );
};

export default SectionAdvantages;
