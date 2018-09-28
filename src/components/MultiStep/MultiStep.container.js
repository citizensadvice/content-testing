import React from "react";
import getNavStates from "./utils/getNavStates";
import checkNavState from "./utils/checkNavState";
import Button from "../Button/Button.component";
import Icon from "../Icon/Icon.component";

class MultiStep extends React.Component {
  state = {
    showNavigation: this.props.showNavigation,
    showSubmitBtn: false,
    showStartBtn: true,
    showPrevBtn: false,
    showNextBtn: false,
    currentIndex: 0
  };

  _setNavState = next => {
    if (next < this.props.views.length) {
      this.setState({ currentIndex: next });
    }

    this.setState(checkNavState(next, this.props.views.length));
  };

  handlePrevious = () => {
    if (this.state.currentIndex > 0) {
      this._setNavState(this.state.currentIndex - 1);
    }
  };

  handleNext = () => {
    this._setNavState(this.state.currentIndex + 1);
  };

  handleSubmit = () => {
    alert("Form submitted");
    this._setNavState(this.state.currentIndex + 1);
  };

  render() {
    return (
      <React.Fragment>
        {this.props.views[this.state.currentIndex].component}

        <div
          className="c-btn-container"
          style={this.state.showNavigation ? {} : { display: "none" }}
        >
          <Button
            buttonType="primary"
            buttonOnClick={this.handleNext}
            inlineStyles={this.state.showStartBtn ? {} : { display: "none" }}
          >
            Start<Icon iconType="arrow-right" iconColor="white" />
          </Button>

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
            Submit tasks<Icon iconType="arrow-right" iconColor="white" />
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default MultiStep;
