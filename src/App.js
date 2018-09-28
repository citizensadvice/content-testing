import React from "react";
import GlobalHeader from "./components/GlobalHeader/GlobalHeader.component";
import GlobalFooter from "./components/GlobalFooter/GlobalFooter.component";
import MultiStep from "./components/MultiStep/MultiStep.container";
import StepOne from "./components/StepOne/StepOne.component";
import StepTwo from "./components/StepTwo/StepTwo.component";
import StepThree from "./components/StepThree/StepThree.component";
import StepFour from "./components/StepFour/StepFour.component";

const steps = [
  { name: "StepOne", component: <StepOne /> },
  { name: "StepTwo", component: <StepTwo /> },
  { name: "StepThree", component: <StepThree /> },
  { name: "StepFour", component: <StepFour /> }
];

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalHeader />

        <div className="c-wrap">
          <div className="o-grid">
            <div className="o-grid__unit o-grid__unit--t-2-3">
              <MultiStep steps={steps} />
            </div>
          </div>
        </div>

        <GlobalFooter />
      </React.Fragment>
    );
  }
}

export default App;
