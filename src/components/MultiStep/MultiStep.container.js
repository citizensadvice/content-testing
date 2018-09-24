import React from "react";
import getNavStates from "../../utils/getNavStates";
import checkNavState from "../../utils/checkNavState";

class MultiStep extends React.Component {
  state = {
    showPreviousBtn: false,
    showNextBtn: true,
    compState: 0,
    navState: getNavStates(0, this.props.steps.length)
  };

  _setNavState = next => {
    this.setState({ navState: getNavStates(next, this.props.steps.length) });

    if (next < this.props.steps.length) {
      this.setState({ compState: next });
    }

    this.setState(checkNavState(next, this.props.steps.length));
  };

  _next = () => {
    this._setNavState(this.state.compState + 1);
  };

  _previous = () => {
    if (this.state.compState > 0) {
      this._setNavState(this.state.compState - 1);
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.props.steps[this.state.compState].component}

        <div className="c-btn-container">
          <button
            style={this.state.showPreviousBtn ? {} : { display: "none" }}
            className="c-btn c-btn--primary c-btn--action-prev"
            onClick={this._previous}
          >
            <span className="c-icon c-icon--white c-icon--arrow-left" />Previous
          </button>

          <button
            style={this.state.showNextBtn ? {} : { display: "none" }}
            className="c-btn c-btn--primary"
            onClick={this._next}
          >
            Next<span className="c-icon c-icon--white c-icon--arrow-right" />
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default MultiStep;
