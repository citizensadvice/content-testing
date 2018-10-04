import React from "react";

class TaskFour extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Tell us where you'd look for advice</h1>
        <p>
          You’re advising a client who is Portuguese and has been living in the
          UK for 7 years. He has been working since he arrived in the country.
          His mother is still living in Portugal, but has a medical condition
          and is no longer able to live independently. Your client wants to know
          whether he will be able to claim benefits for caring for his mother if
          he moves her into his flat.
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
                type="radio"
                id="carersAllowance"
                name="portugueseNationalClaimUc"
                value="carersAllowance"
                checked={
                  this.props.data.portugueseNationalClaimUc ===
                  "carersAllowance"
                }
                onChange={this.props.onChange}
              />
              <label htmlFor="carersAllowance">Carer's Allowance</label>
            </div>
          </div>

          <div className="c-fieldset__item">
            <div className="c-radio">
              <input
                type="radio"
                id="checkCanReceiveBenefitsFromEea"
                name="portugueseNationalClaimUc"
                value="checkCanReceiveBenefitsFromEea"
                checked={
                  this.props.data.portugueseNationalClaimUc ===
                  "checkCanReceiveBenefitsFromEea"
                }
                onChange={this.props.onChange}
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
                name="portugueseNationalClaimUc"
                value="eeaNationalsClaimBenefitsForFamilyMember"
                checked={
                  this.props.data.portugueseNationalClaimUc ===
                  "eeaNationalsClaimBenefitsForFamilyMember"
                }
                onChange={this.props.onChange}
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
                name="portugueseNationalClaimUc"
                value="gatherEvidenceForRightToReside"
                checked={
                  this.props.data.portugueseNationalClaimUc ===
                  "gatherEvidenceForRightToReside"
                }
                onChange={this.props.onChange}
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
                name="portugueseNationalClaimUc"
                value="checkCanPassHabitualResidenceTest"
                checked={
                  this.props.data.portugueseNationalClaimUc ===
                  "checkCanPassHabitualResidenceTest"
                }
                onChange={this.props.onChange}
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
                name="portugueseNationalClaimUc"
                value="other"
                checked={this.props.data.portugueseNationalClaimUc === "other"}
                onChange={this.props.onChange}
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        </fieldset>
      </React.Fragment>
    );
  }
}

export default TaskFour;
