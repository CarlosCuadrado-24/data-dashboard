import { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';
import { getDataBankDiseases } from '../../services/wordbankapi/bankapi';

const Graphic = ({country,diase,year,data,setData}) => {
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDataBankDiseases(country,diase.indicator,year);
        console.log(response);
        const rawData = response.data[1];

        const processedData = rawData
          .filter(entry => entry.value !== null)
          .map(entry => ({
            year: entry.date,
            value: entry.value,
          }))
          .sort((a, b) => a.year - b.year);

        setData(processedData);
      } catch (error) {
        console.error('Error al obtener datos del World Bank:', error);
      }
    };

    fetchData();
  },[country,diase,year,setData]);

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graphic;
