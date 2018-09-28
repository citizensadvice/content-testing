import React from "react";

class TaskThree extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Tell us where you'd look for advice</h1>
        <p>
          You’re advising a client who wants to apply for JSA. He’s Hungarian
          and has been living the in UK for the past 3 years. He was working
          until a week ago when he was made redundant.
        </p>

        <fieldset className="c-fieldset">
          <legend className="c-label">
            Which page do you think has the right advice for your client?
            <span className="c-label__tag c-label__tag--optional">
              optional
            </span>
            <span className="c-label__metainfo">
              Choose the one you think would be most relevant. If you'd look on
              a different page, select 'other' and tell us where.
            </span>
          </legend>

          <div className="c-fieldset__item">
            <div className="c-radio">
              <input
                id="checkCanGetJsa"
                value="checkCanGetJsa"
                name="applyingForJsa"
                type="radio"
              />
              <label htmlFor="checkCanGetJsa">Check if you can get JSA</label>
            </div>
          </div>

          <div className="c-fieldset__item">
            <div className="c-radio">
              <input
                id="checkCanGetBenefitsIfFromEEA"
                value="checkCanGetBenefitsIfFromEEA"
                name="applyingForJsa"
                type="radio"
              />
              <label htmlFor="checkCanGetBenefitsIfFromEEA">
                Check if you can get benefits if you're from the EEA
              </label>
            </div>
          </div>

          <div className="c-fieldset__item">
            <div className="c-radio">
              <input
                id="gatherEvidenceOfRightToReside"
                value="gatherEvidenceOfRightToReside"
                name="applyingForJsa"
                type="radio"
              />
              <label htmlFor="gatherEvidenceOfRightToReside">
                Gathering evidence to prove your right to reside
              </label>
            </div>
          </div>

          <div className="c-fieldset__item">
            <div className="c-radio">
              <input
                id="checkRedundancyIsfair"
                value="checkRedundancyIsfair"
                name="applyingForJsa"
                type="radio"
              />
              <label htmlFor="checkRedundancyIsfair">
                Check if your redundancy is fair
              </label>
            </div>
          </div>

          <div className="c-fieldset__item">
            <div className="c-radio">
              <input
                id="other"
                value="other"
                name="applyingForJsa"
                type="radio"
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        </fieldset>
      </React.Fragment>
    );
  }
}

export default TaskThree;
