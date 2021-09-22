import React from "react";

import TPose from "../assets/t_pose.gif";

const codeAsync = /* ts */ `const fetchData = async (id: string): Promise<ApiResponse> => {
  const response = await axios.get('/someEndpoint')
  return response.data
}
// (id: string) => Promise<ApiResponse>
`;

const codeWithT = /* ts */ `type AxiosResponse<T> = {
  error: Error,
  data: T
}
// hola
`;

export const Generics = () => {
  return (
    <section>
      <section>
        <h2>Generics</h2>
        <img src={TPose} />
      </section>
      <section>
        <h2>T</h2>
        <img src={TPose} />
      </section>
    </section>
  );
};
