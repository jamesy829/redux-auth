import React from "react";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";
import Spinner from "react-loader";

class ButtonLoader extends React.Component {
  static propTypes = {
    icon: PropTypes.any,
    loading: PropTypes.bool,
    spinConfig: PropTypes.object,
    spinColorDark: PropTypes.string,
    spinColorLight: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func.isRequired,
    style: PropTypes.object
  };

  static defaultProps = {
    loading: false,
    spinConfig: {
      lines: 10,
      length: 4,
      width: 2,
      radius: 3
    },
    spinColorDark: "#444",
    spinColorLight: "#fff",
    style: {}
  };

  render() {
    return (
      <Button
        circular={this.props.circular}
        color={this.props.color}
        icon={this.props.icon}
        loading={this.props.loading}
        onClick={this.props.onClick}
        disabled={this.props.disabled || this.props.loading}
        className={this.props.className}
        style={this.props.style}
        type={this.props.type}
        size={this.props.size}
        content={this.props.content}
      />
    );
  }
}

export default ButtonLoader;
