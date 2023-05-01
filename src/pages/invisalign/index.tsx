import Head from "next/head";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionInfoLarge from "@/components/ui/SectionInfoLarge";
import SectionInfo from "@/components/ui/SectionInfo";
import CallToAction from "@/components/ui/CallToAction";

import img8 from "../../../public/img/blur/Usmile-fotografia-8.jpg";
import img9 from "../../../public/img/blur/Usmile-fotografia-9.png";
import img10 from "../../../public/img/blur/Usmile-fotografia-10.png";
import img11 from "../../../public/img/blur/Usmile-fotografia-11.png";
import img12 from "../../../public/img/blur/Usmile-fotografia-12.jpg";

const InvisalignPage = () => {
  return (
    <>
      <Head>
        <title>USmile</title>
        <meta
          name="description"
          content="U Smile, uno de los tratamientos más populares en nuestra clínica es el sistema Invisalign, que ofrece una alternativa discreta y cómoda a los brackets y alambres tradicionales."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="USmile, U Smile, u smile, usmile, clinica dental, clinica, Puebla, dentista Puebla, Invisalign, invisalign, personalizacion, ortodoncistas capacitados, comodidad del paciente"
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

      <SectionTitle title="Invisalign" />
      <SectionInfoLarge
        title="La mejor tecnología en Puebla"
        text="Uno de los tratamientos más populares en nuestra clínica es el sistema Invisalign, que ofrece una alternativa discreta y cómoda a los brackets y alambres tradicionales."
        imagePath="/img/Usmile-fotografia-11.png"
        imageBlurPath={img11}
      />
      <SectionInfo
        textSide="right"
        title="Personalización"
        text="Nuestro equipo de ortodoncistas altamente capacitados y experimentados trabaja en estrecha colaboración con cada paciente para diseñar un plan de tratamiento personalizado que aborde sus necesidades únicas."
        imagePath="/img/Usmile-fotografia-9.png"
        imageBlurPath={img9}
      />
      <SectionInfo
        textSide="left"
        title="Comodidad"
        text="En U Smile, creemos que la comodidad del paciente es una parte integral de cualquier tratamiento de ortodoncia exitoso. Los alineadores Invisalign son removibles, lo que permite una mayor comodidad y una higiene bucal más fácil durante el tratamiento"
        imagePath="/img/Usmile-fotografia-10.png"
        imageBlurPath={img10}
      />
      <SectionInfo
        textSide="right"
        title="Apariencia"
        text="Debido a que los alineadores son transparentes, los pacientes pueden continuar con su vida diaria sin tener que preocuparse por la apariencia de sus brackets y alambres."
        imagePath="/img/Usmile-fotografia-8.jpg"
        imageBlurPath={img8}
      />
      <CallToAction
        bgColor="white"
        text="Descubre cómo podemos ayudarte a lograr una sonrisa saludable y hermosa"
        imagePath="/img/Usmile-fotografia-12.jpg"
        imageBlurPath={img12}
      />
    </>
  );
};

export default InvisalignPage;
