import React from 'react';

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
        star
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