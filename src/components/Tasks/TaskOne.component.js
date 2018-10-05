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
            id="task1InputOne"
            name="task1InputOne"
            value={data.task1InputOne}
            onChange={onChange}
          />
        </span>
        nationals who apply for benefits. The habitual
        <span className="c-input c-input--inline">
          <input
            required
            type="text"
            id="task1InputTwo"
            name="task1InputTwo"
            value={data.task1InputTwo}
            onChange={onChange}
          />
        </span>
        part of the test is also carried out on some
        <span className="c-input c-input--inline">
          <input
            required
            type="text"
            id="task1InputThree"
            name="task1InputThree"
            value={data.task1InputThree}
            onChange={onChange}
          />
        </span>
        nationals who have been living or working abroad. However,
        <span className="c-input c-input--inline">
          <input
            required
            type="text"
            id="task1InputFour"
            name="task1InputFour"
            value={data.task1InputFour}
            onChange={onChange}
          />
        </span>
        nationals automatically have the right to reside so don't have to
        satisfy the right to
        <span className="c-input c-input--inline">
          <input
            required
            type="text"
            id="task1InputFive"
            name="task1InputFive"
            value={data.task1InputFive}
            onChange={onChange}
          />
        </span>
        part of the
        <span className="c-input c-input--inline">
          <input
            required
            type="text"
            id="task1InputSix"
            name="task1InputSix"
            value={data.task1InputSix}
            onChange={onChange}
          />
        </span>.
      </p>
    </div>
  </React.Fragment>
);

export default TaskOne;
