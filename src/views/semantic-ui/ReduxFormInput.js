import React from "react";
import PropTypes from 'prop-types';
import { Form, Icon } from "semantic-ui-react";


class ReduxFormInput extends React.Component {
  static propTypes = {
    input: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    meta: PropTypes.shape({
      touched: PropTypes.bool.isRequired,
      error: PropTypes.string,
    }).isRequired,
  };

  renderErrors () {
    return (
      <div className='auth-error-message error'>
        <p
          className="control-label inline-error-item"
          style={{
            color: '#9f3a38',
            marginTop: '-10px',
            marginBottom: '0px',
          }}
        >
          <Icon name="attention" />
          {this.props.meta.error}
        </p>
      </div>
    );
  }

  render () {
    const { meta, ...inputProps } = this.props;
    const hasError = meta && meta.error && meta.touched;

    return (
      <div>
        <Form.Input {...inputProps} />
        {hasError && this.renderErrors()}
      </div>
    );
  }
}

export default ReduxFormInput;
