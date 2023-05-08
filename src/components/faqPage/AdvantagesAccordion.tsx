import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

import MyAccordionItem from "./MyAccordionItem";
import classes from "./FaqAccordion.module.css";

const AdvantagesAccordion = () => {
  return (
    <>
      <div className={classes["box-title"]}>
        <h2>Ventajas de ortodoncia invisible con Invisalign</h2>
      </div>

      <Accordion
        defaultIndex={[0]}
        allowMultiple
        className={classes["accordion"]}
      >
        <MyAccordionItem
          title="¿Cuáles son las ventajas de Invisalign?"
          text="Las ventajas de Invisalign incluyen su estética, comodidad, removibilidad y su eficacia en el tratamiento de problemas dentales."
        />
        <MyAccordionItem
          title="¿Es mejor Invisalign que los brackets tradicionales?"
          text="Invisalign es mucho más cómodo y estético que los brackets tradicionales, ya que no utiliza alambres ni brackets metálicos."
        />
        <MyAccordionItem
          title="¿Cuál es el proceso de tratamiento con Invisalign?"
          text="El proceso es muy simple, incluye una consulta inicial con un ortodoncista, la toma de impresiones y fotografías de los dientes, la creación de los alineadores personalizados y citas regulares para cambiar los alineadores."
        />
        <MyAccordionItem
          title="¿Invisalign duele?"
          text="Es normal sentir algo de presión en los dientes al principio del tratamiento, pero la mayoría de los pacientes informan que no sienten dolor."
        />
      </Accordion>
    </>
  );
};

export default AdvantagesAccordion;
