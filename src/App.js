import React from "react";
import GlobalHeader from "./components/GlobalHeader/GlobalHeader.component";
import GlobalFooter from "./components/GlobalFooter/GlobalFooter.component";
import MultiStep from "./components/MultiStep/MultiStep.container";
import Intro from "./components/Intro/Intro.component";
import TaskOne from "./components/Tasks/TaskOne.container";
import TaskTwo from "./components/Tasks/TaskTwo.container";
import TaskThree from "./components/Tasks/TaskThree.container";
import TaskFour from "./components/Tasks/TaskFour.container";
import Completion from "./components/Completion/Completion.container";

const allViews = [
  { name: "Intro", component: Intro },
  { name: "TaskOne", component: TaskOne },
  { name: "TaskTwo", component: TaskTwo },
  { name: "TaskThree", component: TaskThree },
  { name: "TaskFour", component: TaskFour },
  { name: "Completion", component: Completion }
];

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalHeader />

        <div className="c-wrap">
          <div className="o-grid">
            <div className="o-grid__unit o-grid__unit--t-2-3">
              <MultiStep views={allViews} showNavigation />
            </div>
          </div>
        </div>

        <GlobalFooter />
      </React.Fragment>
    );
  }
}

export default App;
