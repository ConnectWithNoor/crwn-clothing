import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import { directory } from '../../utilities/data';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: directory,
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...props }) => {
          return <MenuItem key={id} {...props} />;
        })}
      </div>
    );
  }
}

export default Directory;
