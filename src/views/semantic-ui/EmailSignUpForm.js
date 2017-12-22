import React from "react";
import PropTypes from 'prop-types';
import Input from "./Input";
import { Form, Button, Divider, Grid, Container, Segment } from "semantic-ui-react";
import { emailSignUpFormUpdate, emailSignUp } from "../../actions/email-sign-up";
import { connect } from "react-redux";
import { List, Map } from 'immutable';

const defaultInputProps = {
  email: {
    label: 'Email',
    type: 'email',
  },
  password: {
    label: 'Password',
    type: 'password',
  },
  passwordConfirmation: {
    label: 'Password Confirmation',
    type: 'password',
  },
  submit: {},
}

class EmailSignUpForm extends React.Component {
  static propTypes = {
    endpoint: PropTypes.string,
    next: PropTypes.func,
    inputProps: PropTypes.shape({
      email: PropTypes.object,
      password: PropTypes.object,
      passwordConfirmation: PropTypes.object,
      submit: PropTypes.object,
    }),
    additionalInputs: PropTypes.object,
    submitComponent: PropTypes.func,
    callToAction: PropTypes.node,
  };

  static defaultProps = {
    next: () => {},
    inputProps: defaultInputProps,
    additionalInputs: {},
    submitComponent: Button,
  };

  getEndpoint () {
    return (
      this.props.endpoint ||
      this.props.auth.getIn(['configure', 'currentEndpointKey']) ||
      this.props.auth.getIn(['configure', 'defaultEndpointKey'])
    );
  }

  handleInput (key, val) {
    this.props.dispatch(emailSignUpFormUpdate(this.getEndpoint(), key, val));
  }

  handleSubmit (event) {
    event.preventDefault();
    let formData = this.props.auth.getIn(['emailSignUp', this.getEndpoint(), 'form']).toJS();
    this.props.dispatch(emailSignUp(formData, this.getEndpoint()))
      .then(this.props.next)
      .catch(() => {});
  }

  renderInputFields (inputFieldsMap, disabled) {
    return Object.keys(inputFieldsMap).map(inputKey => {
      const input = inputFieldsMap[inputKey];
      return this.renderInput(input, disabled);
    });
  }

  renderInput (inputDetails, disabled) {
    const defaultColumnWidth = 16;
    const { key, propsKey } = inputDetails;
    const inputPropKey = propsKey || key;
    const defaultProps = defaultInputProps[inputPropKey] || {};
    const instanceProps = this.props.inputProps[inputPropKey] || {};
    const { width, ...inputProps } = Object.assign(defaultProps, instanceProps);

    return (
      <Grid.Column
        key={key}
        width={width || defaultColumnWidth}
      >
        <Input
          disabled={disabled}
          className={`email-sign-up-${name}`}
          onChange={this.handleInput.bind(this, key)}
          errors={this.props.auth.getIn(['emailSignUp', this.getEndpoint(), 'errors', key])}
          value={this.props.auth.getIn(['emailSignUp', this.getEndpoint(), 'form', key]) || ''}
          {...inputProps}
        />
      </Grid.Column>
    );
  }

  render () {
    const SubmitButton = this.props.submitComponent;
    let disabled = (
      this.props.auth.getIn(['user', 'isSignedIn']) ||
      this.props.auth.getIn(['emailSignUp', this.getEndpoint(), 'loading'])
    );

    return (
      <Form
        className="redux-auth email-sign-up-form clearfix"
        onSubmit={this.handleSubmit.bind(this)}
      >
        <Container>
          <Segment basic>
            <Grid padded>
              <Grid.Column className="fuck" width={16}>
                <h2>Sign Up</h2>
              </Grid.Column>
            </Grid>
            <Grid padded className="input-fields">
              {this.renderInputFields(this.props.additionalInputs, disabled)}
              {this.renderInput({key: 'email'}, disabled)}
              {this.renderInput({key: 'password'}, disabled)}
              {this.renderInput({key: 'password_confirmation', propsKey: 'passwordConfirmation'}, disabled)}
            </Grid>
          </Segment>
        </Container>
        <Divider fitted />
        <Container>
          <Segment basic>
            <Grid middle="true" aligned="true" padded>
              <Grid.Column width={8} verticalAlign="middle">
                {this.props.callToAction}
              </Grid.Column>
              <Grid.Column width={8} verticalAlign="middle">
                <SubmitButton
                  type="submit"
                  floated="right"
                  disabled={disabled}
                  onClick={this.handleSubmit.bind(this)}
                  className="email-sign-up-submit"
                  loading={this.props.auth.getIn(['emailSignUp', this.getEndpoint(), 'loading'])}
                  {...this.props.inputProps.submit}
                >
                  Create Account
                </SubmitButton>
              </Grid.Column>
            </Grid>
          </Segment>
        </Container>
      </Form>
    );
  }
}

export { EmailSignUpForm as PureComponent };
export default connect(({auth}) => ({auth}))(EmailSignUpForm);
