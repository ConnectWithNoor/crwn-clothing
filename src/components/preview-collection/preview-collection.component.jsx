import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './preview-collection.styles.scss';

function PreviewCollection({ title, items }) {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...props }) => {
            return <CollectionItem key={id} {...props} />;
          })}
      </div>
    </div>
  );
}

export default PreviewCollection;
