import SectionTitle from "@/components/ui/SectionTitle";
import ContactInfo from "@/components/contactPage/ContactInfo";
import LocationMap from "@/components/contactPage/LocationMap";
import CallToAction from "@/components/ui/CallToAction";

const ContactPage = () => {
  return (
    <>
      <SectionTitle title="Contacto" />
      <ContactInfo />
      <LocationMap />
      <CallToAction
        bgColor="white"
        text="¡Estamos ansiosos de verte en nuestra clínica!"
        imagePath="/img/Usmile-fotografia-15.jpg"
      />
    </>
  );
};

export default ContactPage;
