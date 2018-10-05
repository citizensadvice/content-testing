import React from "react";
import checkNavState from "./utils/checkNavState";
import Button from "../Button/Button.component";
import Icon from "../Icon/Icon.component";
import firebase from "../../utils/firebase";

class MultiStep extends React.Component {
  state = {
    showNavigation: this.props.showNavigation,
    showSubmitBtn: false,
    showStartBtn: true,
    showPrevBtn: false,
    showNextBtn: false,
    currentIndex: 0,
    taskData: {
      task1InputOne: "",
      task1InputTwo: "",
      task1InputThree: "",
      task1InputFour: "",
      task1InputFive: "",
      task1InputSix: "",
      task2: "",
      task3: "",
      task4: []
    }
  };

  _setNavState = next => {
    if (next < this.props.views.length) {
      this.setState({ currentIndex: next });
    }

    this.setState(checkNavState(next, this.props.views.length));
  };

  handlePrevious = e => {
    e.preventDefault();
    if (this.state.currentIndex > 0) {
      this._setNavState(this.state.currentIndex - 1);
    }
  };

  handleNext = e => {
    e.preventDefault();
    this._setNavState(this.state.currentIndex + 1);
  };

  handleSubmit = e => {
    e.preventDefault();
    this._setNavState(this.state.currentIndex + 1);
    const tasksRef = firebase.database().ref("tests");
    const payload = {
      task1: {
        input1: this.state.taskData.task1InputOne,
        input2: this.state.taskData.task1InputTwo,
        input3: this.state.taskData.task1InputThree,
        input4: this.state.taskData.task1InputFour,
        input5: this.state.taskData.task1InputFive,
        input6: this.state.taskData.task1InputSix
      },
      task2: this.state.taskData.task2,
      task3: this.state.taskData.task3,
      task4: this.state.taskData.task4
    };
    tasksRef.push(payload);

    this.setState({
      taskData: {
        task1InputOne: "",
        task1InputTwo: "",
        task1InputThree: "",
        task1InputFour: "",
        task1InputFive: "",
        task1InputSix: "",
        task2: "",
        task3: "",
        task4: []
      }
    });
  };

  handleChange = e => {
    // a little destructuring to get the inputs state
    const { checked, name, value, type } = e.currentTarget;
    this.setState(prevState => {
      if (type === "checkbox") {
        return {
          // update the state based on whether the inputs are checked or not.
          // the true result of the ternirary ADD's an item to the array,
          // whilst the false result REMOVE's an item.
          taskData: Object.assign({}, prevState.taskData, {
            [name]: checked
              ? prevState.taskData[name].filter(Boolean).concat([value])
              : prevState.taskData[name].filter(item => item !== value)
          })
        };
      } else {
        return {
          // merge the previous state.taskData with a new object containing
          // the name and value variables assigned previously.
          taskData: Object.assign({}, prevState.taskData, {
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
        <Component
          data={this.state.taskData}
          onChange={this.handleChange}
          handleFeedbackLinks={this.handleNext}
        />

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
