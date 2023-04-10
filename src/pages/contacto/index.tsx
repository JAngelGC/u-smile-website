import SectionTitle from "@/components/ui/SectionTitle";
import ContactInfo from "@/components/contactPage/ContactInfo";
import LocationMap from "@/components/contactPage/LocationMap";

const ContactPage = () => {
  return (
    <>
      <SectionTitle title="Contacto" />
      <ContactInfo />
      <LocationMap />
    </>
  );
};

export default ContactPage;
