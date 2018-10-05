import React from "react";

const TaskTwo = ({ data, onChange }) => (
  <React.Fragment>
    <h1>Tell us where you'd look for advice</h1>
    <p>
      You’re advising a client who wants to apply for JSA. He’s Hungarian and
      has been living the in UK for the past 3 years. He was working until a
      week ago when he was made redundant.
    </p>

    <fieldset className="c-fieldset">
      <legend className="c-label">
        Which page do you think has the right advice for your client?
        <span className="c-label__tag c-label__tag--optional">optional</span>
        <span className="c-label__metainfo">
          Choose the one you think would be most relevant. If you'd look on a
          different page, select 'other' and tell us where.
        </span>
      </legend>

      <div className="c-fieldset__item">
        <div className="c-radio">
          <input
            type="radio"
            id="checkCanGetJsa"
            name="applyingForJsa"
            value="checkCanGetJsa"
            checked={data.applyingForJsa === "checkCanGetJsa"}
            onChange={onChange}
          />
          <label htmlFor="checkCanGetJsa">Check if you can get JSA</label>
        </div>
      </div>

      <div className="c-fieldset__item">
        <div className="c-radio">
          <input
            type="radio"
            id="checkCanGetBenefitsIfFromEEA"
            name="applyingForJsa"
            value="checkCanGetBenefitsIfFromEEA"
            checked={data.applyingForJsa === "checkCanGetBenefitsIfFromEEA"}
            onChange={onChange}
          />
          <label htmlFor="checkCanGetBenefitsIfFromEEA">
            Check if you can get benefits if you're from the EEA
          </label>
        </div>
      </div>

      <div className="c-fieldset__item">
        <div className="c-radio">
          <input
            type="radio"
            id="gatherEvidenceOfRightToReside"
            name="applyingForJsa"
            value="gatherEvidenceOfRightToReside"
            checked={data.applyingForJsa === "gatherEvidenceOfRightToReside"}
            onChange={onChange}
          />
          <label htmlFor="gatherEvidenceOfRightToReside">
            Gathering evidence to prove your right to reside
          </label>
        </div>
      </div>

      <div className="c-fieldset__item">
        <div className="c-radio">
          <input
            type="radio"
            id="checkRedundancyIsfair"
            name="applyingForJsa"
            value="checkRedundancyIsfair"
            checked={data.applyingForJsa === "checkRedundancyIsfair"}
            onChange={onChange}
          />
          <label htmlFor="checkRedundancyIsfair">
            Check if your redundancy is fair
          </label>
        </div>
      </div>

      <div className="c-fieldset__item">
        <div className="c-radio">
          <input
            type="radio"
            id="other"
            name="applyingForJsa"
            value="other"
            checked={data.applyingForJsa === "other"}
            onChange={onChange}
          />
          <label htmlFor="other">Other</label>
        </div>
      </div>
    </fieldset>
  </React.Fragment>
);

export default TaskTwo;
