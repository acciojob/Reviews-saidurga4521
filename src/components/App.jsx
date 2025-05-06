import React from "react";
import Reviews from "./Reviews";
import "./App.css";
const App = () => {
  return (
    <main>
      <section className="container">
        <h1 id="review-heading">Our Reviews</h1>
        <Reviews />
      </section>
    </main>
  );
};

export default App;
