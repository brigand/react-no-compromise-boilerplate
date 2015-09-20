import React, {PropTypes} from 'react';

export default
class Text extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    size: PropTypes.string,
    color: PropTypes.string,
    weight: PropTypes.string,
  };

  static defaultProps = {
    size: 'inherit',
    color: 'inherit',
    weight: 'inherit',
  };

  render(){
    var {
      size, style, color, weight,
    ...props} = this.props;
    return (
      <span
        {...props}
        style={Object.assign({weight, color, fontSize: size}, style)}
      />
    );
  }
}
