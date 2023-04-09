import Link from "next/link";
import Image from "next/image";
import classes from "./MainNavigation.module.css";

import { useRouter } from "next/router";
import { useState } from "react";

const MainNavigation = () => {
  const router = useRouter();

  const linkSelected = (path: string): boolean => {
    if (router.route.includes(path)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <header className={classes["header"]}>
      <div className={classes["box-img-logo"]}>
        <Link href="/">
          <Image
            src={"/img/Usmile-logo.png"}
            fill
            style={{ objectFit: "contain" }}
            alt=""
          />
        </Link>
      </div>
      <nav className={classes["navbar"]}>
        <ul className={classes["menu"]}>
          <li className={linkSelected("/quienes-somos") ? classes.active : ""}>
            <Link href="/quienes-somos">Quiénes somos</Link>
          </li>
          <li className={linkSelected("/tratamientos") ? classes.active : ""}>
            <Link href="/tratamientos">Tratamientos</Link>
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
