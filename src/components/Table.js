import React from 'react';
import '../styles/components/table.scss';

const Table = () => {
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
          <tr className='table__row'>
            <td className='checkbox'>
              <input type='checkbox' />
            </td>
            <td className='favorite'>
              star
            </td>
            <td className='sender'>
              bob.smith@gmail.com
            </td>
            <td className='subject'>
              Lorem ipsum dolor, this is the excerpt of the email
            </td>
            <td className='icon'>
              ico
            </td>
            <td className='date'>
              Mar 28
            </td>
          </tr>
          <tr className='table__row table__row--read'>
            <td className='checkbox'>
              <input type='checkbox' />
            </td>
            <td className='favorite'>
              star
            </td>
            <td className='sender'>
              bob.smith@gmail.com
            </td>
            <td className='subject'>
              Lorem ipsum dolor, this is the excerpt of the email
            </td>
            <td className='icon'>
              ico
            </td>
            <td className='date'>
              Mar 28
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;