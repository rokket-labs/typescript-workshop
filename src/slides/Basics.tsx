import React from "react";
import styled from "styled-components";

const code1 = /* ts */ `const numberExample: number = 3
const stringExample: string = "hello"
const booleanExample: boolean = false
const symbolExample: symbol = Symbol()
const bigIntExample: bigint = BigInt(42)
const undefinedExample: undefined = undefined
const nullExample: null = null
`;

const code2 = /* ts */ `const numberExample: number = new Number(3)
const stringExample: string = new String("hello")
const booleanExample: boolean = new Boolean(false)
// Los siguientes primitivos no necesitan el keyword "new"
const symbolExample: symbol = Symbol()
const bigIntExample: bigint = BigInt(42)
`;

const code3 = /* ts */ `const numbersArray: number[] = [1, 2, 3, 4]
const stringsArray: string[] = ["Hello", "World", "!"]
const booleansArray: boolean[] = [true, true, false]
`;

const code4 = /* ts */ `const lengthEqualToOne: [number] = [1]
const location: [number, number] = [1.22244, -2.33232]
const tupleNameAge: [string, number] = ["Gabriel", 23]
`;

const code5 = /* ts */ `const desconocido: unknown = ["Watermelon Sugar"]
const cualquiera: any = "high!"

// Sin errores
console.log(cualquiera.length)
// Error: Object is of type 'unknown'.
console.log(desconocido.length) 
`;

const code6 = /* ts */ `const isString = typeof desconocido === "string"
const isArray = Array.isArray(desconocido)

if (isString || isArray) {
  // Sin errores, incluso infiere el type de length (number)
  console.log(desconocido.length) 
}
`;

const Highlighted = styled.span`
  font-style: italic;
  background-color: #333;
`;

export const Basics = () => {
  return (
    <section>
      <section>
        <h2>Primitivos</h2>
        <pre>
          <code data-line-numbers="1-3|4|5|6-7">{code1}</code>
        </pre>
      </section>
      <section>
        <h2>No confundir</h2>
        <pre>
          <code data-line-numbers="1-3|4-6">{code2}</code>
        </pre>
      </section>
      <section>
        <h2>Arrays</h2>
        <pre>
          <code>{code3}</code>
        </pre>
      </section>
      <section>
        <h2>No confundir</h2>
        <pre>
          <code data-line-numbers="1|2|3">{code4}</code>
        </pre>
      </section>
      <section>
        <h2>any vs unknown</h2>
        <ul>
          <li className="fragment fade-in">Top Level types</li>
          <li className="fragment fade-in">
            Cualquier valor puede ser asignado como{" "}
            <Highlighted>any</Highlighted> o <Highlighted>unknown</Highlighted>
          </li>
          <li className="fragment fade-in">
            Una variable <Highlighted>any</Highlighted> puede asignarse a
            cualquier type{" "}
          </li>
          <li className="fragment fade-in">
            Una variable <Highlighted>unknown</Highlighted> debe tener algún tipo
            de check para asignarse a otro type
          </li>
        </ul>
      </section>
      <section>
        <p>unknown es type-safe</p>
      </section>
      <section>
        <pre>
          <code className="language-ts">{code5}</code>
        </pre>
      </section>
      <section>
        <pre>
          <code>{code6}</code>
        </pre>
      </section>
    </section>
  );
};
