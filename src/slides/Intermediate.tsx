import React from "react";

const code1 = /* ts */ `function square(n) {
    return n ** 2
}
// (n: any) => any
`;

const code2 = /* ts */ `function square(n: number) {
    return n ** 2
}
// (n: number) => number
`;

const code3 = /* ts */ `function square(n: number): number {
    return n ** 2
}
// (n: number) => number
`;

const code4 = /* ts */ `const square = (n: number): number => {
    return n ** 2
}
// (n: number) => number
`;

const codeWithProps = /* ts*/ `type MyComponentProps = {
    nickname: string,
    age: number
};

const MyComponent = ({nickname, age}: MyComponentProps) => {
    return (
        <p>{nickname} - {age}<p>
    )
}
`;

const codeWithKeyOf = /* ts*/ `type MyComponentProps = {
  nickname: string;
  age: number;
};

type PropsKeys = keyof MyComponentProps;
const key1: PropsKeys = "nickname"; // No error
const key2: PropsKeys = "nicknames"; //  ERROR
`;

const codeWithObjectIndexed = /* ts */ `const musicos = {
    marcianeke: {
        age: 19,
        genre: 'reggaeton'
    },
    'Calvin Harris': {
        age: 37,
        genre: 'EDM'
    },
    'Dave Grohl': {
        age: 52,
        genre: 'rock'
    }
}
`;

const codeWithRecord = /* ts */ `type Musico = {
    age: number;
    genre: string;
}

const musicos: Record<string, Musico> = {
 /* ... */
}
`;

const codeClasses = /* ts */ `const date: Date = new Date()

class Foo {
  x: number;
  constructor(x: number) {
    this.x = x;
  }

  square() {
    return this.x ** 2;
  }
}

const bar: Foo = new Foo(3);
const nueve: number = bar.square(); // 9
const x = bar.x // 3
`;

const codeClassesWithPrivateFields = /* ts */ `class Foo {
  #x: number;
  constructor(x: number) {
    this.#x = x;
  }

  square() {
    return this.#x ** 2;
  }
}

const bar: Foo = new Foo(3);
const nueve: number = bar.square();
const x = bar.#x // Uncaught SyntaxError: Private field '#x' must be declared in an enclosing class
`;

const extendingClass = /* ts */ `class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

interface ExtendedPoint extends Point {
  sum(): number;
}
`;

const interfaceWithClass = /* ts */ `class Point2 implements ExtendedPoint {
  constructor(private x: number, private y: number) {}
  length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
  sum() {
    return this.x + this.y;
  }
}
`;

const overridding = /* ts */ `interface Animal {
  name: string;
}

interface Animal {
  family: string;
}

// { name: string; name: family }
`;

export const Intermediate = () => {
  return (
    <section>
      <section>
        <h2>Funciones, Clases y Objetos</h2>
      </section>

      <section>
        <h2>Funciones</h2>
        <pre>
          <code>{code1}</code>
        </pre>
      </section>
      <section>
        <pre>
          <code>{code2}</code>
        </pre>
      </section>
      <section>
        <pre>
          <code>{code3}</code>
        </pre>
      </section>
      <section>
        <pre>
          <code>{code4}</code>
        </pre>
      </section>

      <section>
        <h2>Clases</h2>
        <pre>
          <code className="language-ts" data-line-numbers="1|3-12|14|15-16">
            {codeClasses}
          </code>
        </pre>
      </section>
      <section>
        <pre>
          <code className="language-ts" data-line-numbers="1-10|12|13|14">
            {codeClassesWithPrivateFields}
          </code>
        </pre>
      </section>

      <section>
        <h2>Objetos</h2>
        <pre>
          <code className="language-tsx">{codeWithProps}</code>
        </pre>
      </section>

      <section>
        Utilizando keys del objeto
        <pre>
          <code className="language-tsx" data-line-numbers="1-6|7|8">
            {codeWithKeyOf}
          </code>
        </pre>
      </section>

      <section>
        <h2> "type" vs "interface"</h2>
        <ul>
          <li>Sintáxis distinta</li>
          <li className="fragment fade-in">
            interface no puede representar primitivos
          </li>
          <li className="fragment fade-in">interface se puede sobreescribir</li>
          <li className="fragment fade-in">
            interface puede extenderse de clases
          </li>
        </ul>
      </section>
      <section>
        Sobreescribiendo
        <pre>
          <code className="language-tsx" data-line-numbers="1-3|4-7|9">
            {overridding}
          </code>
        </pre>
      </section>
      <section>
        Extendiendo clases
        <pre>
          <code className="language-tsx" data-line-numbers="1-11|13-15">
            {extendingClass}
          </code>
        </pre>
      </section>
      <section>
        Uso en clases
        <pre>
          <code className="language-tsx">{interfaceWithClass}</code>
        </pre>
      </section>
      <section>Volviendo a objetos...</section>
      <section>
        <p> ¿Y si no sabemos cuál va a ser el key pero sí el value?</p>
        <pre className="fragment fade-in">
          <code className="language-ts">{codeWithObjectIndexed}</code>
        </pre>
      </section>
      <section>
        <pre>
          <code className="language-ts">{codeWithRecord}</code>
        </pre>
      </section>
    </section>
  );
};
