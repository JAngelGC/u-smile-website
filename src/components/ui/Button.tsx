import classes from "./Button.module.css";

const Button: React.FC<{ bgColor: string; classB?: string }> = (props) => {
  let classBtn: string = "";

  if (props.bgColor === "green") {
    classBtn = classes["btn--green"];
  }
  if (props.bgColor === "white") {
    classBtn = classes["btn--white"];
  }

  return (
    <a href="#" className={`${classes["box-btn"]}`}>
      <button className={`${props.classB} ${classes["btn"]} ${classBtn}`}>
        Agenda tu cita
      </button>
    </a>
  );
};

export default Button;
