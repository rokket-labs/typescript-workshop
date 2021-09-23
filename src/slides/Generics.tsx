import React from "react";

import TPose from "../assets/t_pose.gif";

const codeAsync = /* ts */ `const fetchData = async (id: string): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>(
    '/someEndpoint',
    { id }
    )
  return response.data
}
// (id: string) => Promise<ApiResponse>
`;

const codeWithT = /* ts */ `type AxiosResponse<T> = {
  error: Error,
  data: T
}
`;

const codeWithoutT = /* ts */ `type AxiosResponse<ApiResponse> = {
  error: Error,
  data: ApiResponse
}
`;

const codeReact = /* ts */ `type MyComponentProps = {
  name: string
}

const MyComponent: FC<MyComponentProps> = ({ name }) => {
  return <p>{name}</p>
}
`;

const codeUsingComponent = /* ts */ `// Error
const WrongType: FC = () => {
  return <MyComponent name={5} />
}

// No error
const CorrectType: FC = () => {
  return <MyComponent name={"5"} />
}
`;

const codeExtendingGeneric = /* ts */ `type HasLength = {
  length: number;
};

const getLength = <T extends HasLength>(variable: T) => {
  return variable.length;
};
`;

const codeUsingExtended = /* ts */ `const arrayLength = getLength(array)
const stringLength = getLength("hola")
`;

const codeWithoutExtending = /* ts */ `const getLength = (variable: HasLength) => {
  return variable.length;
};
`;

const codeUsingExtendedAgain = /* ts */ `type WeirdFunctionReturn<T> = {
   original: T;
   isEmpty: boolean;
};

const weirdFunction = <T extends HasLength>(
  variable: T
): WeirdFunctionReturn<T> => {
  const isEmpty = variable.length > 0;
  return { original: variable, isEmpty };
};

const arrayLength = weirdFunction(array); 
// {original: array, isEmpty: false}
const stringLength = weirdFunction("hola");
// {original: "hola", isEmpty: false}
`;

const codeWithUtilities = /* ts */ `type Car = {
  brand: string;
  model: string;
  year: number;
};

type OnlyBrand = Pick<Car, "brand">;
// { brand: string }
type WithoutYear = Omit<Car, "year">;
// { brand: string; model string }
`;

export const Generics = () => {
  return (
    <section>
      <section>
        <h2>Generics</h2>
        <img src={TPose} />
      </section>
      <section>
        <h2>"T" type</h2>
        <pre>
          <code>{codeWithT}</code>
        </pre>
      </section>
      <section>
        <pre>
          <code>{codeWithoutT}</code>
        </pre>
      </section>
      <section>
        <pre>
          <code>{codeAsync}</code>
        </pre>
      </section>
      <section>
        <pre>
          <code className="language-tsx" data-line-numbers="1-3|5-7">
            {codeReact}
          </code>
        </pre>
      </section>
      <section>
        <pre>
          <code className="language-tsx" data-line-numbers="1-4|6-9">
            {codeUsingComponent}
          </code>
        </pre>
      </section>
      <section>
        <pre>
          <code className="language-ts" data-line-numbers="1-4|5-9">
            {codeExtendingGeneric}
          </code>
        </pre>
      </section>
      <section>
        Sin errores
        <pre>
          <code className="language-ts" data-line-numbers="1-4|5-9">
            {codeUsingExtended}
          </code>
        </pre>
      </section>
      <section>
        Es necesario usar generics en este caso?
        <pre>
          <code
            className="fragment fade-in language-ts"
            data-line-numbers="1-4|5-9"
          >
            {codeWithoutExtending}
          </code>
        </pre>
      </section>
      <section>
        Utilizando generics
        <pre>
          <code className="language-tsx" data-line-numbers="1-4|6-11|13-16">
            {codeUsingExtendedAgain}
          </code>
        </pre>
      </section>

      <section>
        <pre>
          <code className="language-ts" data-line-numbers="1-5|7-8|9-10">
            {codeWithUtilities}
          </code>
        </pre>
      </section>
    </section>
  );
};
