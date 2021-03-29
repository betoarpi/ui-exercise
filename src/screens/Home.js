import React, { useEffect, useState } from 'react';

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
    <Table data={data} />
  );
};

export default Home;
