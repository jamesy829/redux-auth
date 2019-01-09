import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Form, Divider, Grid, Container, Segment } from "semantic-ui-react";

import Input from "./Input";
import {
  requestPasswordResetFormUpdate,
  requestPasswordReset
} from "../../actions/request-password-reset";

class RequestPasswordResetForm extends React.Component {
  static propTypes = {
    endpoint: PropTypes.string,
    inputProps: PropTypes.shape({
      email: PropTypes.object,
      submit: PropTypes.object
    })
  };

  static defaultProps = {
    inputProps: {
      email: {},
      submit: {}
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
    this.props.dispatch(
      requestPasswordResetFormUpdate(this.getEndpoint(), key, val)
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    let formData = this.props.auth
      .getIn(["requestPasswordReset", this.getEndpoint(), "form"])
      .toJS();
    this.props.dispatch(requestPasswordReset(formData, this.getEndpoint()));
  }

  render() {
    let loading = this.props.auth.getIn([
      "requestPasswordReset",
      this.getEndpoint(),
      "loading"
    ]);
    let inputDisabled = this.props.auth.getIn(["user", "isSignedIn"]);
    let submitDisabled = !this.props.auth.getIn([
      "requestPasswordReset",
      this.getEndpoint(),
      "form",
      "email"
    ]);

    const SubmitButton = this.props.submitComponent;
    return (
      <Form
        className="redux-auth request-password-reset-form clearfix"
        onSubmit={this.handleSubmit.bind(this)}
      >
        <Container>
          <Segment basic>
            <Grid padded>
              <Grid.Column width={16}>
                <h2>Forgot Password</h2>
              </Grid.Column>
              <Grid.Column key="email" width={16}>
                <Input
                  type="text"
                  label="Email Address"
                  groupClassName="request-password-reset-email"
                  placeholder="Email Address"
                  disabled={loading || inputDisabled}
                  value={this.props.auth.getIn([
                    "requestPasswordReset",
                    this.getEndpoint(),
                    "form",
                    "email"
                  ])}
                  errors={this.props.auth.getIn([
                    "requestPasswordReset",
                    this.getEndpoint(),
                    "errors",
                    "email"
                  ])}
                  onChange={this.handleInput.bind(this, "email")}
                  {...this.props.inputProps.email}
                />
              </Grid.Column>
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
                  disabled={inputDisabled || submitDisabled}
                  className="email-sign-up-submit"
                  loading={loading}
                  {...this.props.inputProps.submit}
                >
                  SEND PASSWORD RESET EMAIL
                </SubmitButton>
              </Grid.Column>
            </Grid>
          </Segment>
        </Container>
      </Form>
    );
  }
}

export default connect(({ auth }) => ({ auth }))(RequestPasswordResetForm);
