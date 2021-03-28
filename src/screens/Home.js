import React from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Table from '../components/Table';

const Home = () => {
  return (
    <div className='main-container'>
      <Header />
      <div className='grid'>
        <Sidebar />
        <Table />
      </div>
    </div>
  );
};

export default Home;
