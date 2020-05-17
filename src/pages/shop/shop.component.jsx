import React, { Component } from 'react';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';
import { collections } from '../../utilities/data';

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...props }) => (
          <PreviewCollection key={id} {...props} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
