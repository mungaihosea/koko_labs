"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Friday 19",
    transactions: 4000,
    income: 3000,
    savings: 2300,
    expenses: 2000
  },
  {
    name: "Saturday 20",
    transactions: 2000,
    income: 1000,
    savings: 300,
    expenses: 2200
  },
  {
    name: "Sunday 21",
    transactions: 200,
    income: 1200,
    savings: 3000,
    expenses: 200
  },
  
];

export default function Charts() {
  return (
    <ResponsiveContainer width="95%" height={400}>

      <LineChart
        // width={1000}
        // height={300}
        data={data}
        margin={{
          top: 30,
          right: 5,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }}/> */}
        <Line type="monotone" dataKey="transactions" stroke="#82ca9d" />
        <Line type="monotone" dataKey="income" stroke="#8884d8" />
        <Line type="monotone" dataKey="expenses" stroke="#99984d8" />
        <Line type="monotone" dataKey="savings" stroke="#66ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
