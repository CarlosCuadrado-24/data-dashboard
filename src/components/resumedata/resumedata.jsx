import React from 'react';
import './resumedata.css';
import { useGraphicDiseasesResumen } from '../../hooks/graphicResumen';
import { TrendingUp, TrendingDown } from 'lucide-react';

const ResumeData = ({ data, diase }) => {
  const summary = useGraphicDiseasesResumen(data);

  if (!summary) return null;

  const isIncrease = summary.trend === 'aumentó';
  const TrendIcon = isIncrease ? TrendingUp : TrendingDown;

  return (
    <div className="summary-card">
      <h4>Resumen de {diase.name}</h4>
      <p className="year-range">
        Desde <strong>{summary.initialYear}</strong> hasta <strong>{summary.finalYear}</strong>
      </p>
      <div className={`trend ${isIncrease ? 'increase' : 'decrease'}`}>
        <TrendIcon size={20} />
        <span>
          {summary.trend} un total de <strong>{Math.abs(summary.diff).toFixed(2)}</strong> ({summary.percent}%)
        </span>
      </div>
      <div className="values">
        <p>Valor inicial: <strong>{summary.initialValue.toFixed(2)}</strong></p>
        <p>Valor final: <strong>{summary.finalValue.toFixed(2)}</strong></p>
      </div>
    </div>
  );
};

export default ResumeData;


