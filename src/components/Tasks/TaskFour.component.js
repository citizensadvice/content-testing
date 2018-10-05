import React from "react";

const TaskFour = ({ data, onChange }) => (
  <React.Fragment>
    <h1>Tell us where you'd look for advice</h1>
    <p>
      You're in the Benefits section of the public website and you see this page
      title:
    </p>

    <h3>If you're a UK citizen returning from abroad</h3>

    <fieldset className="c-fieldset">
      <legend className="c-label">
        Tell us what you'd expect to find on the page
        <span className="c-label__tag c-label__tag--optional">optional</span>
        <span className="c-label__metainfo">
          You can choose more than one answer.
        </span>
      </legend>

      <div className="c-fieldset__item">
        <div className="c-checkbox">
          <input
            type="checkbox"
            id="howTimeAbroadAffectsBenefitClaims"
            name="task4"
            value="howTimeAbroadAffectsBenefitClaims"
            checked={data.task4.includes("howTimeAbroadAffectsBenefitClaims")}
            onChange={onChange}
          />
          <label htmlFor="howTimeAbroadAffectsBenefitClaims">
            How time spent abroad affects benefit claims
          </label>
        </div>
      </div>

      <div className="c-fieldset__item">
        <div className="c-checkbox">
          <input
            type="checkbox"
            id="stepsWhenReturningToUk"
            name="task4"
            value="stepsWhenReturningToUk"
            checked={data.task4.includes("stepsWhenReturningToUk")}
            onChange={onChange}
          />
          <label htmlFor="stepsWhenReturningToUk">
            Steps to take when returning to the UK
          </label>
        </div>
      </div>

      <div className="c-fieldset__item">
        <div className="c-checkbox">
          <input
            type="checkbox"
            id="infoForIrishCitizens"
            name="task4"
            value="infoForIrishCitizens"
            checked={data.task4.includes("infoForIrishCitizens")}
            onChange={onChange}
          />
          <label htmlFor="infoForIrishCitizens">
            Information for Irish citizens
          </label>
        </div>
      </div>

      <div className="c-fieldset__item">
        <div className="c-checkbox">
          <input
            type="checkbox"
            id="eligibilityCriteriaForBenefits"
            name="task4"
            value="eligibilityCriteriaForBenefits"
            checked={data.task4.includes("eligibilityCriteriaForBenefits")}
            onChange={onChange}
          />
          <label htmlFor="eligibilityCriteriaForBenefits">
            Eligibility criteria for benefits
          </label>
        </div>
      </div>

      <div className="c-fieldset__item">
        <div className="c-checkbox">
          <input
            type="checkbox"
            id="other"
            name="task4"
            value="other"
            checked={data.task4.includes("other")}
            onChange={onChange}
          />
          <label htmlFor="other">Other</label>
        </div>
      </div>
    </fieldset>
  </React.Fragment>
);

export default TaskFour;
