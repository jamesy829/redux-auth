import React from "react";
import { Icon } from "semantic-ui-react";
import Modal from "./Modal";
import { hideOAuthSignInErrorModal } from "../../../actions/ui";

class OAuthSignInErrorModal extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.show}
        containerClass="oauth-sign-in-error-modal"
        closeAction={hideOAuthSignInErrorModal}
        title="OAuth Sign In Error"
      >
        <p>
          <Icon name="attention" /> There was an error authenticating your
          account. Please try again.
        </p>
      </Modal>
    );
  }
}

export default OAuthSignInErrorModal;
