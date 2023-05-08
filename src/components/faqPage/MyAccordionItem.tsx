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
          <h3 className={classes["title-question"]}>{props.title}</h3>
        </Box>
        <AccordionIcon />
      </AccordionButton>

      <AccordionPanel pb={4}>
        <p className={classes["text-question"]}>{props.text}</p>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default MyAccordionItem;
