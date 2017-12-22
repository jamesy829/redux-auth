import React from "react";
import PropTypes from 'prop-types';
import Input from "./Input";
import { Form, Button } from "semantic-ui-react";
import { emailSignUpFormUpdate, emailSignUp } from "../../actions/email-sign-up";
import { connect } from "react-redux";

class EmailSignUpForm extends React.Component {
  static propTypes = {
    endpoint: PropTypes.string,
    next: PropTypes.func,
    inputProps: PropTypes.shape({
      email: PropTypes.object,
      password: PropTypes.object,
      passwordConfirmation: PropTypes.object,
      submit: PropTypes.object
    }),
    additionalInputs: PropTypes.object
  };

  static defaultProps = {
    next: () => {},
    inputProps: {
      email: {},
      password: {},
      submit: {}
    },
    additionalInputs: {}
  };

  getEndpoint () {
    return (
      this.props.endpoint ||
      this.props.auth.getIn(["configure", "currentEndpointKey"]) ||
      this.props.auth.getIn(["configure", "defaultEndpointKey"])
    );
  }

  handleInput (key, val) {
    this.props.dispatch(emailSignUpFormUpdate(this.getEndpoint(), key, val));
  }

  handleSubmit (event) {
    event.preventDefault();
    let formData = this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form"]).toJS();
    this.props.dispatch(emailSignUp(formData, this.getEndpoint()))
      .then(this.props.next)
      .catch(() => {});
  }

  additionalInputs (disabled) {
    return this.props.additionalInputs.reduce((memo, value, key) => {
      memo.push(<Input type="text"
        key={key}
        label={value}
        placeholder={value}
        className="email-sign-up-${key}"
        disabled={disabled}
        value={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form", key]) || ''}
        errors={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "errors", key])}
        onChange={this.handleInput.bind(this, key)} />)
      return memo;
    }, []);
  }

  render () {
    let disabled = (
      this.props.auth.getIn(["user", "isSignedIn"]) ||
      this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "loading"])
    );

    return (
      <Form
        className='redux-auth email-sign-up-form clearfix'
        onSubmit={this.handleSubmit.bind(this)}
      >
        <Form.Group widths="equal">
          {this.additionalInputs(disabled)}
        </Form.Group>
        <Input type="text"
          label="Email"
          placeholder="Email"
          className="email-sign-up-email"
          disabled={disabled}
          value={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form", "email"]) || ''}
          errors={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "errors", "email"])}
          onChange={this.handleInput.bind(this, "email")}
          {...this.props.inputProps.email}
        />
        <Form.Group widths="equal">
          <Input type="password"
            label="Password"
            placeholder="Password"
            className="email-sign-up-password"
            disabled={disabled}
            value={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form", "password"]) || ''}
            errors={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "errors", "password"])}
            onChange={this.handleInput.bind(this, "password")}
            {...this.props.inputProps.password}
          />
          <Input type="password"
            label="Password Confirmation"
            placeholder="Password Confirmation"
            className="email-sign-up-password-confirmation"
            disabled={disabled}
            value={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form", "password_confirmation"]) || ''}
            errors={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "errors", "password_confirmation"])}
            onChange={this.handleInput.bind(this, "password_confirmation")}
            {...this.props.inputProps.passwordConfirmation}
          />
        </Form.Group>
        <Button
          fluid
          primary
          loading={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "loading"])}
          type="submit"
          className="email-sign-up-submit pull-right"
          disabled={disabled}
          onClick={this.handleSubmit.bind(this)}
          {...this.props.inputProps.submit}>
          Sign Up
        </Button>
      </Form>
    );
  }
}

export default connect(({auth}) => ({auth}))(EmailSignUpForm);
