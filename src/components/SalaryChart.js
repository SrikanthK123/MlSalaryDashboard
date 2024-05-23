import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Table, Modal, Button } from 'antd';
import SalariesInfo from '../Assets/csvjson.json'; // Import the JSON file

const SalaryChart = () => {
  const limitedData = SalariesInfo.slice(0, 150).map(item => ({
    year: item.work_year,
    averageSalary: item.salary,
    job_title: item.job_title 
  }));

  return (
    <div >
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={limitedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="averageSalary" name="Average Salary" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="job_title" name="Job Title" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalaryChart;
