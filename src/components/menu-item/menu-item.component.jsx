import React from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();
  const match = useRouteMatch();
  return (
    <div
      className={`${size}  menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitile'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
