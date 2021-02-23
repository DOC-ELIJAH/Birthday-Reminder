import React, { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  const handleClick = () => {
    setPeople([]);
  };
  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} birthdays found</h3>
          <List people={people} />
          <button onClick={handleClick}>clear all</button>
        </section>
      </main>
    </>
  );
};

export default App;
