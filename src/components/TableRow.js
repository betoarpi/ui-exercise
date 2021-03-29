import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { setActiveEmail } from '../redux/actions';

const TableRow = ({ data, setActiveEmail }) => {
  const {
    date,
    id,
    sender,
    subject,
    tags
  } = data;

  const history = useHistory()

  const handleEmail = () => {
    setActiveEmail(data);
    history.push(`/email/${id}`);
  }

  return (
    <tr className='table__row' id={id} data-tags={tags}>
      <td className='checkbox'>
        <input type='checkbox' />
      </td>
      <td className='favorite'>
        <FontAwesomeIcon icon={faStar} />
      </td>
      <td className='sender' onClick={handleEmail}>
        {sender}
      </td>
      <td className='subject' onClick={handleEmail}>
        {subject}
      </td>
      <td className='date' onClick={handleEmail}>
        <Moment format="MMM DD">{date}</Moment>
      </td>
    </tr>
  );
};

const mapStateToProps = state => ({
  favoriteEmails: state.emailState.favoriteEmails,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setActiveEmail,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TableRow);