import React from "react";

class TaskFive extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Tell us where you'd look for advice</h1>
        <p>
          You're in the Benefits section of the public website and you see this
          page title:
        </p>

        <h3>If you're a UK citizen returning from abroad</h3>

        <fieldset className="c-fieldset">
          <legend className="c-label">
            Tell us what you'd expect to find on the page
            <span className="c-label__tag c-label__tag--optional">
              optional
            </span>
            <span className="c-label__metainfo">
              You can choose more than one answer.
            </span>
          </legend>

          <div className="c-fieldset__item">
            <div className="c-checkbox">
              <input
                type="checkbox"
                id="howTimeAbroadAffectsBenefitClaims"
                name="returningFromAbroadPageLocation"
                value="howTimeAbroadAffectsBenefitClaims"
                checked={this.props.data.returningFromAbroadPageLocation.includes(
                  "howTimeAbroadAffectsBenefitClaims"
                )}
                onChange={this.props.onChange}
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
                name="returningFromAbroadPageLocation"
                value="stepsWhenReturningToUk"
                checked={this.props.data.returningFromAbroadPageLocation.includes(
                  "stepsWhenReturningToUk"
                )}
                onChange={this.props.onChange}
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
                name="returningFromAbroadPageLocation"
                value="infoForIrishCitizens"
                checked={this.props.data.returningFromAbroadPageLocation.includes(
                  "infoForIrishCitizens"
                )}
                onChange={this.props.onChange}
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
                name="returningFromAbroadPageLocation"
                value="eligibilityCriteriaForBenefits"
                checked={this.props.data.returningFromAbroadPageLocation.includes(
                  "eligibilityCriteriaForBenefits"
                )}
                onChange={this.props.onChange}
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
                name="returningFromAbroadPageLocation"
                value="other"
                checked={this.props.data.returningFromAbroadPageLocation.includes(
                  "other"
                )}
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

export default TaskFive;
