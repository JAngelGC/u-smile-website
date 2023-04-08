import classes from "./SectionTitle.module.css";

const SectionTitle: React.FC<{ title: string }> = (props) => {
  return (
    <section className={classes["section-title"]}>
      <h1>{props.title}</h1>
      <hr />
    </section>
  );
};

export default SectionTitle;
