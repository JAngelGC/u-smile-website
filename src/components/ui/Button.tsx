import classes from "./Button.module.css";

const Button: React.FC<{
  bgColor: string;
  classB?: string;
  linkUrl?: string;
}> = (props) => {
  let classBtn: string = "";

  if (props.bgColor === "green") {
    classBtn = classes["btn--green"];
  }
  if (props.bgColor === "white") {
    classBtn = classes["btn--white"];
  }

  return (
    <a
      href="https://api.whatsapp.com/send?phone=5212228082303"
      className={`${classes["box-btn"]}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className={`${props.classB} ${classes["btn"]} ${classBtn}`}>
        Agenda tu cita
      </button>
    </a>
  );
};

export default Button;
