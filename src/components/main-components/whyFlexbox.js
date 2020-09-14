import React from "react";

import Header from "./header";

export default function WhyFlexbox() {
  return (
    <section className="main-section" id="Why_Flexbox?">
      <Header title="Why Flexbox?" />
      <p>
        For a long time, the only reliable cross browser-compatible tools
        available for creating CSS layouts were things like{" "}
        <a id="floats_link" target="_blank" href="https://mzl.la/2Uyh3ND">
          floats
        </a>{" "}
        and{" "}
        <a id="positioning_link" target="_blank" href="https://mzl.la/2tF6zAT">
          positioning
        </a>
        . These are fine and they work, but in some ways they are also rather
        limiting and frustrating.
      </p>
      <p>
        The following simple layout requirements are either difficult or
        impossible to achieve with such tools, in any kind of convenient,
        flexible way:
      </p>
      <ul>
        <li>Vertically centering a block of content inside its parent.</li>
        <li>
          Making all the children of a container take up an equal amount of the
          available width/height, regardless of how much width/height is
          available.
        </li>
        <li>
          Making all columns in a multiple column layout adopt the same height
          even if they contain a different amount of content.
        </li>
      </ul>
      <p>
        As you'll see in subsequent sections, flexbox makes a lot of layout
        tasks much easier. Let's dig in!
      </p>
    </section>
  );
}
