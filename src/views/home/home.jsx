import React from "react";
import "./home.css";
import CountriesList from "../../components/countrieslist/countrieslist";

const Home = () => {
  return (
    <>
      <header className="header">
        <h1>Grafica de enfermedades en America Latina</h1>
      </header>

      <main className="main">
        <section className="layout">
          <article className="sidebar">
            
            <CountriesList></CountriesList>

          </article>
          
          <article className="body">

          </article>
        </section>
      </main>
    </>
  );
};

export default Home;
