import classes from "./TreatmentsIntro.module.css";

const TreatmentsIntro: React.FC<{}> = () => {
  return (
    <section className={classes["section-treatments-intro"]}>
      <p>
        En USmile, ofrecemos una amplia variedad de tratamientos dentales para
        ayudar a nuestros pacientes a mantener una sonrisa saludable y hermosa.
      </p>
    </section>
  );
};

export default TreatmentsIntro;
