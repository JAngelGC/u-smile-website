import Advantage from "./Advantage";
import classes from "./SectionAdvantages.module.css";

import imgIcon1 from "../../../public/icons/Usmile-ventaja-1.png";
import imgIcon2 from "../../../public/icons/Usmile-ventaja-2.png";
import imgIcon3 from "../../../public/icons/Usmile-ventaja-3.png";
import imgIcon4 from "../../../public/icons/Usmile-ventaja-4.png";

const SectionAdvantages: React.FC<{}> = () => {
  return (
    <section className={classes["section-advantages"]}>
      <h2>Lo que nos diferencia</h2>
      <div className={classes["box-advantages"]}>
        <Advantage
          imageObj={imgIcon1}
          text="Nos esforzamos por mantenernos siempre actualizados, utilizando la mejor tecnología y las técnicas más vanguardistas."
          altText="Usmile Icono Tecnologia"
        />
        <Advantage
          imageObj={imgIcon2}
          text="Nos enorgullece ofrecer el sistema Invisalign a nuestros pacientes como una opción de tratamiento de ortodoncia discreta y cómoda y de la más alta calidad."
          altText="Usmile Icono Paciente"
        />
        <Advantage
          imageObj={imgIcon3}
          text="Nos enfocamos en brindarte una atención personalizada. Nuestro equipo se toma el tiempo de conocer a cada paciente y sus necesidades específicas."
          altText="Usmile Icono Atencion"
        />
        <Advantage
          imageObj={imgIcon4}
          text="Nuestra clínica cuenta con tecnología de última generación para asegurar un diagnóstico y tratamiento precisos."
          altText="Usmile Icono Tratamiento"
        />
      </div>
    </section>
  );
};

export default SectionAdvantages;
