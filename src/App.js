import React from "react";
import GlobalHeader from "./components/GlobalHeader/GlobalHeader.component";
import GlobalFooter from "./components/GlobalFooter/GlobalFooter.component";
import MultiStep from "./components/MultiStep/MultiStep.container";
import Intro from "./components/Intro/Intro.component";
import TaskOne from "./components/Tasks/TaskOne.component";
import TaskTwo from "./components/Tasks/TaskTwo.component";
import TaskThree from "./components/Tasks/TaskThree.component";
import TaskFour from "./components/Tasks/TaskFour.component";
import TaskCompletion from "./components/Tasks/TaskCompletion.component";
import Completion from "./components/Completion/Completion.component";

const allViews = [
  { name: "Intro", component: Intro },
  { name: "TaskOne", component: TaskOne },
  { name: "TaskTwo", component: TaskTwo },
  { name: "TaskThree", component: TaskThree },
  { name: "TaskFour", component: TaskFour },
  { name: "TaskCompletion", component: TaskCompletion },
  { name: "Completion", component: Completion }
];

class App extends React.Component {
  render() {
    return (
      <div className="c-app-container">
        <GlobalHeader />

        <main className="c-app-content">
          <div className="c-wrap">
            <div className="o-grid">
              <div className="o-grid__unit o-grid__unit--t-2-3">
                  <MultiStep views={allViews} showNavigation />
              </div>
            </div>
          </div>
        </main>

        <GlobalFooter />
      </div>
    );
  }
}

export default App;
