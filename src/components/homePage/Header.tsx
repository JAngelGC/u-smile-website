import Button from "../ui/Button";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <section className={classes["header"]}>
      <p className={classes["title"]}>
        ¡Obtén la sonrisa perfecta que siempre has querido!
      </p>
      <Button bgColor="green" />

      {/* <Image src={"/img/Smile.png"} fill className={classes["myimg"]} alt="" /> */}
    </section>
  );
};

export default Header;
