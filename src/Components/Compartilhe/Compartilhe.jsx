import React from "react";
import S from "./Compartilhe.module.css";

const Compartilhe = () => {
  return (
    <section className={S.share}>
      <p>
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha
        agora!
      </p>
      <form>
        <div>
          <label>Nome do seu amigo:</label>
          <input type="text" />
        </div>
        <div>
          <label>E-mail:</label>
          <input type="email" />
        </div>
      </form>
      <button>Enviar agora</button>
    </section>
  );
};

export default Compartilhe;
