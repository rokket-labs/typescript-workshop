import React from "react";

export const Code = () => {
  return (
    <section>
      <h1>Typescript</h1>
      <pre>
        <code>
          {`sealed class Either<out A, out B> {
              data class Left<out A>(val a: A) : Either<A, Nothing>()
              data class Right<out B>(val b: B) : Either<Nothing, B>()
            }`}
        </code>
      </pre>
    </section>
  );
};
