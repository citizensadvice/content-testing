import React from "react";

class StepThree extends React.Component {
  state = {
    value: ""
  };

  _handleInputChange = event => {
    const target = event.target;
    const name = target.name;
    const value =
      target.type === "checkbox" || target.type === "radio"
        ? target.checked
        : target.value;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Fill in the blanks</h1>
        <h2>Universal Credit feedback</h2>

        <fieldset class="c-fieldset c-radio-show-hide">
          <legend class="c-label">
            What type of role do you have?<span class="c-label__tag c-label__tag--optional">
              optional
            </span>
          </legend>

          <div class="c-fieldset__item">
            <div class="c-radio" data-radioId="1">
              <input
                id="gateway-assesor"
                value="gateway-assesor"
                name="typeOfRole"
                type="radio"
                onChange={this._handleInputChange}
              />
              <label for="gateway-assesor">Gateway assessor</label>
            </div>
          </div>
          <div class="c-fieldset__item">
            <div class="c-radio" data-radioId="2">
              <input
                id="generalist-adviser"
                value="generalist-adviser"
                name="typeOfRole"
                type="radio"
                onChange={this._handleInputChange}
              />
              <label for="generalist-adviser">Generalist adviser</label>
            </div>
          </div>
          <div class="c-fieldset__item">
            <div class="c-radio" data-radioId="3">
              <input
                id="specialist-adviser"
                value="specialist-adviser"
                name="typeOfRole"
                type="radio"
                onChange={this._handleInputChange}
              />
              <label for="specialist-adviser">Specialist adviser</label>
            </div>
          </div>

          <div class="extrafield">
            <fieldset class="c-fieldset__item">
              <label class="c-label" for="area-of-specialism">
                Area of specialism
              </label>
              <div class="c-input">
                <input id="area-of-specialism" type="text" required />
              </div>
            </fieldset>
          </div>
          <div class="c-fieldset__item">
            <div class="c-radio" data-radioId="4">
              <input
                id="chief-officer"
                value="chief-officer"
                name="typeOfRole"
                type="radio"
                onChange={this._handleInputChange}
              />
              <label for="chief-officer">Chief Officer</label>
            </div>
          </div>

          <div class="c-fieldset__item">
            <div class="c-radio" data-radioId="5">
              <input
                id="other"
                value="other"
                name="typeOfRole"
                type="radio"
                onChange={this._handleInputChange}
              />
              <label for="other">Other</label>
            </div>
          </div>
        </fieldset>
      </React.Fragment>
    );
  }
}

export default StepThree;
