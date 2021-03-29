import React from 'react';
import '../styles/components/sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faTag } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ tags, total }) => {
  return (
    <aside className='sidebar'>
      <div className='sidebar__row sidebar__row--active'>
        <div className='icon'>
          <FontAwesomeIcon icon={faInbox} />
        </div>
        <div className='tag'>
          <div className='tag__name'>Inbox</div>
          <div className='tag__number'>{total}</div>
        </div>
      </div>

      {tags && tags.map(tag => {
        return (
          <div className='sidebar__row' key={tag}>
            <div className='icon'>
              <FontAwesomeIcon icon={faTag} />
            </div>
            <div className='tag'>
              <div className='tag__name'>{tag}</div>
              <div className='tag__number'> </div>
            </div>
          </div>
        )
      })}

    </aside>
  );
};

export default Sidebar;