import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Form, Divider, Grid, Container, Segment } from "semantic-ui-react";

import Input from "./Input";
import {
  updatePassword,
  updatePasswordFormUpdate
} from "../../actions/update-password";
class UpdatePasswordForm extends React.Component {
  static propTypes = {
    endpoint: PropTypes.string,
    inputProps: PropTypes.shape({
      password: PropTypes.object,
      passwordConfirmation: PropTypes.object
    })
  };

  static defaultProps = {
    inputProps: {
      password: {},
      passwordConfirmation: {}
    }
  };

  getEndpoint() {
    return (
      this.props.endpoint ||
      this.props.auth.getIn(["configure", "currentEndpointKey"]) ||
      this.props.auth.getIn(["configure", "defaultEndpointKey"])
    );
  }

  handleInput(key, val) {
    this.props.dispatch(updatePasswordFormUpdate(this.getEndpoint(), key, val));
  }

  handleSubmit(event) {
    event.preventDefault();
    let formData = this.props.auth
      .getIn(["updatePassword", this.getEndpoint(), "form"])
      .toJS();
    this.props.dispatch(updatePassword(formData, this.getEndpoint()));
  }

  render() {
    let endpoint = this.getEndpoint();
    let loading = this.props.auth.getIn([
      "updatePassword",
      endpoint,
      "loading"
    ]);
    const SubmitButton = this.props.submitComponent;

    return (
      <Form
        className="redux-auth update-password-form clearfix"
        onSubmit={this.handleSubmit.bind(this)}
      >
        <Container>
          <Segment basic>
            <Grid padded>
              <Grid.Column width={16}>
                <h2>Update Password</h2>
              </Grid.Column>
              <Grid.Column width={16}>
                <Input
                  type="password"
                  label="Password"
                  placeholder="Password"
                  groupClassName="update-password-password"
                  value={this.props.auth.getIn([
                    "updatePassword",
                    endpoint,
                    "form",
                    "password"
                  ])}
                  errors={this.props.auth.getIn([
                    "updatePassword",
                    endpoint,
                    "errors",
                    "password"
                  ])}
                  onChange={this.handleInput.bind(this, "password")}
                  {...this.props.inputProps.password}
                />

                <Input
                  type="password"
                  label="Password Confirmation"
                  placeholder="Password Confirmation"
                  groupClassName="update-password-password-confirmation"
                  value={this.props.auth.getIn([
                    "updatePassword",
                    endpoint,
                    "form",
                    "password_confirmation"
                  ])}
                  errors={this.props.auth.getIn([
                    "updatePassword",
                    endpoint,
                    "errors",
                    "password_confirmation"
                  ])}
                  onChange={this.handleInput.bind(
                    this,
                    "password_confirmation"
                  )}
                  {...this.props.inputProps.passwordConfirmation}
                />
              </Grid.Column>
            </Grid>
          </Segment>
        </Container>
        <Divider fitted />
        <Container>
          <Segment basic>
            <Grid middle="true" aligned="true" padded>
              <Grid.Column width={16} verticalAlign="middle">
                <SubmitButton
                  type="submit"
                  floated="right"
                  className="email-sign-up-submit"
                  loading={loading}
                  {...this.props.inputProps.submit}
                >
                  Update Password
                </SubmitButton>
              </Grid.Column>
            </Grid>
          </Segment>
        </Container>
      </Form>
    );
  }
}

export default connect(({ auth }) => ({ auth }))(UpdatePasswordForm);
