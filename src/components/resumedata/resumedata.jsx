import React from 'react';
import './resumedata.css';
import { useGraphicDiseasesResumen } from '../../hooks/graphicResumen';

const ResumeData = ({ data, diase }) => {
  const summary = useGraphicDiseasesResumen(data);

  if (!summary) return null;

  return (
    <div className="summary-card">
      <h4>Resumen de {diase.name}</h4>
      <p>
        Desde <strong>{summary.initialYear}</strong> hasta <strong>{summary.finalYear}</strong>
      </p>
      <p>
        {summary.trend} un total de <strong>{Math.abs(summary.diff).toFixed(2)}</strong>
        {" "}({summary.percent}%)
      </p>
      <p>
        Valor inicial: {summary.initialValue.toFixed(2)} <br />
        Valor final: {summary.finalValue.toFixed(2)}
      </p>
    </div>
  );
};

export default ResumeData;

