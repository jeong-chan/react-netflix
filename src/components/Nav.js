import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }

      return () => {
        window.removeEventListener("scroll", () => {});
      };
    });
  }, []);
  return (
    <nav className={`nav ${show && "nav_black"}`}>
      <img
        alt="Netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
        className="nav__logo"
        onClick={() => window.location.reload()}
      />
      <img
        alt="User logged"
        src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABSRng9DCILQ9QdEdnUqy0I-p9fW1zq058zGlvrBSaEfvdYPeyHuJIXLLQob1IPqvADzQm2fPHuqUUWyJh2WnU2Bn_u0d.jpg?r=655"
        className="nav__avatar"
      />
    </nav>
  );
};

export default Nav;
