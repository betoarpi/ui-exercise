import React from 'react';
import '../styles/components/table.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

import TableRow from './TableRow';

const Table = ({ data }) => {
  const numItems = data && data.length;

  return (
    <div className='table'>
      <div className='table__header'>
        <div className='checkbox'>
          <input type='checkbox' />
        </div>
        <div className='refresh'>
          <FontAwesomeIcon icon={faRedo} />
        </div>
        <div className='empty'></div>
        <div className='pagination'>
          <span className='current-batch'>{numItems}</span> of 10
        </div>
      </div>
      <table role='grid'>
        <tbody>
          {data && data.map(item => (
            <TableRow 
              data={item} 
              key={item.id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;