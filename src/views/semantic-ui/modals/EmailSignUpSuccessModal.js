import React from "react";
import { hideEmailSignUpSuccessModal } from "../../../actions/ui";
import { connect } from "react-redux";
import Modal from "./Modal";

class EmailSignUpSuccessModal extends React.Component {
  render() {
    return (
      <Modal
        containerClass="email-sign-up-success-modal"
        show={this.props.show}
        closeAction={hideEmailSignUpSuccessModal}
        title="Sign Up Success"
      >
        <p>Welcome to TopicDNA</p>
      </Modal>
    );
  }
}

export default connect(({ auth }) => ({ auth }))(EmailSignUpSuccessModal);
