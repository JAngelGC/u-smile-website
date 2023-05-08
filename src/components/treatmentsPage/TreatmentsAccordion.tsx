import { useState } from "react";
import TreatmentItem from "./TreatmentItem";
import classes from "./TreatmentsAccordion.module.css";

import img1 from "../../../public/img/tratamientos/Usmile-tratamiento-odontologia.jpg";
import img2 from "../../../public/img/tratamientos/Usmile-tratamiento-ortodoncia.jpg";
import img3 from "../../../public/img/tratamientos/Usmile-tratamiento-implantes.jpg";
import img4 from "../../../public/img/tratamientos/Usmile-tratamiento-blanqueamiento.jpg";
import img5 from "../../../public/img/tratamientos/Usmile-tratamiento-estetica.jpg";

const TreatmentsAccordion: React.FC<{}> = () => {
  const [treatment, setTreatment] = useState<string>("odontologia");
  console.log("treatment: ", treatment);

  const treatmentSelected = (treatmentState: string): boolean => {
    if (treatment === treatmentState) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <section className={classes["section-treatments"]}>
      <div className={classes["box-buttons"]}>
        <p
          onClick={() => setTreatment("odontologia")}
          className={`${classes["button"]} ${
            treatmentSelected("odontologia") ? classes["btn-active"] : ""
          }`}
        >
          Odontología
        </p>
        <p
          onClick={() => setTreatment("ortodoncia")}
          className={`${classes["button"]} ${
            treatmentSelected("ortodoncia") ? classes["btn-active"] : ""
          }`}
        >
          Ortodoncia
        </p>
        <p
          onClick={() => setTreatment("implantes")}
          className={`${classes["button"]} ${
            treatmentSelected("implantes") ? classes["btn-active"] : ""
          }`}
        >
          Implantes dentales
        </p>
        <p
          onClick={() => setTreatment("blanqueamiento")}
          className={`${classes["button"]} ${
            treatmentSelected("blanqueamiento") ? classes["btn-active"] : ""
          }`}
        >
          Blanqueamiento dental
        </p>
        <p
          onClick={() => setTreatment("estetica")}
          className={`${classes["button"]} ${
            treatmentSelected("estetica") ? classes["btn-active"] : ""
          }`}
        >
          Estética dental
        </p>
      </div>
      <TreatmentItem
        imageObj={img1}
        isActive={treatmentSelected("odontologia")}
        title="Odontología"
        text1="En Usmile, ofrecemos un servicio de odontología completo y de alta calidad para pacientes de todas las edades. Contamos con un equipo de profesionales altamente capacitado y con amplia experiencia en diferentes áreas de la odontología, y utilizamos tecnología de última generación para asegurar un diagnóstico y tratamiento precisos."
        text2="Ofrecemos una amplia variedad de servicios odontológicos, desde limpiezas dentales hasta cirugías orales complejas, en un ambiente cálido y acogedor. Si estás buscando un servicio de odontología confiable y de alta calidad en Puebla, ¡ven a visitarnos en U Smile!"
        altText="Usmile Fotografia Odontologia"
      />
      <TreatmentItem
        imageObj={img2}
        isActive={treatmentSelected("ortodoncia")}
        title="Ortodoncia"
        text1="En Usmile, ofrecemos un servicio de ortodoncia especializado y personalizado para cada paciente. Nuestros especialistas en ortodoncia tienen amplia experiencia en el diagnóstico y tratamiento de problemas de maloclusión dental, mordida cruzada, apiñamiento dental, entre otros."
        text2="Utilizamos tecnología de última generación, como la ortodoncia invisible Invisalign, para garantizar un tratamiento preciso y efectivo. Además, nos enfocamos en ofrecer una atención personalizada a cada paciente, con un trato amable y cercano que les permita sentirse cómodos y confiados en cada visita. Si estás buscando un tratamiento de ortodoncia efectivo y personalizado, ¡Ven a visitarnos en U Smile!"
        altText="Usmile Fotografia Ortodoncia"
      />
      <TreatmentItem
        imageObj={img3}
        isActive={treatmentSelected("implantes")}
        title="Implantes dentales"
        text1="En Usmile, ofrecemos un servicio de implantes dentales de alta calidad y personalizado para cada paciente. Nuestros especialistas en implantología dental tienen amplia experiencia en el diagnóstico y tratamiento de problemas de pérdida de piezas dentales, y utilizamos tecnología de última generación para garantizar un tratamiento preciso y efectivo."
        text2="Ofrecemos una amplia variedad de soluciones de implantes dentales, desde implantes dentales individuales hasta prótesis completas fijas o removibles, según las necesidades de cada paciente."
        altText="Usmile Fotografia Implantes Dentales"
      />
      <TreatmentItem
        imageObj={img4}
        isActive={treatmentSelected("blanqueamiento")}
        title="Blanqueamiento dental"
        text1="Sin duda, creemos que una sonrisa blanca y radiante es una de las mejores formas de lucir una buena apariencia y confianza en uno mismo. Por eso, ofrecemos un servicio de blanqueamiento dental seguro, efectivo y con resultados rápidos y duraderos."
        text2="Utilizamos tecnología de última generación para asegurar un blanqueamiento preciso y sin dolor, y nuestros profesionales altamente capacitados tienen amplia experiencia en el uso de los productos de blanqueamiento dental más efectivos del mercado."
        altText="Usmile Fotografia Blanqueamiento Dental"
      />
      <TreatmentItem
        imageObj={img5}
        isActive={treatmentSelected("estetica")}
        title="Estética dental"
        text1="En Usmile, creemos que una sonrisa hermosa es una de las mejores formas de mejorar tu autoestima y confianza en ti mismo. Por eso, ofrecemos una amplia variedad de servicios de estética dental que te ayudarán a lucir la sonrisa de tus sueños."
        text2="Te garantizamos que saldrás de aquí con una sonrisa deslumbrante que querrás mostrar a todo el mundo."
        altText="Usmile Fotografia Estetica Dental"
      />
    </section>
  );
};

export default TreatmentsAccordion;
