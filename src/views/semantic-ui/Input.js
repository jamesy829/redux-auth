import React from "react";
import PropTypes from 'prop-types';
import { Form, Icon } from "semantic-ui-react";
import Immutable from "immutable";

class AuthInput extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    errors: PropTypes.object
  };

  static defaultProps = {
    label: "",
    value: null,
    errors: Immutable.fromJS([])
  };

  handleInput (ev) {
    this.props.onChange(ev.target.value);
  }

  renderErrorList () {
    if (this.props.errors.size) {
      return (
        <div className='auth-error-message has-error'>
          {this.props.errors.map((err, i) => {
            return (
              <p
                className="control-label inline-error-item"
                style={{paddingLeft: "20px", position: "relative", marginBottom: "28px"}}
                key={i}
              >
                <Icon
                  name="attention"
                  style={{
                          position: "absolute",
                          left: 0,
                          top: 2
                        }}
                      />{this.props.label} {err}
                    </p>
            );
          })}
        </div>
      );
    }

    return <span />;
  }

  render () {
    return (
      <Form.Field
        error={(this.props.errors.size) ? "error" : null}
      >
        <label>{this.props.label}</label>
        <input
          {...this.props}
          onChange={this.handleInput.bind(this)}
        />
        {this.renderErrorList()}
      </Form.Field>
    );
  }
}

export default AuthInput;
