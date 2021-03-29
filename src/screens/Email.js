import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import '../styles/screens/email.scss';

const Email = ({ openedEmail }) => {
  const { body, subject, sender, date } = openedEmail;
  return (
    <article className='email'>
      <h1>{subject}</h1>
      <span className='sender'><strong>From: </strong>{sender} <Moment className='time' format='MMM DD, YYYY'>{date}</Moment></span>
      <div className='email__body'
        dangerouslySetInnerHTML={{ __html: body}}
      />
    </article>
  );
};

const mapDispatchToProps = state => ({
  openedEmail: state.emailState.openedEmail,
});

export default connect(mapDispatchToProps)(Email);