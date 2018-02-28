import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "semantic-ui-react";
import ErrorList from "../ErrorList";
import { connect } from "react-redux";

class BaseModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool,
    errorAddr: PropTypes.array,
    closeBtnLabel: PropTypes.string
  };

  static defaultProps = {
    show: false,
    errorAddr: null,
    closeBtnLabel: "Ok"
  };

  close() {
    this.props.dispatch(this.props.closeAction());
  }

  getEndpoint() {
    return (
      this.props.endpoint ||
      this.props.auth.getIn(["configure", "currentEndpointKey"]) ||
      this.props.auth.getIn(["configure", "defaultEndpointKey"])
    );
  }

  getErrorList() {
    let [base, ...rest] = this.props.errorAddr;
    return (
      <ErrorList
        errors={this.props.auth.getIn([base, this.getEndpoint(), ...rest])}
      />
    );
  }

  render() {
    let body = this.props.errorAddr ? this.getErrorList() : this.props.children;

    return (
      <Modal
        open={this.props.show}
        className={`redux-auth-modal ${this.props.containerClass}`}
        onClose={this.close.bind(this)}
        closeIcon="close"
      >
        <Modal.Header content={this.props.title} />

        <Modal.Content>{body}</Modal.Content>

        <Modal.Actions>
          <Button
            onClick={this.close.bind(this)}
            className={`${this.props.containerClass}-close`}
          >
            {this.props.closeBtnLabel}
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default connect(({ auth }) => ({ auth }))(BaseModal);
