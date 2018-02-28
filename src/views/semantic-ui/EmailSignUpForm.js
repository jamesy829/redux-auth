import React from "react";
import { connect } from "react-redux";
import { reduxForm, SubmissionError } from "redux-form/immutable";
import { emailSignUp } from "../../actions/email-sign-up";
import EmailSignUpFormView from "./EmailSignUpFormView";

function mapStateToProps({ auth }, ownProps) {
  const endpoint =
    ownProps.endpoint ||
    auth.getIn(["configure", "currentEndpointKey"]) ||
    auth.getIn(["configure", "defaultEndpointKey"]);

  return {
    endpoint,
    form: "auth-emailSignUp-" + endpoint.toString(),
    isSignedIn: auth.getIn(["user", "isSignedIn"])
  };
}

const handleFormErrors = err => {
  if (typeof err === "object") {
    throw new SubmissionError(err);
  } else {
    throw new SubmissionError({
      _error: "Something went wrong. Please try again"
    });
  }
};

function mergeProps(stateProps, dispatchProps, ownProps) {
  return Object.assign({}, ownProps, stateProps, dispatchProps, {
    onSubmit: formData => {
      return dispatchProps
        .emailSignUp(formData.toJS(), stateProps.endpoint)
        .then(ownProps.next)
        .catch(handleFormErrors);
    }
  });
}

export default connect(mapStateToProps, { emailSignUp }, mergeProps)(
  reduxForm({})(EmailSignUpFormView)
);
