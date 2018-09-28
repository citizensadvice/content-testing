import React from "react";

class Completion extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>You've completed all the tasks for this content</h1>
        <p>
          Thanks for completing the tasks &ndash; your answers will help improve
          the new advice for clients and other advisers.
        </p>
        <p>
          If you'd like to give extra feedback, email{" "}
          <a href="mailto:userresearch@citizensadvice.org.uk">
            userresearch@citizensadvice.org.uk
          </a>
        </p>
        <h3>More tasks</h3>
        <ul>
          <li>
            <a href="#">Help improve our new advice about Universal Credit</a>
            <br />
            4 tasks (about 5 minutes to complete)
          </li>
          <li>
            <a href="#">Help improve our new advice about debt</a>
            <br />
            6 tasks (about 15 minutes to complete)
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Completion;
