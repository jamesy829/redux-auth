import React from "react";
import PropTypes from 'prop-types';
import { Form, Icon } from "semantic-ui-react";
import InputError from './InputError';


class Input extends React.Component {
  static propTypes = {
    input: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    meta: PropTypes.shape({
      touched: PropTypes.bool.isRequired,
      error: PropTypes.string,
    }).isRequired,
  };

  render () {
    const { meta, ...inputProps } = this.props;
    const hasError = meta && meta.error && meta.touched;

    return (
      <div>
        <Form.Input {...inputProps} />
        {hasError && <InputError error={meta.error} />}
      </div>
    );
  }
}

export default Input;
