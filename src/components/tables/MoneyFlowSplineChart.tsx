import React from 'react';
import {
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from 'recharts';

export default function MoneyFlowSplineChart(): JSX.Element {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      amt: 2100,
    },
  ];
  return (
    <AreaChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="uv"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
    </AreaChart>
  );
}
