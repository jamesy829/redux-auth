import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form/immutable";
import {
  Form,
  Button,
  Divider,
  Grid,
  Container,
  Icon,
  Segment,
  Message
} from "semantic-ui-react";
import Input from "./redux-form-components/Input";
import FormError from "./redux-form-components/FormError";

const defaultInputProps = {
  email: {
    label: "Email",
    type: "email"
  },
  password: {
    label: "Password",
    type: "password"
  },
  passwordConfirmation: {
    label: "Password Confirmation",
    type: "password"
  },
  submit: {}
};

class EmailSignUpFormView extends React.Component {
  static propTypes = {
    additionalInputs: PropTypes.object,
    callToAction: PropTypes.node,
    dirty: PropTypes.bool,
    error: PropTypes.string,
    handleSubmit: PropTypes.func,
    inputProps: PropTypes.shape({
      email: PropTypes.object,
      password: PropTypes.object,
      passwordConfirmation: PropTypes.object,
      submit: PropTypes.object
    }),
    isSignedIn: PropTypes.bool,
    next: PropTypes.func,
    submitComponent: PropTypes.func,
    submitting: PropTypes.bool,
    valid: PropTypes.bool
  };

  static defaultProps = {
    additionalInputs: {},
    inputProps: defaultInputProps,
    next: () => {},
    submitComponent: Button
  };

  renderInputFields(inputFieldsMap, disabled) {
    return Object.keys(inputFieldsMap).map(inputKey => {
      const input = inputFieldsMap[inputKey];
      return this.renderInput(input, disabled);
    });
  }

  renderInput(inputDetails, disabled) {
    const defaultColumnWidth = 16;
    const { key, propsKey } = inputDetails;
    const inputPropKey = propsKey || key;
    const defaultProps = defaultInputProps[inputPropKey] || {};
    const instanceProps = this.props.inputProps[inputPropKey] || {};
    const { width, ...inputProps } = Object.assign(defaultProps, instanceProps);

    return (
      <Grid.Column key={key} width={width || defaultColumnWidth}>
        <Field
          fluid={Boolean(true)}
          name={key}
          component={Input}
          {...inputProps}
        />
      </Grid.Column>
    );
  }

  renderFormError(error) {
    return (
      <Grid.Column key="errors" width={16}>
        <FormError error={error} />
      </Grid.Column>
    );
  }

  render() {
    const {
      handleSubmit,
      error,
      submitting,
      dirty,
      valid,
      isSignedIn
    } = this.props;
    console.log(!valid && !error, "!valid && !error");
    console.log(valid, "valid");
    console.log;
    console.log(isSignedIn, "isSignedIn");
    console.log(submitting, "submitting");
    console.log("disabled", !valid || submitting || isSignedIn);
    const disabled = !valid || submitting || isSignedIn;
    const SubmitButton = this.props.submitComponent;
    return (
      <Form
        className="redux-auth email-sign-up-form clearfix"
        onSubmit={handleSubmit}
      >
        <Container>
          <Segment basic>
            <Grid padded>
              <Grid.Column width={16}>
                <h2>Sign Up</h2>
              </Grid.Column>
            </Grid>
            <Grid padded className="input-fields">
              {error && dirty && this.renderFormError(error)}
              {this.renderInputFields(this.props.additionalInputs, disabled)}
              {this.renderInput({ key: "email" }, disabled)}
              {this.renderInput({ key: "password" }, disabled)}
              {this.renderInput(
                {
                  key: "password_confirmation",
                  propsKey: "passwordConfirmation"
                },
                disabled
              )}
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
                  className="email-sign-up-submit"
                  loading={submitting}
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

export default EmailSignUpFormView;
