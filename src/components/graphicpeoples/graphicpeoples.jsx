import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getDataBankTotalPeoples } from '../../services/wordbankapi/bankapi';

const GraphicPeoples = ({ country, year }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPopulationData = async () => {
      try {
        const response = await getDataBankTotalPeoples(country, year);
        const rawData = response.data[1];

        const processedData = rawData
          .filter(entry => entry.value !== null)
          .map(entry => ({
            year: entry.date,
            population: entry.value
          }))
          .sort((a, b) => a.year - b.year);

        setData(processedData);
      } catch (error) {
        console.error('Error al obtener datos de población:', error);
      }
    };

    fetchPopulationData();
  }, [country, year]);

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <BarChart data={data}
        margin={{ left: 30}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="population" fill="#8884d8" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphicPeoples;
