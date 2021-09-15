import React from "react";

const Intro = () => <section>Horizontal Slide</section>;

const Vertical = () => (
  <section>
    <section>Vertical Slide 1</section>
    <section>Vertical Slide 2</section>
  </section>
);

const App = () => {
  return (
    <div className="slides">
      <Intro />
      <Vertical />
    </div>
  );
};

export default App;
