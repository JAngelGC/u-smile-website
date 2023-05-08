import Head from "next/head";

import SectionTitle from "@/components/ui/SectionTitle";
import FaqAccordion from "@/components/faqPage/FaqAccordion";
import AdvantagesAccordion from "@/components/faqPage/AdvantagesAccordion";
import CallToAction from "@/components/ui/CallToAction";

import img13 from "../../../public/img/Usmile-fotografia-13.jpg";

const FaqPage = () => {
  return (
    <>
      <Head>
        <title>USmile</title>
        <meta
          name="description"
          content="U Smile, nuestro equipo de especialistas altamente capacitado está dispuesto a ayudarte a obtener la sonrisa perfecta."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="USmile, U Smile, u smile, usmile, clinica dental, clinica, Puebla, dentista Puebla, preguntas frecuentes, invisalign"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/ico/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/ico/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/ico/favicon-16x16.png"
        />
        <link rel="manifest" href="/icons/ico/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/icons/ico/safari-pinned-tab.svg"
          color="#5bbad5"
        />
      </Head>

      <SectionTitle title="Preguntas frecuentes" />
      <FaqAccordion />
      <AdvantagesAccordion />
      <CallToAction
        bgColor="green"
        text="Descubre cómo podemos ayudarte a lograr una sonrisa saludable y hermosa"
        imageObj={img13}
        altText={"Usmile Fotografia Preguntas Frecuentes"}
      />
    </>
  );
};

export default FaqPage;
