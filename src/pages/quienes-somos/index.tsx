import SectionTitle from "@/components/ui/SectionTitle";
import SectionInfoLarge from "@/components/ui/SectionInfoLarge";
import SectionAdvantages from "@/components/aboutPage/SectionAdvantages";

const aboutPage = () => {
  return (
    <>
      <SectionTitle title="Quiénes somos" />
      <SectionInfoLarge text="Somos un equipo de profesionales que tienen por objetivo, brindarte los mejores servicios odontológicos de la más alta calidad, materiales, ubicación e instalaciones de vanguardia." />
      <SectionAdvantages />
    </>
  );
};

export default aboutPage;
