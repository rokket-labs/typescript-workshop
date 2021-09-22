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

const codeReact = /* ts */ `type MyTypedComponentProps = {
  name: string
}

const MyTypedComponent: FC<MyTypedComponentProps> = ({ name }) => {
  return <p>{name}</p>
}
`;

const codeUsingComponent = /* ts */ `// Error
const WrongType: FC = () => {
  return <MyTypedComponent name={5} />
}

// No error
const CorrectType: FC = () => {
  return <MyTypedComponent name={"5"} />
}
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
    </section>
  );
};
