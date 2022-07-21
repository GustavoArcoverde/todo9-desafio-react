import React from "react";
import S from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={S.gambiarra}>
      <footer className={S.footer}>
        <section className={S.content}>
          <p>Testando suas habilidades em HTML, CSS e JS.</p>
          <p>Linx Impulse</p>
          <p>2019</p>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
