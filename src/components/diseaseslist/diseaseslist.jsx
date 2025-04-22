import React from "react";
import "./diseaseslist.css";
import { ListBox } from 'primereact/listbox';
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
  ]

  const diaseTemplate = (option) => {
    return (
      <div className="flex align-items-center">
        <p>{option.name}</p>
      </div>
    );
  };

  return (
    <div className="card flex justify-content-center">
      <ListBox
        value={selectedDiase}
        onChange={(e) => {
          const selected = e.value;
          onDiaseChange({
            name: selected.name,
            indicator: selected.indicator,
            description: selected.description
          });
        }}
        options={diases}
        optionLabel="name"
        itemTemplate={diaseTemplate}
        className="listboxdieses"
        listStyle={{ maxHeight: '250px' }}
      />
    </div>
  );
};

export default DiseasesList;