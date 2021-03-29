import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import { getData } from '../utils/appFunctions';

const Layout = ({ children }) => {
  const [ data, setData ] = useState(null);
  const [ emailTags, setEmailTags ] = useState([]);

  useEffect(() => {
    getData()
      .then(response => {
        setData(response);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    data && allTags(data);
  }, [data]);

  const allTags = (data) => {
    let itemTags = [];
    data.map((item) => {
      const { tags } = item;
      return tags.map(tag => {
        if (!itemTags.includes(tag)) {
          return itemTags.push(tag);
        } else {
          return null
        }
      });
    })
    return setEmailTags(itemTags);
  }

  return (
    <div className='main-container'>
      <Header />
      <div className='grid'>
        <Sidebar tags={emailTags} total={data.length} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
