import Button from "../ui/Button";
import classes from "./Header.module.css";
import Image from "next/image";

import React from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
// import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: false,
  arrows: true,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Header = () => {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const cards = [
    "/img/Usmile-fotografia-16.png",
    "/img/Usmile-fotografia-1.png",
    "/img/Usmile-fotografia-2.png",
    "/img/Usmile-fotografia-4.png",
  ];

  return (
    <section className={classes["header"]}>
      <div className={classes["box-info"]}>
        <p className={classes["title"]}>
          ¡Obtén la sonrisa perfecta que siempre has querido!
        </p>
        <Button bgColor="green" classB={classes["btn"]} />
      </div>
      <Box
        position={"relative"}
        height={"100%"}
        width={"100%"}
        overflow={"hidden"}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        {/* Slider */}
        <Slider
          {...settings}
          ref={(slider) => setSlider(slider)}
          className={classes["slider"]}
        >
          {cards.map((url, index) => (
            <Box
              key={index}
              height={"8xl"}
              backgroundImage={`linear-gradient(90.11deg, #FFFFFF 34.87%, rgba(255, 255, 255, 0) 75.98%),,url(${url})`}
              className={classes["slider-img"]}
            />
          ))}
        </Slider>
      </Box>
    </section>
  );
};

export default Header;
