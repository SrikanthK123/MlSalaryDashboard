import React, { useEffect, useState } from 'react';
import { Table,Modal,Button,modalContent } from 'antd';
import SalariesInfo from '../Assets/csvjson.json'; // Import the JSON file

const MLSalaries = () => {
    const [data, setData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Directly set the JSON data to state
    setData(SalariesInfo);
  }, []);

  // Define columns for the Ant Design Table
  const columns = [
    {
      title: 'Work Year',
      dataIndex: 'work_year',
      key: 'work_year',
    },
    {
      title: 'Experience Level',
      dataIndex: 'experience_level',
      key: 'experience_level',
    },
    {
      title: 'Job Title',
      dataIndex: 'job_title',
      key: 'job_title',
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
      key: 'salary',
    },
    {
      title: 'Salary Currency',
      dataIndex: 'salary_currency',
      key: 'salary_currency',
    },
    {
      title: 'Salary in USD',
      dataIndex: 'salary_in_usd',
      key: 'salary_in_usd',
    },
    {
      title: 'Employee Residence',
      dataIndex: 'employee_residence',
      key: 'employee_residence',
    },
    {
      title: 'Company Location',
      dataIndex: 'company_location',
      key: 'company_location',
    },
    {
      title: 'Company Size',
      dataIndex: 'company_size',
      key: 'company_size',
    },
  ];
  const handleRowClick = (record) => {
    setSelectedItem(record);
    setModalVisible(true);
  };

  return (
    <div >
      {data.length > 0 ? (
        <Table dataSource={data} columns={columns} onRow={(record) => ({ onClick: () => handleRowClick(record) })} rowKey={(record) => record.job_title + record.work_year }  scroll={{ x: 'max-content' }} />
      ) : (
        <p>Loading...</p>
      )}
      <Modal
        title="Details"
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setModalVisible(false)}>
            Close
          </Button>,
        ]}
      >
        {selectedItem && (
          <div>
            <p>Work Year: {selectedItem.work_year}</p>
            <p>Experience Level: {selectedItem.experience_level}</p>
            {/*<p>Job: {selectedItem.job_title}</p>
            <p>Salary: {selectedItem.salary}</p>*/}

            {/* Add more details here */}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MLSalaries;
