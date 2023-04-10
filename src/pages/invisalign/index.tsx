import SectionTitle from "@/components/ui/SectionTitle";
import SectionInfoLarge from "@/components/ui/SectionInfoLarge";
import SectionInfo from "@/components/ui/SectionInfo";
import CallToAction from "@/components/ui/CallToAction";

const InvisalignPage = () => {
  return (
    <>
      <SectionTitle title="Invisalign" />
      <SectionInfoLarge
        title="La mejor tecnología en Puebla"
        text="Uno de los tratamientos más populares en nuestra clínica es el sistema Invisalign, que ofrece una alternativa discreta y cómoda a los brackets y alambres tradicionales."
      />
      <SectionInfo
        textSide="right"
        title="Personalización"
        text="Nuestro equipo de ortodoncistas altamente capacitados y experimentados trabaja en estrecha colaboración con cada paciente para diseñar un plan de tratamiento personalizado que aborde sus necesidades únicas."
      />
      <SectionInfo
        textSide="left"
        title="Comodidad"
        text="En U Smile, creemos que la comodidad del paciente es una parte integral de cualquier tratamiento de ortodoncia exitoso. Los alineadores Invisalign son removibles, lo que permite una mayor comodidad y una higiene bucal más fácil durante el tratamiento"
      />
      <SectionInfo
        textSide="right"
        title="Apariencia"
        text="Debido a que los alineadores son transparentes, los pacientes pueden continuar con su vida diaria sin tener que preocuparse por la apariencia de sus brackets y alambres."
      />
      <CallToAction
        bgColor="white"
        text="Descubre cómo podemos ayudarte a lograr una sonrisa saludable y hermosa"
      />
    </>
  );
};

export default InvisalignPage;
