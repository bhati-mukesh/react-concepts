import { useState } from "react";
import Panel from "./Panel";
import Tabs from "./Tabs";

const items = [{ title: "Tab 1" }, { title: "Tab 2" }, { title: "Tab 3" }];

export default function App() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="App">
      <div className="tabs-outer-container">
        {/* optionally can pass active class for custom css  activeClass="activa"*/}
        <Tabs items={items} onChange={setTabIndex}>
          <div className="tabs-panel-container">
            <Panel index={0} value={tabIndex}>
              Panel 1
            </Panel>
            <Panel index={1} value={tabIndex}>
              Panel 2
            </Panel>
            <Panel index={2} value={tabIndex}>
              Panel 3
            </Panel>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
