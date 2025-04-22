import React from "react";
import "./diseaseslist.css";

const DiseasesList = ({ selectedDiase, onDiaseChange }) => {
  const diases = [
    {
      name: 'VIH',
      indicator: 'SH.DYN.AIDS.ZS',
      description: 'Prevalencia de VIH (% de población de 15-49 años)'
    },
    {
      name: 'Malaria',
      indicator: 'SH.MLR.INCD.P3',
      description: 'Incidencia estimada de malaria (por 1,000 personas en riesgo)'
    },
    {
      name: 'Tuberculosis',
      indicator: 'SH.TBS.INCD',
      description: 'Incidencia de tuberculosis (por 100,000 personas)'
    }
  ];

  return (
    <div className="disease-menu">
      <h4 className="title">Enfermedades</h4>
      <ul className="disease-list">
        {diases.map((diase) => (
          <li
            key={diase.indicator}
            className={`disease-item ${selectedDiase?.indicator === diase.indicator ? 'active' : ''}`}
            onClick={() => onDiaseChange(diase)}
          >
            {diase.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiseasesList;
