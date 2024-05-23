
import React from 'react';
import 'antd/dist/reset.css';
import { Button, Layout, Menu ,Icon,message} from 'antd';
import SalaryChart from './components/SalaryChart';
import SalaryForTable from './components/SalaryForTable';
import './App.css';
import { SearchOutlined } from '@ant-design/icons';
import MLSalaries from './components/MLSalaries';


const { Header, Content, Footer } = Layout;
function App() {
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.success('Hello, World');
  };
  return (
    <div className="App" >
       <Layout style={{backgroundColor:'#a2a8d3'}}>
      <Header>
      <div className="logo-container" >
          
          
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1" >ML Engineer Salaries Dashboard</Menu.Item>
        </Menu>
        </div>
      </Header>
      <Content style={{ padding: '0 25px', marginTop: 64 }}>
        <div className="site-layout-background mb-4" style={{ minHeight: 380, }}>
          <h1>ML Engineer Salaries</h1>
          <SalaryChart />
          <Layout className='my-5'>
          <MLSalaries />
          </Layout>
          
       
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>ML Salary Dashboard ©2024 Created by Srikanth</Footer>
    </Layout>
 
 
    
    </div>
  );
}

export default App;
