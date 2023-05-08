import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/homePage/Header";
import SectionLogo from "@/components/ui/SectionLogo";
import SectionInfo from "@/components/ui/SectionInfo";
import Treatments from "@/components/homePage/Treatments";
import CallToAction from "@/components/ui/CallToAction";

import img1 from "../../public/img/Usmile-fotografia-1.png";
import img2 from "../../public/img/Usmile-fotografia-2.png";
import img3 from "../../public/img/Usmile-fotografia-3.png";
import img4 from "../../public/img/Usmile-fotografia-4.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>USmile</title>
        <meta
          name="description"
          content="U Smile, somos una clínica ubicada en Puebla dedicada a la salud dental, especializada en odontopediatría y ortodoncia."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="USmile, U Smile, u smile, usmile, clinica dental, clinica, Puebla, dentista Puebla, odontopediatría, ortodoncia, ortodoncia moderna, dentista de confianza, alineacion dental, reconstruccion dental, implantes dentales, blanqueamiento dental"
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

      <section>
        <Header />
        <SectionLogo />
        <SectionInfo
          textSide="right"
          title="Sonríe con confianza"
          text="En USmile nos especializamos en ofrecer tratamientos de ortodoncia modernos y de alta calidad a través de alineadores invisibles en un ambiente amigable y acogedor."
          imageObj={img1}
          altText={"Usmile Fotografia Sonrie Con Confianza"}
        />
        <SectionInfo
          textSide="left"
          title="Nuestro equipo"
          text="Contamos con dentistas altamente capacitados y experimentados están comprometidos con la excelencia en el cuidado dental y la atención al paciente."
          imageObj={img2}
          altText={"Usmile Fotografia Nuestro Equipo"}
        />
        <SectionInfo
          textSide="right"
          title="Cada paciente"
          text="Trabajamos juntos para desarrollar un plan de tratamiento personalizado que satisfaga sus objetivos de tu salud bucal"
          imageObj={img3}
          altText={"Usmile Fotografia Paciente"}
        />

        <Treatments />

        <CallToAction
          bgColor="green"
          text="Comienza tu viaje hacia una sonrisa hermosa y saludable"
          imageObj={img4}
          altText={"Usmile Fotografia Sonrisa Hermosa"}
        />
      </section>
    </>
  );
}
