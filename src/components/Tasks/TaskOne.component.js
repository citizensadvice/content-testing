import React from "react";

const TaskOne = ({ data, onChange }) => (
  <React.Fragment>
    <h1>Fill in the blanks</h1>
    <p>
      We want to find out how clear our advice on complex legal issues is. This
      is an excerpt from a page explaining the Habitual Residence Test, which is
      used to determine whether someone has the right to live in the UK as well
      as whether they intend to settle here. We've removed a few words from the
      paragraph below.
    </p>
    <p>
      <strong>
        Fill in the blanks with whatever words you think fit best.
      </strong>
      <br />
      <span className="c-label__metainfo">
        If you aren't sure which word to use in a space, you can leave it blank.
        There are no right or wrong answers.
      </span>
    </p>

    <div className="u-inlineParagraphs">
      <p>
        The habitual residence test is carried out on most
        <span className="c-input c-input--inline">
          <input
            required
            type="text"
            name="taskTwoInputOne"
            id="taskTwoInputOne"
            value={data.taskTwoInputOne}
            onChange={onChange}
          />
        </span>
        nationals who apply for benefits. The habitual
        <span className="c-input c-input--inline">
          <input
            required
            type="text"
            name="taskTwoInputTwo"
            id="taskTwoInputTwo"
            value={data.taskTwoInputTwo}
            onChange={onChange}
          />
        </span>
        part of the test is also carried out on some
        <span className="c-input c-input--inline">
          <input
            required
            type="text"
            name="taskTwoInputThree"
            id="taskTwoInputThree"
            value={data.taskTwoInputThree}
            onChange={onChange}
          />
        </span>
        nationals who have been living or working abroad. However,
        <span className="c-input c-input--inline">
          <input
            required
            type="text"
            name="taskTwoInputFour"
            id="taskTwoInputFour"
            value={data.taskTwoInputFour}
            onChange={onChange}
          />
        </span>
        nationals automatically have the right to reside so don't have to
        satisfy the right to
        <span className="c-input c-input--inline">
          <input
            required
            type="text"
            name="taskTwoInputFive"
            id="taskTwoInputFive"
            value={data.taskTwoInputFive}
            onChange={onChange}
          />
        </span>
        part of the
        <span className="c-input c-input--inline">
          <input
            required
            type="text"
            name="taskTwoInputSix"
            id="taskTwoInputSix"
            value={data.taskTwoInputSix}
            onChange={onChange}
          />
        </span>.
      </p>
    </div>
  </React.Fragment>
);

export default TaskOne;
