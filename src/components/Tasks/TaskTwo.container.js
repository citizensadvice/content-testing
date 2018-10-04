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
          <span className="c-label__metainfo">
            If you aren't sure which word to use in a space, you can leave it
            blank. There are no right or wrong answers.
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
                value={this.props.data.taskTwoInputOne}
                onChange={this.props.onChange}
              />
            </span>
            nationals who apply for benefits. The habitual
            <span className="c-input c-input--inline">
              <input
                required
                type="text"
                name="taskTwoInputTwo"
                id="taskTwoInputTwo"
                value={this.props.data.taskTwoInputTwo}
                onChange={this.props.onChange}
              />
            </span>
            part of the test is also carried out on some
            <span className="c-input c-input--inline">
              <input
                required
                type="text"
                name="taskTwoInputThree"
                id="taskTwoInputThree"
                value={this.props.data.taskTwoInputThree}
                onChange={this.props.onChange}
              />
            </span>
            nationals who have been living or working abroad. However,
            <span className="c-input c-input--inline">
              <input
                required
                type="text"
                name="taskTwoInputFour"
                id="taskTwoInputFour"
                value={this.props.data.taskTwoInputFour}
                onChange={this.props.onChange}
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
                value={this.props.data.taskTwoInputFive}
                onChange={this.props.onChange}
              />
            </span>
            part of the
            <span className="c-input c-input--inline">
              <input
                required
                type="text"
                name="taskTwoInputSix"
                id="taskTwoInputSix"
                value={this.props.data.taskTwoInputSix}
                onChange={this.props.onChange}
              />
            </span>.
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default TaskTwo;
