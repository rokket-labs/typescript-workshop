import React from "react";

export const Cons = () => {
  return (
    <section>
      <section>
        <h2>Contras</h2>
      </section>
      <section>
        <ul>
          <li>Es una “inversión”</li>
          <li className="fragment fade-in">
            Requiere de una configuración inicial tanto en Node como en Browser
            (Deno tiene soporte out of the box)
          </li>
          <li className="fragment fade-in">
            Librerías con mal tipado puede terminar siendo un dolor de cabeza.
          </li>
        </ul>
      </section>
      <section>
        <p className="fragment fade-in">Microsoft 🔪🔥</p>
      </section>
    </section>
  );
};
