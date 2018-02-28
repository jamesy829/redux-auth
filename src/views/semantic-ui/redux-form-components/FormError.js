import React from "react";
import PropTypes from "prop-types";
import { Icon } from "semantic-ui-react";

class FormError extends React.Component {
  static propTypes = {
    error: PropTypes.string.isRequired
  };

  render() {
    return (
      <div style={{ marginBottom: "5px", color: "#d00003" }}>
        <Icon name="attention" />
        {this.props.error}
      </div>
    );
  }
}

export default FormError;
