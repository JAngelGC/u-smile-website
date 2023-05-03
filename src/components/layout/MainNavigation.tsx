import Link from "next/link";
import Image from "next/image";
import classes from "./MainNavigation.module.css";

import { useRouter } from "next/router";
import { useState } from "react";

import imgLogo from "../../../public/img/Usmile-logo.png";

const MainNavigation = () => {
  const router = useRouter();

  const linkSelected = (path: string): boolean => {
    if (router.route.includes(path)) {
      return true;
    } else {
      return false;
    }
  };

  const [toggleNav, setToggleNav] = useState(false);

  const toggleNavHandler = () => {
    setToggleNav((prevStateNav) => !prevStateNav);
  };

  const hiddeNavHandler = () => {
    setToggleNav(false);
  };

  const classHeader = toggleNav ? `${classes["nav-open"]}` : "";

  return (
    <header className={`${classes["header"]} ${classHeader}`}>
      <div className={classes["box-img-logo"]}>
        <Link href="/">
          <Image
            src={imgLogo}
            fill
            style={{ objectFit: "contain" }}
            placeholder="blur"
            alt=""
          />
        </Link>
      </div>
      <nav className={classes["navbar"]}>
        <ul className={classes["menu"]}>
          {/* This is the link only for mobile */}
          <li onClick={hiddeNavHandler}>
            <div className={classes["link-logo"]}>
              <Link href="/">
                <Image
                  src={imgLogo}
                  fill
                  style={{ objectFit: "contain" }}
                  placeholder="blur"
                  alt=""
                />
              </Link>
            </div>
          </li>
          <li
            onClick={hiddeNavHandler}
            className={linkSelected("/quienes-somos") ? classes.active : ""}
          >
            <Link href="/quienes-somos">Quiénes somos</Link>
          </li>
          <li
            onClick={hiddeNavHandler}
            className={linkSelected("/tratamientos") ? classes.active : ""}
          >
            <Link href="/tratamientos">Tratamientos</Link>
          </li>
          <li
            onClick={hiddeNavHandler}
            className={linkSelected("/invisalign") ? classes.active : ""}
          >
            <Link href="/invisalign">Invisalign</Link>
          </li>
          <li
            onClick={hiddeNavHandler}
            className={
              linkSelected("/preguntas-frecuentes") ? classes.active : ""
            }
          >
            <Link href="/preguntas-frecuentes">Preguntas frecuentes</Link>
          </li>
          <li
            onClick={hiddeNavHandler}
            className={linkSelected("/contacto") ? classes.active : ""}
          >
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>

      {/* Button for open and close the nav bar */}
      <button className={classes["btn-mobile-nav"]} onClick={toggleNavHandler}>
        <svg
          className={`${classes["icon-mobile-nav"]} ${classes["menu-outline"]}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>

        <svg
          className={`${classes["icon-mobile-nav"]} ${classes["close-outline"]}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
        </svg>
      </button>
    </header>
  );
};

export default MainNavigation;
