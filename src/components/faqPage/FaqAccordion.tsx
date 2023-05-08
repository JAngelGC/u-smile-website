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

const FaqAccordion = () => {
  return (
    <Accordion
      defaultIndex={[0]}
      allowMultiple
      className={classes["accordion"]}
    >
      <MyAccordionItem
        title="¿Qué es Invisalign?"
        text="Es un tratamiento ortodóntico que utiliza alineadores transparentes y removibles para enderezar los dientes."
      />
      <MyAccordionItem
        title="¿Cómo funciona Invisalign?"
        text="Invisalign utiliza alineadores transparentes personalizados para mover los dientes gradualmente a su posición correcta."
      />
      <MyAccordionItem
        title="¿Qué tan efectivo es Invisalign?"
        text="Invisalign es un tratamiento ortodóntico altamente efectivo para corregir una amplia variedad de problemas dentales."
      />
      <MyAccordionItem
        title="¿Cuánto tiempo dura el tratamiento con Invisalign?"
        text="El tiempo de tratamiento depende de la complejidad del caso, pero generalmente dura entre 12 y 18 meses."
      />
    </Accordion>
  );
};

export default FaqAccordion;
