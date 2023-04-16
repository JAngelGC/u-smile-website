import SectionTitle from "@/components/ui/SectionTitle";
import TreatmentsIntro from "@/components/treatmentsPage/TreatmentsIntro";
import TreatmentsAccordion from "@/components/treatmentsPage/TreatmentsAccordion";
import CallToAction from "@/components/ui/CallToAction";

const TreatmentsPage = () => {
  return (
    <>
      <SectionTitle title="Tratamientos" />
      <TreatmentsIntro />
      <TreatmentsAccordion />
      <CallToAction
        bgColor="green"
        text="Estamos ansiosos por ayudarte a lograr una sonrisa saludable y hermosa"
        imagePath="/img/Usmile-fotografia-7.jpg"
      />
    </>
  );
};

export default TreatmentsPage;
