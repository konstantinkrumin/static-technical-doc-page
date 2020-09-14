import React from "react";

import Header from "./header";

export default function FlexFlowShorthand() {
  return (
    <section className="main-section" id="flex-flow_shorthand">
      <Header title="flex-flow shorthand" />
      <p>
        At this point it is worth noting that a shorthand exists for{" "}
        <a
          className="flex-direction"
          target="_blank"
          href="https://mzl.la/2vUynlw"
        >
          flex-direction
        </a>{" "}
        and{" "}
        <a className="flex-wrap" target="_blank" href="https://mzl.la/2SAFE1Q">
          flex-wrap
        </a>{" "}
        —{" "}
        <a className="flex-flow" target="_blank" href="https://mzl.la/38cRmWK">
          flex-flow
        </a>
        . So for example, you can replace
      </p>
      <code className="code_separate">
        {`flex-direction: row; 
          flex-wrap: wrap;`}
      </code>
      <p>with</p>
      <code className="code_separate">flex-flow: row wrap;</code>
    </section>
  );
}
