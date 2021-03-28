import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Table from '../components/Table';

import { getData } from '../utils/appFunctions';

const Home = () => {
  const [ data, setData ] = useState(null);
  useEffect(() => {
    getData()
      .then(response => {
        setData(response);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='main-container'>
      <Header />
      <div className='grid'>
        <Sidebar />
        <Table data={data} />
      </div>
    </div>
  );
};

export default Home;
