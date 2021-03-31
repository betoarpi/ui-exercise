import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import Table from '../components/Table';

import { getData } from '../utils/appFunctions';

const Home = () => {
  const [ data, setData ] = useState(null);
  const [error, setError] = useState();

  useEffect(() => {
    getData()
      .then(response => {
        setData(response);
      })
      .catch(error => {
        console.log(error);
        setError(error.message)
      });
  }, []);

  if (error) {
    return (
      <div className="error">
        <h3><FontAwesomeIcon icon={faExclamationCircle} /> {error}</h3>
        <p>Please make sure that you started the api server first.</p>
      </div>
    );
  } else {
    return (
      <Table data={data} />
    );
  }

};

export default Home;
