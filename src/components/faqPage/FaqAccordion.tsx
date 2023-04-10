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
        title="¿Con qué frecuencia debo visitar al dentista?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
      />
      <MyAccordionItem
        title="¿Con qué frecuencia debo visitar al dentista?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
      />
      <MyAccordionItem
        title="¿Con qué frecuencia debo visitar al dentista?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
      />
      <MyAccordionItem
        title="¿Con qué frecuencia debo visitar al dentista?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
      />
    </Accordion>
  );
};

export default FaqAccordion;
