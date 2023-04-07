import Link from "next/link";

const MainNavigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="#">Quiénes somos</Link>
          </li>
          <li>
            <Link href="#">Tratamientos</Link>
          </li>
          <li>
            <Link href="#">Invisalign</Link>
          </li>
          <li>
            <Link href="#">Preguntas frecuentes</Link>
          </li>
          <li>
            <Link href="#">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
