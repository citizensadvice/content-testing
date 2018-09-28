import React from "react";

const StepFour = () => {
  return (
    <React.Fragment>
      <h1>Fill in the blanks </h1>
      <h2>Universal Credit feedback </h2>

      <fieldset class="c-fieldset">
        <legend class="c-label">
          How long have you been in your role?<span class="c-label__tag c-label__tag--optional">
            optional
          </span>
        </legend>
        <div class="c-fieldset__item">
          <div class="c-radio " data-radioId="1">
            <input
              id="less-than-1-year"
              value="less-than-1-year"
              name="feedback"
              type="radio"
            />
            <label for="less-than-1-year">Less than 1 year</label>
          </div>
        </div>
        <div class="c-fieldset__item">
          <div class="c-radio" data-radioId="2">
            <input
              id="1-5 years"
              value="1-5 years"
              value="1-5 years"
              name="feedback"
              type="radio"
            />
            <label for="1-5 years">1-5 years</label>
          </div>
        </div>
        <div class="c-fieldset__item">
          <div class="c-radio" data-radioId="3">
            <input
              id="over-5-years"
              value="over-5-years"
              name="feedback"
              type="radio"
            />
            <label for="over-5-years">Over 5 years</label>
          </div>
        </div>
      </fieldset>
    </React.Fragment>
  );
};

export default StepFour;
