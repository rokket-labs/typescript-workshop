import React from "react";

const description = "type Description = `${Size}-${Styles}`;";

const code1 = /* ts */ `type Size = "sm" | "md" | "lg";
type Styles = "success" | "warning" | "error";

${description}
// "sm-success" | "sm-warning" | "sm-error"
// | "md-success" | "md-warning" | "md-error"
// | "lg-success" | "lg-warning" | "lg-error"

`;

export const StringLiterals = () => {
  return (
    <section>
      <section>
        <h2>String Literals</h2>
        <pre>
          <code data-line-numbers="1-3|4|5-7">{code1}</code>
        </pre>
      </section>
    </section>
  );
};
