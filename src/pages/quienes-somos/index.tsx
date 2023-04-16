import SectionTitle from "@/components/ui/SectionTitle";
import SectionInfoLarge from "@/components/ui/SectionInfoLarge";
import SectionAdvantages from "@/components/aboutPage/SectionAdvantages";
import SectionLogo from "@/components/ui/SectionLogo";
import CallToAction from "@/components/ui/CallToAction";

const aboutPage = () => {
  return (
    <>
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
