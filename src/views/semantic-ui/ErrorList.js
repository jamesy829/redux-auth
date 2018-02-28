import React from "react";
import PropTypes from "prop-types";
import { Icon } from "semantic-ui-react";
import Immutable from "immutable";

class ErrorList extends React.Component {
  static propTypes = {
    errors: PropTypes.object
  };

  static defaultProps = {
    errors: Immutable.fromJS([])
  };

  renderErrorList() {
    let errorCount = (this.props.errors || Immutable.fromJS([])).size;

    if (errorCount > 0) {
      // pluralize message
      let errorWord = "error";
      errorWord += errorCount === 1 ? "" : "s";

      return (
        <div className="has-error">
          <p>Please correct the following {errorWord}:</p>
          {this.props.errors.map((err, i) => {
            return (
              <p
                key={i}
                className="control-label modal-error-item"
                style={{ paddingLeft: "20px", position: "relative" }}
              >
                <Icon
                  name="attention"
                  style={{ position: "absolute", left: 0, top: 2 }}
                />{" "}
                {err}
              </p>
            );
          })}
        </div>
      );
    } else {
      return (
        <p>
          <Icon name="attention" /> There was an error processing this form.
          Please check each field and try again.
        </p>
      );
    }
  }

  render() {
    return <div className="auth-error-message">{this.renderErrorList()}</div>;
  }
}

export default ErrorList;
