import React, {PropTypes} from 'react';
import Box from './Box';

export default
class Text extends React.Component {
  static propTypes = {
    children: PropTypes.any,
  };

  render(){
    return (
      <Box
        inline
        {...this.props}
        childrenKey={this.props.children}
      />
    );
  }
}
