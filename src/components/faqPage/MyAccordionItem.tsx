import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

import classes from "./MyAccordionItem.module.css";

const MyAccordionItem: React.FC<{ title: string; text: string }> = (props) => {
  return (
    <AccordionItem className={classes["accordion-item"]}>
      <AccordionButton>
        <Box as="span" flex="1" textAlign="left">
          <h3 className={classes["title-question"]}>
            Alineadores transparentes
          </h3>
        </Box>
        <AccordionIcon />
      </AccordionButton>

      <AccordionPanel pb={4}>
        <p className={classes["text-question"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default MyAccordionItem;
