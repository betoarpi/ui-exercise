import React from 'react';
import '../styles/components/table.scss';

import TableRow from './TableRow';

const Table = ({ data }) => {
  console.log({data});
  return (
    <div className='table'>
      <div className='table__header'>
        <div className='checkbox'>
          <input type='checkbox' />
        </div>
        <div className='refresh'>r</div>
        <div className='empty'></div>
        <div className='pagination'>10 of 10</div>
      </div>
      <table role='grid'>
        <tbody>
          {data && data.map(item => (
            <TableRow data={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;