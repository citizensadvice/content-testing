import React from "react";
import getNavStates from "./utils/getNavStates";
import checkNavState from "./utils/checkNavState";
import Button from "../Button/Button.component";
import Icon from "../Icon/Icon.component";

class MultiStep extends React.Component {
  state = {
    showPreviousBtn: false,
    showNextBtn: true,
    showSubmitBtn: false,
    compState: 0,
    navState: getNavStates(0, this.props.steps.length)
  };

  _setNavState = next => {
    if (next < this.props.steps.length) {
      this.setState({ compState: next });
    }

    this.setState(checkNavState(next, this.props.steps.length));
  };

  handlePrevious = () => {
    if (this.state.compState > 0) {
      this._setNavState(this.state.compState - 1);
    }
  };

  handleNext = () => {
    this._setNavState(this.state.compState + 1);
  };

  handleSubmit = () => {
    alert("Form submitted");
  };

  render() {
    return (
      <React.Fragment>
        {this.props.steps[this.state.compState].component}

        <div className="c-btn-container">
          <Button
            buttonType="primary"
            buttonAction="prev"
            buttonOnClick={this.handlePrevious}
            inlineStyles={this.state.showPreviousBtn ? {} : { display: "none" }}
          >
            <Icon iconType="arrow-left" iconColor="white" />Previous
          </Button>

          <Button
            buttonType="primary"
            buttonOnClick={this.handleNext}
            inlineStyles={this.state.showNextBtn ? {} : { display: "none" }}
          >
            Next<Icon iconType="arrow-right" iconColor="white" />
          </Button>

          <Button
            buttonType="primary"
            buttonOnClick={this.handleSubmit}
            inlineStyles={this.state.showSubmitBtn ? {} : { display: "none" }}
          >
            Next<Icon iconType="arrow-right" iconColor="white" />
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default MultiStep;
