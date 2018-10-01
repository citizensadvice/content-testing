import React from "react";

class TaskTwo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Fill in the blanks</h1>
        <p>
          We want to find out how clear our advice on complex legal issues is.
          This is an excerpt from a page explaining the Habitual Residence Test,
          which is used to determine whether someone has the right to live in
          the UK as well as whether they intend to settle here. We've removed a
          few words from the paragraph below.
        </p>
        <p>
          <strong>
            Fill in the blanks with whatever words you think fit best.
          </strong>
          <br />
          If you aren't sure which word to use in a space, you can leave it
          blank. There are no right or wrong answers
        </p>

        <div className="u-inlineParagraphs">
          <p>
            The habitual residence test is carried out on most
            <div className="c-input c-input--inline">
              <input id="firstname" type="text" required />
            </div>
            nationals who apply for benefits. The habitual
            <div className="c-input c-input--inline">
              <input id="firstname" type="text" required />
            </div>
            part of the test is also carried out on some
            <div className="c-input c-input--inline">
              <input id="firstname" type="text" required />
            </div>
            nationals who have been living or working abroad. However,
            <div className="c-input c-input--inline">
              <input id="firstname" type="text" required />
            </div>
            nationals automatically have the right to reside so don't have to
            satisfy the right to
            <div className="c-input c-input--inline">
              <input id="firstname" type="text" required />
            </div>
            part of the
            <div className="c-input c-input--inline">
              <input id="firstname" type="text" required />
            </div>.
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default TaskTwo;
