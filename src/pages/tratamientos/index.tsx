import Head from "next/head";
import SectionTitle from "@/components/ui/SectionTitle";
import TreatmentsIntro from "@/components/treatmentsPage/TreatmentsIntro";
import TreatmentsAccordion from "@/components/treatmentsPage/TreatmentsAccordion";
import CallToAction from "@/components/ui/CallToAction";

import img7 from "../../../public/img/Usmile-fotografia-7.jpg";

const TreatmentsPage = () => {
  return (
    <>
      <Head>
        <title>USmile</title>
        <meta
          name="description"
          content="U Smile, En USmile, ofrecemos una amplia variedad de tratamientos dentales para ayudar a nuestros pacientes a mantener una sonrisa saludable y hermosa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="USmile, U Smile, u smile, usmile, clinica dental, clinica, Puebla, dentista Puebla, odontologia, ortodoncia, implantes dentales, blanquemiento dental, estetica dental"
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
      <SectionTitle title="Tratamientos" />
      <TreatmentsIntro />
      <TreatmentsAccordion />
      <CallToAction
        bgColor="green"
        text="Estamos ansiosos por ayudarte a lograr una sonrisa saludable y hermosa"
        imageObj={img7}
        altText={"Usmile Fotografia Sonrisa Saludable y Hermosa"}
      />
    </>
  );
};

export default TreatmentsPage;
