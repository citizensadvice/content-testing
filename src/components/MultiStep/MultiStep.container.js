import React from "react";
import checkNavState from "./utils/checkNavState";
import Button from "../Button/Button.component";
import Icon from "../Icon/Icon.component";
import firebase from "../../utils/firebase";
import { timestamp } from "../../utils/timestamp";

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
      task2suggestion: "",
      task3: "",
      task3suggestion: "",
      task4: [],
      task4suggestion: "",
    },
  };

  componentDidMount() {
    window.dataLayer.push({ page: 1 });
  }

  _setNavState = (next) => {
    if (next < this.props.views.length) {
      this.setState({ currentIndex: next });
    }

    this.setState(checkNavState(next, this.props.views.length));
  };

  handlePrevious = (e) => {
    e.preventDefault();
    if (this.state.currentIndex > 0) {
      this._setNavState(this.state.currentIndex - 1);
      window.dataLayer.push({ page: this.state.currentIndex - 2 });
    }
  };

  handleNext = (e) => {
    e.preventDefault();
    this._setNavState(this.state.currentIndex + 1);
    window.dataLayer.push({ page: this.state.currentIndex + 2 });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this._setNavState(this.state.currentIndex + 1);

    // tell firebase how to structure the data under
    // a specific key... "tasks" in this instance.
    const tasksRef = firebase.database().ref("tasks");

    // create a payload...
    // could destructure this to give default values and neaten
    // this up.
    const payload = {
      id: timestamp.create(),
      task1: {
        input1: this.state.taskData.task1InputOne,
        input2: this.state.taskData.task1InputTwo,
        input3: this.state.taskData.task1InputThree,
        input4: this.state.taskData.task1InputFour,
        input5: this.state.taskData.task1InputFive,
        input6: this.state.taskData.task1InputSix,
      },
      task2: {
        selected: this.state.taskData.task2,
        suggested: this.state.taskData.task2suggestion,
      },
      task3: {
        selected: this.state.taskData.task3,
        suggested: this.state.taskData.task3suggestion,
      },
      task4: {
        selected: this.state.taskData.task4,
        suggested: this.state.taskData.task4suggestion,
      },
    };
    // ...send the payload off to firebase.
    tasksRef.push(payload);

    // reset the taskData state
    this.setState({
      taskData: {
        task1InputOne: "",
        task1InputTwo: "",
        task1InputThree: "",
        task1InputFour: "",
        task1InputFive: "",
        task1InputSix: "",
        task2: "",
        task2suggestion: "",
        task3: "",
        task3suggestion: "",
        task4: [],
        task4suggestion: "",
      },
    });
    window.dataLayer.push({ page: this.state.currentIndex + 2 });
  };

  handleChange = (e) => {
    // a little destructuring to get the inputs state
    const { checked, name, value, type } = e.currentTarget;
    this.setState((prevState) => {
      if (type === "checkbox") {
        return {
          // update the state based on whether the inputs are checked or not.
          // the true result of the ternirary ADD's an item to the array,
          // whilst the false result REMOVE's an item.
          taskData: Object.assign({}, prevState.taskData, {
            [name]: checked
              ? prevState.taskData[name].filter(Boolean).concat([value])
              : prevState.taskData[name].filter((item) => item !== value),
          }),
        };
      } else {
        return {
          // merge the previous state.taskData with a new object containing
          // the name and value variables assigned previously.
          taskData: Object.assign({}, prevState.taskData, {
            [name]: value,
          }),
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
          style={this.state.showNavigation ? {} : { display: "none" }}>
          <Button
            buttonType="primary"
            buttonOnClick={this.handleNext}
            inlineStyles={this.state.showStartBtn ? {} : { display: "none" }}>
            Start
            <Icon iconType="arrow-right" iconColor="white" />
          </Button>

          <Button
            buttonType="primary"
            buttonAction="prev"
            buttonOnClick={this.handlePrevious}
            inlineStyles={
              this.state.showPreviousBtn ? {} : { display: "none" }
            }>
            <Icon iconType="arrow-left" iconColor="white" />
            Previous
          </Button>

          <Button
            buttonType="primary"
            buttonOnClick={this.handleNext}
            inlineStyles={this.state.showNextBtn ? {} : { display: "none" }}>
            Next
            <Icon iconType="arrow-right" iconColor="white" />
          </Button>

          <Button
            buttonType="primary"
            buttonOnClick={this.handleSubmit}
            inlineStyles={this.state.showSubmitBtn ? {} : { display: "none" }}>
            Submit tasks
            <Icon iconType="arrow-right" iconColor="white" />
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default MultiStep;
