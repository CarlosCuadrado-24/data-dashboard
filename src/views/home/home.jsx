import React, { useState } from "react";
import "./home.css";
import CountriesList from "../../components/countrieslist/countrieslist";
import Graphic from "../../components/graphic/graphic";
import DiseasesList from "../../components/diseaseslist/diseaseslist";

const Home = () => {
  const [selectedCountry, setSelectedCountry] = useState("CO");
  const [selectedDiase, setselectedDiase] = useState({
    name: "VIH",
    indicator: "SH.DYN.AIDS.ZS",
    description: "Prevalencia de VIH (% de población de 15-49 años)",
  });
  const [selectedYear, setselectedYear] = useState(1990);

  const calculatedYear = (year) => {
    const newYear = new Date().getFullYear() - year;
    setselectedYear(newYear);
  };

  return (
    <>
      <main className="main">
        <article className="aside-right">
          <CountriesList
            selectedCountry={selectedCountry}
            onCountryChange={setSelectedCountry}
          />
        </article>

        <article className="body">
          <h2 className='graphic-title'>{selectedDiase.description}</h2>
          <Graphic
            country={selectedCountry}
            diase={selectedDiase}
            year={selectedYear}
          />

          <div className="years">
            <button onClick={() => calculatedYear(7)}>7 Años</button>
            <button onClick={() => calculatedYear(14)}>14 Años</button>
            <button onClick={() => calculatedYear(25)}>25 Años</button>
            <button onClick={() => calculatedYear(30)}>30 Años</button>
          </div>
        </article>

        <article className="aside-right">
          <DiseasesList
            selectedDiase={selectedDiase}
            onDiaseChange={setselectedDiase}
          />
        </article>
      </main>
    </>
  );
};

export default Home;
