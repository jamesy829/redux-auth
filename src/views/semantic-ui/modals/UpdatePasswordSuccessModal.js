import React from "react";
import { hideUpdatePasswordSuccessModal } from "../../../actions/ui";
import Modal from "./Modal";

class UpdatePasswordSuccessModal extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.show}
        containerClass="update-password-success-modal"
        closeAction={hideUpdatePasswordSuccessModal}
        title="Success"
      >
        <p>
          Your password has been successfully changed. The page will reload in 3
          seconds...
        </p>
      </Modal>
    );
  }
}

export default UpdatePasswordSuccessModal;
