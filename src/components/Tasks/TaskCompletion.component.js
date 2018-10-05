import React from "react";

const TaskCompletion = ({ handleFeedbackLinks }) => (
  <React.Fragment>
    <h1>Thanks for completing all the tasks</h1>
    <p>
      Your answers will help improve our advice for clients and other advisers.
    </p>
    <p>
      If you'd like to give extra feedback, email{" "}
      <a href="mailto:userresearch@citizensadvice.org.uk">
        userresearch@citizensadvice.org.uk
      </a>
    </p>

    <h3>Help improve some of our other advice</h3>
    <ul className="o-list o-list--flat">
      <li>
        <a onClick={handleFeedbackLinks} href="javascript:void(0)">
          Universal Credit - 4 tasks (about 5 minutes to complete)
        </a>
      </li>
      <li>
        <a onClick={handleFeedbackLinks} href="javascript:void(0)">
          Debt - 6 tasks (about 15 minutes to complete)
        </a>
      </li>
    </ul>
  </React.Fragment>
);

export default TaskCompletion;
