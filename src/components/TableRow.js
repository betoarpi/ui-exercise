import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const TableRow = ({ data }) => {
  const {
    date,
    id,
    sender,
    subject,
    tags
  } = data;
  return (
    <tr className='table__row' id={id} data-tags={tags}>
      <td className='checkbox'>
        <input type='checkbox' />
      </td>
      <td className='favorite'>
        <FontAwesomeIcon icon={faStar} />
      </td>
      <td className='sender'>
        {sender}
      </td>
      <td className='subject'>
        {subject}
      </td>
      <td className='icon'>
        ico
      </td>
      <td className='date'>
        {date}
      </td>
    </tr>
  );
};

export default TableRow;