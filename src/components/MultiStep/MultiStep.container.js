import React from "react";
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
    currentIndex: 0,
    data: {
      taskTwoInputOne: "",
      taskTwoInputTwo: "",
      taskTwoInputThree: "",
      taskTwoInputFour: "",
      taskTwoInputFive: "",
      taskTwoInputSix: "",
      applyingForJsa: "",
      portugueseNationalClaimUc: "",
      returningFromAbroadPageLocation: []
    }
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

  handleSubmit = e => {
    e.preventDefault();
    // do firebase post here...
    this._setNavState(this.state.currentIndex + 1);
    alert("Form submitted");
    console.log(this.state.data);
  };

  handleChange = e => {
    // a little destructuring to get the inputs state
    const { checked, name, value, type } = e.currentTarget;
    this.setState(prevState => {
      if (type === "checkbox") {
        console.log(prevState.data[name]);
        console.log(prevState.data[name].filter(Boolean).concat([value]));
        return {
          // update the state based on whether the inputs are checked or not.
          // the true result of the ternirary ADD's an item to the array,
          // whilst the false result REMOVE's an item.
          data: Object.assign({}, prevState.data, {
            [name]: checked
              ? prevState.data[name].filter(Boolean).concat([value])
              : prevState.data[name].filter(item => item !== value)
          })
        };
      } else {
        return {
          // merge the previous state.data with a new object containing
          // the name and value variables assigned previously.
          data: Object.assign({}, prevState.data, {
            [name]: value
          })
        };
      }
    });
  };

  render() {
    const Component = this.props.views[this.state.currentIndex].component;
    return (
      <React.Fragment>
        <Component data={this.state.data} onChange={this.handleChange} />

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
