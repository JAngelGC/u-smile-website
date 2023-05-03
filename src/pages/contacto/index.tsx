import Head from "next/head";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactInfo from "@/components/contactPage/ContactInfo";
import LocationMap from "@/components/contactPage/LocationMap";
import CallToAction from "@/components/ui/CallToAction";

import img15 from "../../../public/img/blur/Usmile-fotografia-15.jpg";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>USmile</title>
        <meta
          name="description"
          content="U Smile, ven y conócenos en nuestra dirección Periférico Ecológico, Plaza Arco Lomas 17002-A, 72830 Pue."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="USmile, U Smile, u smile, usmile, clinica dental, clinica, Puebla, dentista Puebla, contacto dentista, contacto, dirección dentista, horario dentista, mapa dentista, consultorio, clinica dental"
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

      <SectionTitle title="Contacto" />
      <ContactInfo />
      <LocationMap />
      <CallToAction
        bgColor="white"
        text="¡Estamos ansiosos de verte en nuestra clínica!"
        imageObj={img15}
      />
    </>
  );
};

export default ContactPage;
