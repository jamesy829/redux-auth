import React from "react";
import PropTypes from 'prop-types';
import { Icon } from "semantic-ui-react";


class InputError extends React.Component {
  static propTypes = {
    error: PropTypes.string.isRequired,
  };

  render () {
    return (
      <div className='auth-error-message error'>
        <p
          className="control-label inline-error-item"
          style={{
            color: '#d00003',
            marginTop: '-5px',
            marginBottom: '0px',
          }}
        >
          <Icon name="attention" />
          {this.props.error}
        </p>
      </div>
    );
  }
}

export default InputError;
