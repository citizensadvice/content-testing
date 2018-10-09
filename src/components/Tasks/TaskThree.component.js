import React from "react";

const TaskThree = ({ data, onChange }) => (
  <React.Fragment>
    <h1>Tell us where you'd look for advice</h1>
    <p>
      You’re advising a client who is Portuguese and has been living in the UK
      for 7 years. He has been working since he arrived in the country. His
      mother is still living in Portugal, but has a medical condition and is no
      longer able to live independently. Your client wants to know whether he
      will be able to claim benefits for caring for his mother if he moves her
      into his flat.
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
            id="carersAllowance"
            name="task3"
            value="carersAllowance"
            checked={data.task3 === "carersAllowance"}
            onChange={onChange}
          />
          <label htmlFor="carersAllowance">Carer's Allowance</label>
        </div>
      </div>

      <div className="c-fieldset__item">
        <div className="c-radio">
          <input
            type="radio"
            id="checkCanReceiveBenefitsFromEea"
            name="task3"
            value="checkCanReceiveBenefitsFromEea"
            checked={data.task3 === "checkCanReceiveBenefitsFromEea"}
            onChange={onChange}
          />
          <label htmlFor="checkCanReceiveBenefitsFromEea">
            Check if you can get benefits if you're from the EEA
          </label>
        </div>
      </div>

      <div className="c-fieldset__item">
        <div className="c-radio">
          <input
            type="radio"
            id="eeaNationalsClaimBenefitsForFamilyMember"
            name="task3"
            value="eeaNationalsClaimBenefitsForFamilyMember"
            checked={data.task3 === "eeaNationalsClaimBenefitsForFamilyMember"}
            onChange={onChange}
          />
          <label htmlFor="eeaNationalsClaimBenefitsForFamilyMember">
            EEA nationals &ndash; claiming benefits as a family member
          </label>
        </div>
      </div>

      <div className="c-fieldset__item">
        <div className="c-radio">
          <input
            type="radio"
            id="gatherEvidenceForRightToReside"
            name="task3"
            value="gatherEvidenceForRightToReside"
            checked={data.task3 === "gatherEvidenceForRightToReside"}
            onChange={onChange}
          />
          <label htmlFor="gatherEvidenceForRightToReside">
            Gathering evidence to prove your right to reside
          </label>
        </div>
      </div>

      <div className="c-fieldset__item">
        <div className="c-radio">
          <input
            type="radio"
            id="checkCanPassHabitualResidenceTest"
            name="task3"
            value="checkCanPassHabitualResidenceTest"
            checked={data.task3 === "checkCanPassHabitualResidenceTest"}
            onChange={onChange}
          />
          <label htmlFor="checkCanPassHabitualResidenceTest">
            Check if you can pass the habitual residence test
          </label>
        </div>
      </div>

      <div className="c-fieldset__item">
        <div className="c-radio">
          <input
            type="radio"
            id="other"
            name="task3"
            value="other"
            checked={data.task3 === "other"}
            onChange={onChange}
          />
          <label htmlFor="other">Other</label>
        </div>

        <div
          className="c-input u-spacingTop--xs"
          style={data.task3 === "other" ? {} : { display: "none" }}
        >
          <input
            required
            type="text"
            id="task3suggestion"
            name="task3suggestion"
            value={data.task3suggestion}
            onChange={onChange}
          />
        </div>
      </div>
    </fieldset>
  </React.Fragment>
);

export default TaskThree;
