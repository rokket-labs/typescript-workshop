import React from "react";

const codeWithError = /* ts */ `const canvas: HTMLCanvasElement = document
    .getElementById('canvas')
// Type 'HTMLElement | null' 
// is not assignable to type 'HTMLCanvasElement'.
`;
const codeWithCasting = /* ts */ `const canvas = document
    .getElementById('canvas') as HTMLCanvasElement 
// No error
`;

const codeWithUnknown = /* ts */ `const test: unknown = "hola"

console.log(test.length) // error
console.log((test as string).length) // No error
`;

export const TypeCasting = () => {
  return (
    <section>
      <section>
        <h2> Type casting</h2>
        <pre>
          <code className="language-ts">{codeWithError}</code>
        </pre>
      </section>
      <section>
        <pre>
          <code className="language-ts">{codeWithCasting}</code>
        </pre>
      </section>
      <section>
        <pre>
          <code className="language-ts" data-line-numbers="1|3|4">
            {codeWithUnknown}
          </code>
        </pre>
      </section>
      <section>type casting no es type-safe</section>
    </section>
  );
};
