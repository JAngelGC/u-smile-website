import SectionTitle from "@/components/ui/SectionTitle";
import TreatmentsIntro from "@/components/treatmentsPage/TreatmentsIntro";
import TreatmentsAccordion from "@/components/treatmentsPage/TreatmentsAccordion";

const TreatmentsPage = () => {
  return (
    <>
      <SectionTitle title="Tratamientos" />
      <TreatmentsIntro />
      <TreatmentsAccordion />
    </>
  );
};

export default TreatmentsPage;
