import React, { useState } from "react";
import "./home.css";
import CountriesList from "../../components/countrieslist/countrieslist";
import Graphic from "../../components/graphic/graphic";

const Home = () => {
    const [selectedCountry, setSelectedCountry] = useState("CO");

    return (
        <>
            <header className="header">
                <h1>Grafica de enfermedades en America Latina</h1>
            </header>

            <main className="main">
                <section className="layout">
                    <article className="sidebar">
                        <CountriesList
                            selectedCountry={selectedCountry}
                            onCountryChange={setSelectedCountry}
                        />
                    </article>

                    <article className="body">
                        <Graphic country={selectedCountry} />
                    </article>
                </section>
            </main>
        </>
    );
};

export default Home;
