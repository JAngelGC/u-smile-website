import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/homePage/Header";
import SectionLogo from "@/components/ui/SectionLogo";
import SectionInfo from "@/components/ui/SectionInfo";
import Treatments from "@/components/homePage/Treatments";
import CallToAction from "@/components/ui/CallToAction";

export default function Home() {
  return (
    <>
      <Head>
        <title>USmile</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <Header />
        <SectionLogo />
        <SectionInfo
          textSide="left"
          title="Sonríe con confianza"
          text="En USmile nos especializamos en ofrecer tratamientos de ortodoncia modernos y de alta calidad a través de alineadores invisibles en un ambiente amigable y acogedor."
        />
        <SectionInfo
          textSide="right"
          title="Nuestro equipo"
          text="Contamos con dentistas altamente capacitados y experimentados están comprometidos con la excelencia en el cuidado dental y la atención al paciente."
        />
        <SectionInfo
          textSide="left"
          title="Cada paciente"
          text="Trabajamos juntos para desarrollar un plan de tratamiento personalizado que satisfaga sus objetivos de tu salud bucal"
        />

        <Treatments />

        <CallToAction
          bgColor="green"
          text="Comienza tu viaje hacia una sonrisa hermosa y saludable"
        />
      </section>
    </>
  );
}
