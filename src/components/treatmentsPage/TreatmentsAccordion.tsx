import { useState } from "react";
import TreatmentItem from "./TreatmentItem";
import classes from "./TreatmentsAccordion.module.css";

import img4 from "../../../public/img/Usmile-fotografia-4.png";

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
        imageObj={img4}
        isActive={treatmentSelected("odontologia")}
        title="Odontología"
        text="Ofrecemos una amplia variedad de servicios de odontología general, que incluyen limpiezas dentales, exámenes regulares, tratamientos de caries y más"
      />
      <TreatmentItem
        imageObj={img4}
        isActive={treatmentSelected("ortodoncia")}
        title="Ortodoncia"
        text="Ofrecemos una amplia variedad de servicios de odontología general, que incluyen limpiezas dentales, exámenes regulares, tratamientos de caries y más"
      />
      <TreatmentItem
        imageObj={img4}
        isActive={treatmentSelected("implantes")}
        title="Implantes dentales"
        text="Ofrecemos una amplia variedad de servicios de odontología general, que incluyen limpiezas dentales, exámenes regulares, tratamientos de caries y más"
      />
      <TreatmentItem
        imageObj={img4}
        isActive={treatmentSelected("blanqueamiento")}
        title="Blanqueamiento dental"
        text="Ofrecemos una amplia variedad de servicios de odontología general, que incluyen limpiezas dentales, exámenes regulares, tratamientos de caries y más"
      />
      <TreatmentItem
        imageObj={img4}
        isActive={treatmentSelected("estetica")}
        title="Estética dental"
        text="Ofrecemos una amplia variedad de servicios de odontología general, que incluyen limpiezas dentales, exámenes regulares, tratamientos de caries y más"
      />
    </section>
  );
};

export default TreatmentsAccordion;
