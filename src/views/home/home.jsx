import React, { useState } from "react";
import "./home.css";
import CountriesList from "../../components/countrieslist/countrieslist";
import Graphic from "../../components/graphic/graphic";
import DiseasesList from "../../components/diseaseslist/diseaseslist";
import GraphicPeoples from "../../components/graphicpeoples/graphicpeoples";
import ResumeData from "../../components/resumedata/resumedata";

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

    const [data, setData] = useState([]);
    

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
                        data={data}
                        setData={setData}
                    />
                    <div className="years">
                        <button onClick={() => calculatedYear(7)}>7 Años</button>
                        <button onClick={() => calculatedYear(14)}>14 Años</button>
                        <button onClick={() => calculatedYear(25)}>25 Años</button>
                        <button onClick={() => calculatedYear(35)}>35 Años</button>
                    </div>

                    <GraphicPeoples country={selectedCountry} year={selectedYear}/>

                </article>

                <article className="aside-left">
                    <DiseasesList
                        selectedDiase={selectedDiase}
                        onDiaseChange={setselectedDiase}
                    />
                    <ResumeData data={data} diase={selectedDiase} />
                </article>
            </main>
        </>
    );
};

export default Home;
