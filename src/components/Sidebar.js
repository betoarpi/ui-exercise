import React from 'react';
import '../styles/components/sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <div className='sidebar__row sidebar__row--active'>
        <div className='icon'>
          <FontAwesomeIcon icon={faInbox} />
        </div>
        <div className='tag'>
          <div className='tag__name'>Inbox</div>
          <div className='tag__number'>10</div>
        </div>
      </div>
      <div className='sidebar__row'>
        <div className='icon'>i</div>
        <div className='tag'>
          <div className='tag__name'>Inbox</div>
          <div className='tag__number'>10</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;