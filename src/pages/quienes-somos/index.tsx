import Head from "next/head";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionInfoLarge from "@/components/ui/SectionInfoLarge";
import SectionAdvantages from "@/components/aboutPage/SectionAdvantages";
import SectionLogo from "@/components/ui/SectionLogo";
import CallToAction from "@/components/ui/CallToAction";

const aboutPage = () => {
  return (
    <>
      <Head>
        <title>USmile</title>
        <meta
          name="description"
          content="U Smile, somos un equipo de profesionales que tienen por objetivo, brindarte los mejores servicios odontológicos de la más alta calidad, materiales, ubicación e instalaciones de vanguardia."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="USmile, U Smile, u smile, usmile, clinica dental, clinica, Puebla, dentista Puebla, dentista de confianza, Invisalign, tratamiento dental, sonrisa perfecta"
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

      <SectionTitle title="Quiénes somos" />
      <SectionInfoLarge
        text="Somos un equipo de profesionales que tienen por objetivo, brindarte los mejores servicios odontológicos de la más alta calidad, materiales, ubicación e instalaciones de vanguardia."
        imagePath="/img/Usmile-fotografia-5.jpg"
      />
      <SectionAdvantages />
      <SectionLogo text="En U Smile, tenemos un compromiso contigo, ofrecerte un tratamiento con el que te sientas cómodo y diseñado perfectamente a la medida para ti" />
      <CallToAction
        bgColor="white"
        text="Descubre cómo podemos ayudarte a lograr una sonrisa saludable y hermosa"
        imagePath="/img/Usmile-fotografia-6.jpg"
      />
    </>
  );
};

export default aboutPage;
