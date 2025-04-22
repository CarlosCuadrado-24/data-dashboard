import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';
import { getDataBank } from '../../services/wordbankapi/bankapi';

const Graphic = ({country,diase,year}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDataBank(country,diase.indicator,year);
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
  },[country,diase,year]);

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
